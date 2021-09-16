import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { LabelConstant, ORANGE } from '../../common/constants';
import { getDimensionWidth } from '../../common/util';
import { ImageTile } from '../../component/image';
import { PeopleContext } from '../../context/people.context';
import { PeopleInterface } from '../../redux/types';

interface Props {}
export const People: React.FC<Props> = (props) => {
    const handleViewDetail = () => {};

    return (
        <PeopleContext.Consumer>
            {(popularPeoples) => (
                <View style={[style.container, { marginBottom: 30 }]}>
                    <Text style={style.title}>{ LabelConstant.POPULAR }</Text>
                    <FlatList data={popularPeoples}
                              renderItem={({ item }: {item: PeopleInterface}) => <ImageTile path={item.profile_path}
                                                                                            height={220}
                                                                                            width={getDimensionWidth() / 2.35}
                                                                                            accessibilityRole={'imagebutton'}
                                                                                            accessibilityLabel={`${item.name} image`}
                                                                                            callback={handleViewDetail} />}
                              keyExtractor={(item) => item.id.toString()}
                              style={{ marginRight: 11, marginTop: 4 }}
                              showsHorizontalScrollIndicator={false}
                              numColumns={2}/>
                </View>
            )}
        </PeopleContext.Consumer>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 16
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: ORANGE
    }
});
