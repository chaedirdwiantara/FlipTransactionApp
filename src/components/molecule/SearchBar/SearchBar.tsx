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
  filterBtnOnPress: () => void;
  containerStyle?: ViewStyle;
  placeholder?: string;
  selectedFilter: string;
}

const SearchBar: React.FC<SearchProps> = props => {
  const {onChangeText, value, filterBtnOnPress, containerStyle, placeholder, selectedFilter} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <Search
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        leftIcon={<SearchIcon stroke={color.Neutral[95]} />}
        filterOnPress={filterBtnOnPress}
        containerStyle={styles.inputContainer}
        selectedFilter={selectedFilter}
        {...(({ selectedFilter, ...rest }) => rest)(props)}
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
