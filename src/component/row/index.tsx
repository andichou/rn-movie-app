import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ORANGE } from '../../common/constants';
import { ImageTile } from '../image';

interface Props {
    title: string;
    datas: any;
}

export const Row: React.FC<Props> = ({
    title, datas
}) => {
    const handleViewDetail = () => {};

    return (
        <View style={{ marginBottom: 15 }}>
            <Text style={style.title}>{ title }</Text>
            <FlatList data={datas}
                      horizontal
                      renderItem={({ item }: {item: any}) => <ImageTile path={item.poster_path}
                                                           height={220}
                                                           width={150}
                                                           accessibilityRole={'imagebutton'}
                                                           accessibilityLabel={`${item.title} image`}
                                                           callback={handleViewDetail} />}
                      keyExtractor={(item) => item.id.toString()}
                      style={{ marginRight: 11, marginTop: 4 }}
                      showsHorizontalScrollIndicator={false} />
        </View>
    );
}

const style = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: ORANGE
    }
});
