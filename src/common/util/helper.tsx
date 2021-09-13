import { Dimensions } from 'react-native';

export function getImageURI(path: string, key: string = 'uri', width: string = "w500") {
    if (path) {
        return {[key]: `https://image.tmdb.org/t/p/${width}${path}`};
    }
    return '';
}

export function getDimensionWidth() {
    return Dimensions.get('window').width;
}
