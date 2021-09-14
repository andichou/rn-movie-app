class Constants {
  static final String MASTER_BRANCH = 'master'
  static final String QA_BUILD = 'Debug'
  static final String RELEASE_BUILD = 'Release'
  static final String INTERNAL_TRACK = 'internal'
  static final String RELEASE_TRACK = 'release'
}

def getBuildType() {
  switch (env.BRANCH_NAME) {
    case Constants.MASTER_BRANCH:
      return Constants.RELEASE_BUILD
    default:
      return Constants.QA_BUILD
  }
}

def getTrackType() {
  switch (env.BRANCH_NAME) {
    case Constants.MASTER_BRANCH:
      return Constants.RELEASE_TRACK
    default:
      return Constants.INTERNAL_TRACK
  }
}

def deployCandidate() {
  return ("${env.BRANCH_NAME}" =~ /(develop|master)/)
}

pipeline {
  agent { dckerfile true }
  environment {
    appName = "movie-app"

    KEY_PASSWORD = credentials('keyPassword')
    KEY_ALIAS = credentials('keyAlias')
    KEYSTORE = credentials('keystore')
    STORE_PASSWORD = credentials('storePassword')
  }
  stages {
    stage('Run Tests') {
      steps {
        echo '<< RUN TEST >>'
        script {
          VARIANT = getBuildType()
          sh "./gradlew test${VARIANT}UnitTest"
        }
      }
    }
    stage('Build Bundle') {
      when { expression { return deployCandidate() } }
      steps {
        echo '<< BUILD >>'
        script {
          VARIANT = getBuildType()
          sh "./gradlew -PstorePass=${STORE_PASSWORD} -Pkeystore=${KEYSTORE} -Palias=${KEY_ALIAS} -PkeyPass=${KEY_PASSWORD} bundle${VARIANT}"
        }
      }
    }
    stage('Deploy App to Store') {
      when { expression { return deployCandidate() } }
      steps {
        echo '<< DEPLOY >>'
        script {
          VARIANT = getBuildType()
          TRACK = getTrackType()

          if (TRACK == Constants.RELEASE_TRACK) {
            timeout(time: 5, unit: 'MINUTES') {
              input "Proceed deployment ${TRACK}?"
            }
          }

          try {
            CHANGELOG = readFile(file: 'CHANGELOG.txt')
          } catch (err) {
            echo "Error read CHANGELOG.txt file: ${err.localizedMessage}"
            CHANGELOG = ''
          }

          androidApkUpload googleCredentialsId: 'play-store-credentials',
          filesPattern: "**/outputs/bundle/${VARIANT.toLowerCase()}/*.aab",
          trackName: TRACK,
          recentChangeList: [[language: 'en-US', text: CHANGELOG]]
        }
      }
    }
  }
}
