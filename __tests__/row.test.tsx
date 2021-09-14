import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { FlatList } from 'react-native';
import renderer from 'react-test-renderer';
import { Row } from '../src/component/row';
import mockData from '../__mocks__/mock.data';

// jest.unmock('../src/component/row/index');
configure({ adapter: new Adapter() })

describe('Row Component', () => {
    let component: any = shallow(
        <Row title={mockData.title} datas={mockData.data} />
    );

    it('should render correctly', () => {
        const snapshot = renderer.create(component).toJSON();
        expect(snapshot).toMatchSnapshot();
    });

    it('should render title correctly', () => {
        expect(component.find('Text').props().children).toEqual(mockData.title);
    });

    it('should render flatlist correctly', () => {
        expect(component.find(FlatList).length).toBe(1);
    });

    it('should flatlist return keyExtractor correctly', () => {
        const keyExtractor = component
            .find('FlatList')
            .props()
            .keyExtractor({id: mockData.data[0].id});

        expect(keyExtractor).toEqual(mockData.data[0].id.toString())
    });
});
