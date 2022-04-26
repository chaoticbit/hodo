/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView, TouchableOpacity as DefaultTouchableOpacity, Touchable, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type ButtonProps = ThemeProps & TouchableOpacity['props'] & DefaultText['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color: Colors.text, fontFamily: 'Montserrat_400Regular' }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Button(props: ButtonProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;

  return (
    <DefaultTouchableOpacity style={[{ backgroundColor: Colors.primary, width: '100%', borderRadius: 12, paddingVertical: 14, alignItems: 'center' }, style]} {...otherProps}>
      <DefaultText style={[{ color: '#fff', textAlign: 'center', fontFamily: 'Montserrat_400Regular' }, style]} {...otherProps} />
    </DefaultTouchableOpacity>
  );
}