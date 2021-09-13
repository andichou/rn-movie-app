export function getImageURI(path: string, key: string = 'uri', width: string = "w500") {
    if (path) {
        return {[key]: `https://image.tmdb.org/t/p/${width}${path}`};
    }
    return '';
}
