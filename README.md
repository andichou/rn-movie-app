How to run app in locally:
1. android:
    1. run `yarn react-native run-android` in your terminal
2. ios:
    1. run `yarn react-native run-ios` in your terminal
   


How to setup jenkins for android with docker
1. install jenkins
2. install plugin in jenkins with following steps:
   1. open manage jenkins
   2. open manage plugins, and then install these below plugins:
      1. docker common
      2. docker pipeline
      3. google play android publisher
3. add environment variables:
   1. open manage jenkins
   2. open configure system
   3. open global properties
   4. open environment variables
   5. add Path variable to point where docker command location is installed
4. create job
   1. click new item
   2. create multibranch pipeline
   3. add new source, point to your github repo
   4. choose credential github
   5. to able detect any code that is pushed, use webhook in github, and enable scan repo triggers in jenkins
   6. add script to run test, build and deployment to google play (don't forget to setup local.properties and build.gradle on your android project to generate bundle and version code of app)
