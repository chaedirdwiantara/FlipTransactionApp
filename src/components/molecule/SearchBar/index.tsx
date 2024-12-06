import React from 'react';
import {StyleSheet, TextInputProps, View, ViewStyle} from 'react-native';
import {color} from '../../../theme';
import SearchIcon from '../../../assets/icon/Search.icon';
import Search from '../InputText/Search';

interface SearchProps extends TextInputProps {
  fontSize?: number;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  isError?: boolean;
  errorMsg?: string;
  password?: boolean;
  backgroundColor?: string;
  rightIcon?: boolean;
  reset?: () => void;
  containerStyle?: ViewStyle;
  placeholder?: string;
}

const SearchBar: React.FC<SearchProps> = props => {
  const {onChangeText, value, rightIcon, reset, containerStyle, placeholder} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <Search
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        leftIcon={<SearchIcon stroke={color.Neutral[95]} />}
        rightIcon={rightIcon}
        reset={reset}
        containerStyle={styles.inputContainer}
        {...props}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    borderColor: color.Neutral[20],
  },
});
