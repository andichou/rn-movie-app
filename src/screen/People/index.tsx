import React, { useEffect } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LabelConstant, ORANGE } from '../../common/constants';
import { getDimensionWidth } from '../../common/util';
import { ImageTile } from '../../component/image';
import { Row } from '../../component/row';
import { fetchPopularPeople } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { PeopleInterface } from '../../redux/types';

interface Props {}
export const People: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const { popularPeoples } = useSelector((state: RootState) => state.people)
    const handleViewDetail = () => {};

    function loadData() {
        dispatch(fetchPopularPeople());
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
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
