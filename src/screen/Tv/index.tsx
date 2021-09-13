import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LabelConstant } from '../../common/constants';
import { Row } from '../../component/row';
import { fetchOnAirTv, fetchPopularTv, fetchTopTv } from '../../redux/actions';
import { RootState } from '../../redux/reducers';

interface Props {}
export const Tv: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const { popularTvs, topTvs, onAirTvs } = useSelector((state: RootState) => state.tv)

    function loadData() {
        dispatch(fetchPopularTv());
        dispatch(fetchTopTv());
        dispatch(fetchOnAirTv());
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <ScrollView style={style.container}>
            <Row title={LabelConstant.POPULAR}
                 datas={popularTvs} />
            <Row title={LabelConstant.TOP_RATED}
                 datas={topTvs} />
            <Row title={LabelConstant.ON_THE_AIR}
                 datas={onAirTvs} />
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 16
    }
});
