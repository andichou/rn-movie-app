import React from 'react';
import { AccessibilityRole, Image, ImageResizeMode, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { LIGHT_GRAY } from '../../common/constants';
import { getImageURI } from '../../common/util';

interface Props {
    path: string;
    width?: number;
    height?: number;
    borderRadius?: number;
    resize?: ImageResizeMode;
    callback?: () => any;
    accessibilityRole?: AccessibilityRole;
    accessibilityLabel?: string;
}

export const ImageTile: React.FC<Props> = ({
    path, width = 120, height = 150, borderRadius = 10,
    resize = 'cover', callback = () => {},
    accessibilityRole = 'none', accessibilityLabel = ''
}) => {
    let imageSource = require('../../assets/images/default-image.png');

    if (path) {
        const uri = getImageURI(path);
        imageSource = { ...uri };
    }

    return (
        <TouchableWithoutFeedback onPress={callback}>
            <View style={[style.image, {borderRadius: borderRadius}]}>
                <Image accessibilityRole={accessibilityRole}
                       accessibilityLabel={accessibilityLabel}
                       resizeMode={resize}
                       source={imageSource}
                       style={[{ width: width, height: height }]}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const style = StyleSheet.create({
    image: {
        overflow: 'hidden',
        backgroundColor: LIGHT_GRAY,
        marginRight: 15,
        marginBottom: 15
    }
})
