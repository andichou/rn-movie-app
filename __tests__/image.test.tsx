import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { FlatList, Image } from 'react-native';
import renderer from 'react-test-renderer';
import { ImageTile } from '../src/component/image';

configure({ adapter: new Adapter() })
const mockData = {
    path: '/test-image',
    width: 100,
    height: 150,
    borderRadius: 10,
    resize: 'cover',
    accessibilityRole: 'image',
    accessibilityLabel: 'image-test-1'
};

describe('Image Component', () => {
    let component: any = shallow(
        <ImageTile path={mockData.path}
                   width={mockData.width}
                   height={mockData.height}
                   borderRadius={mockData.borderRadius}
                   resize={'cover'}
                   accessibilityRole={'image'}
                   accessibilityLabel={mockData.accessibilityLabel} />
    );

    it('should render correctly', () => {
        const snapshot = renderer.create(component).toJSON();
        expect(snapshot).toMatchSnapshot();
    });

    it('should render image correctly', () => {
        const expectedSource = {['uri']: `https://image.tmdb.org/t/p/w500${mockData.path}`};
        expect(component.find(Image).length).toEqual(1);
        expect(component.find(Image).prop("source")).toEqual(expectedSource);
    });
});
