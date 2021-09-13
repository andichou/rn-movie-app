import { ColorSchemeName, useColorScheme } from 'react-native';

export default function useTheme(): NonNullable<ColorSchemeName> {
    return useColorScheme() as NonNullable<ColorSchemeName>;
}
