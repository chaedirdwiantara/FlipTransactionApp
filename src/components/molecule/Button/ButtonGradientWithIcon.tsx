import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Font from '../../../theme/Font';
import {normalize} from '../../../utils';
import {ChevronDownIcon} from '../../../assets/icon';
import {color, font} from '../../../theme';
import {ms, mvs} from 'react-native-size-matters';
import {Gap} from '../..';

interface ButtonGradientProps {
  title: string;
  label: string;
  angle?: number;
  colors?: string[];
  disabled?: boolean;
  onPress: () => void;
  textStyles?: TextStyle;
  gradientStyles?: ViewStyle;
  containerStyles?: ViewStyle;
  textIconContainer?: ViewStyle;
}

export const ButtonGradientwithIcon: React.FC<ButtonGradientProps> = (
  props: ButtonGradientProps,
) => {
  const {
    title,
    label,
    angle = 95.44,
    colors = ['#F98FD9', '#FF70D4'],
    disabled,
    onPress,
    textStyles,
    gradientStyles,
    containerStyles,
    textIconContainer,
  } = props;

  return (
    <>
      <Text style={styles.titleStyle}>{title}</Text>
      <Gap height={15} />
      <TouchableOpacity
        style={containerStyles}
        disabled={disabled}
        testID={'ssu-button-gradient'}
        onPress={onPress}>
        <LinearGradient
          useAngle
          colors={colors}
          angle={angle}
          style={[styles.gradient, gradientStyles]}>
          <View style={[styles.textIconContainer, textIconContainer]}>
            <Text style={[styles.text, textStyles]}>{label}</Text>
            <ChevronDownIcon
              width={16}
              height={16}
              stroke={color.Neutral[10]}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIconContainer: {
    flexDirection: 'row',
    paddingHorizontal: ms(12),
    paddingVertical: ms(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: normalize(12),
    color: color.Neutral[10],
    fontFamily: Font.InterMedium,
  },
  titleStyle: {
    color: color.Neutral[10],
    fontSize: mvs(13),
    fontFamily: font.InterLight,
    fontWeight: '400',
  },
});
