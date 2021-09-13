import { LinkingOptions } from '@react-navigation/native';
import { PathConstant } from '../common/constants/pathConstant';
import { RootStackParamList } from './types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['/'],
  config: {
    screens: {
      Root: {
        screens: {
          Movie: {
            screens: {
              Movie: PathConstant.MOVIE,
            },
          },
          TV: {
            screens: {
              TV: PathConstant.TV,
            },
          },
          People: {
            screens: {
              People: PathConstant.PEOPLE,
            },
          },
          // MovieDetail: {
          //   screens: {
          //     MovieDetail: 'movieDetail',
          //   },
          // },
        },
      },
      // NotFound: '*',
    }
  },
};

export default linking;
