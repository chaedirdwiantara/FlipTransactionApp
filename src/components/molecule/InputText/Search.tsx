import React from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {ms, mvs} from 'react-native-size-matters';

import {color, font} from '../../../theme';
import {widthResponsive} from '../../../utils/dimensionFormat';
import CloseIcon from '../../../assets/icon/Close.icon';

interface InputProps extends TextInputProps {
    fontSize?: number;
    disabled?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: boolean;
    rightIconComponent?: React.ReactNode;
    reset?: () => void;
    containerStyles?: ViewStyle;
    inputStyles?: ViewStyle;
    leftIconContainer?: ViewStyle;
  }
  
  const FontColor = color.Neutral[95];
  
  const Search: React.FC<InputProps> = props => {
    const {
      value,
      keyboardType,
      onChangeText,
      disabled,
      leftIcon,
      rightIcon,
      rightIconComponent,
      reset,
      onSubmitEditing,
      onEndEditing,
      containerStyles,
      inputStyles,
      leftIconContainer,
    } = props;
  
    const rightIconComp = () => {
      return (
        <TouchableOpacity onPress={reset} style={{padding: ms(4)}}>
          <CloseIcon stroke={FontColor} />
        </TouchableOpacity>
      );
    };
  
    return (
      <>
        <View
          style={[
            styles.container,
            containerStyles,
          ]}>
          {leftIcon && (
            <View style={[styles.leftIconStyle, leftIconContainer]}>
              {leftIcon}
            </View>
          )}
          <TextInput
            style={[styles.input, inputStyles]}
            value={value}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            editable={disabled ? false : true}
            placeholderTextColor={FontColor}
            onEndEditing={onEndEditing}
            onSubmitEditing={onSubmitEditing}
            {...props}
          />
          <View>
            {rightIcon
              ? rightIconComponent
                ? rightIconComponent
                : rightIconComp()
              : null}
          </View>
        </View>
      </>
    );
  };

export default Search;

const styles = StyleSheet.create({
  container: {
    borderRadius: widthResponsive(10),
    paddingHorizontal: widthResponsive(12),
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: color.Neutral[10],
    borderWidth: 1,
    borderColor: color.Neutral[30],
  },
  leftIconStyle: {
    marginRight: widthResponsive(8),
    width: widthResponsive(20),
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: mvs(13),
    fontFamily: font.InterLight,
    fontWeight: '400',
    color: color.Dark[900],
    marginVertical: Platform.OS === 'ios' ? mvs(12.5) : 0,
  },
});