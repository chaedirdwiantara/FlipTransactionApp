import React, {useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {ms, mvs} from 'react-native-size-matters';

import {color, font} from '../../../theme';
import {widthResponsive} from '../../../utils/dimensionFormat';
import {Gap} from '../../atom';
import {
  CloseIcon,
  ErrorIcon,
  EyeCloseIcon,
  EyeOpenIcon,
} from '../../../assets/icon';

interface InputProps extends TextInputProps {
  title?: string;
  fontSize?: number;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  isError?: boolean;
  errorMsg?: string;
  password?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  fontColor?: string;
  rightIcon?: boolean;
  isFocus?: boolean;
  rightIconComponent?: React.ReactNode;
  reset?: () => void;
  containerStyles?: ViewStyle;
  inputStyles?: ViewStyle;
  leftIconContainer?: ViewStyle;
}

const ErrorColor = color.Error[400];
const FontColor = color.Dark[300];

const InputText: React.FC<InputProps> = props => {
  const {
    title,
    value,
    keyboardType,
    onChangeText,
    disabled,
    isError,
    errorMsg,
    leftIcon,
    password,
    backgroundColor,
    borderColor,
    rightIcon,
    rightIconComponent,
    isFocus,
    reset,
    onSubmitEditing,
    onEndEditing,
    containerStyles,
    inputStyles,
    leftIconContainer,
  } = props;
  const [state, setState] = useState<boolean>(false);
  const [secure, setSecure] = useState<boolean>(true);

  const newBorderWidth = isError || borderColor ? 1 : 0;
  const newBorderColor = isError
    ? ErrorColor
    : borderColor && state
    ? borderColor
    : '';

  const rightIconComp = () => {
    return (
      <TouchableOpacity onPress={reset} style={{padding: ms(4)}}>
        <CloseIcon stroke={FontColor} fill={backgroundColor} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      {title && (
        <>
          <Text style={styles.titleStyle}>{title}</Text>
          <Gap height={15} />
        </>
      )}
      <View
        style={[
          styles.container,
          {
            backgroundColor: backgroundColor
              ? backgroundColor
              : color.Dark[900],
            borderWidth: newBorderWidth,
            borderColor: newBorderColor,
          },
          isFocus
            ? {borderColor: color.Pink[200], borderWidth: 1}
            : {borderColor: color.Dark[800], borderWidth: 1},
          isError && !isFocus
            ? {borderColor: ErrorColor, borderWidth: 1}
            : null,
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
          secureTextEntry={password ? secure : false}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          editable={disabled ? false : true}
          placeholderTextColor={FontColor}
          onFocus={() => setState(true)}
          onEndEditing={onEndEditing}
          onSubmitEditing={onSubmitEditing}
          {...props}
        />
        {password ? (
          <TouchableOpacity
            onPress={() => {
              setSecure(!secure);
            }}>
            {secure ? (
              <EyeCloseIcon stroke={FontColor} />
            ) : (
              <EyeOpenIcon stroke={FontColor} />
            )}
          </TouchableOpacity>
        ) : null}
        <View>
          {rightIcon
            ? rightIconComponent
              ? rightIconComponent
              : rightIconComp()
            : null}
        </View>
      </View>

      {isError === true ? (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingTop: mvs(4),
            alignItems: 'flex-start',
          }}>
          <ErrorIcon fill={ErrorColor} style={{marginBottom: mvs(-1)}} />
          <Gap width={4} />
          <Text
            style={{
              fontFamily: font.InterRegular,
              fontWeight: '400',
              fontSize: mvs(10),
              lineHeight: mvs(12),
              color: ErrorColor,
              maxWidth: '90%',
            }}>
            {errorMsg}
          </Text>
        </View>
      ) : null}
    </>
  );
};

interface TextAreaProps extends TextInputProps {
  title?: string;
  backgroundColor?: string;
  containerStyles?: ViewStyle;
  inputStyles?: ViewStyle;
  isFocus?: boolean;
}

const TextArea: React.FC<TextAreaProps> = props => {
  const {
    title,
    value,
    onChangeText,
    editable,
    placeholder,
    backgroundColor,
    containerStyles,
    inputStyles,
    maxLength,
    isFocus,
  } = props;
  const [state, setState] = useState<boolean>(false);
  return (
    <>
      {title && (
        <>
          <Text style={styles.titleStyle}>{title}</Text>
          <Gap height={15} />
        </>
      )}
      <View
        style={[
          styles.container,
          {
            borderBottomWidth: state === true ? 1 : 0,
            borderBottomColor: color.Pink[200],
            backgroundColor: backgroundColor
              ? backgroundColor
              : color.Dark[900],
          },
          isFocus
            ? {borderBottomColor: color.Pink[200], borderBottomWidth: 1}
            : {borderBottomWidth: 0},
          containerStyles,
        ]}>
        <TextInput
          style={[styles.inputTextArea, inputStyles]}
          multiline={true}
          numberOfLines={7}
          value={value}
          onChangeText={onChangeText}
          editable={editable}
          placeholder={placeholder}
          placeholderTextColor={FontColor}
          onFocus={() => setState(true)}
          maxLength={maxLength}
          textAlignVertical="top"
          {...props}
        />
      </View>
    </>
  );
};

export default {InputText, TextArea};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingHorizontal: widthResponsive(12),
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
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
    color: color.Neutral[10],
    marginVertical: Platform.OS === 'ios' ? mvs(12.5) : 0,
  },
  inputTextArea: {
    flex: 1,
    fontSize: mvs(13),
    fontFamily: font.InterLight,
    textAlignVertical: 'top',
    color: color.Neutral[10],
    height: mvs(100),
    paddingTop: widthResponsive(10),
  },
  titleStyle: {
    color: color.Neutral[10],
    fontSize: mvs(13),
    fontFamily: font.InterLight,
    fontWeight: '400',
  },
});
