import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

interface Props {}
export const Movie: React.FC<Props> = (props) => {
    return (
        <ScrollView style={style.container}>
            <Text>Hello World</Text>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 16
    }
});
