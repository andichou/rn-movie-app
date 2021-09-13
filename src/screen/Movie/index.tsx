import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LabelConstant } from '../../common/constants';
import { Row } from '../../component/row';
import { fetchNowMovies, fetchPopularMovies, fetchTopMovies, fetchUpcomingMovies } from '../../redux/actions';
import { RootState } from '../../redux/reducers';

interface Props {}
export const Movie: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const { popularMovies, topMovies, nowMovies, upcomingMovies } = useSelector((state: RootState) => state.movie)

    function loadData() {
        dispatch(fetchPopularMovies());
        dispatch(fetchTopMovies());
        dispatch(fetchUpcomingMovies());
        dispatch(fetchNowMovies());
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <ScrollView style={style.container}>
            <Row title={LabelConstant.POPULAR}
                 datas={popularMovies} />
            <Row title={LabelConstant.TOP_RATED}
                 datas={topMovies} />
            <Row title={LabelConstant.UPCOMING}
                 datas={upcomingMovies} />
            <Row title={LabelConstant.NOW_PLAYING}
                 datas={nowMovies} />
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 16
    }
});
