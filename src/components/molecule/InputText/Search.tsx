import React from 'react';
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
import ChevronDownIcon from '../../../assets/icon/ChevronDown.icon';

interface InputProps extends TextInputProps {
    leftIcon?: React.ReactNode;
    filterOnPress?: () => void;
    containerStyles?: ViewStyle;
    inputStyles?: ViewStyle;
    leftIconContainer?: ViewStyle;
    selectedFilter: string;
  }
  
  const FontColor = color.Neutral[95];
  
  const Search: React.FC<InputProps> = props => {
    const {
      value,
      keyboardType,
      onChangeText,
      leftIcon,
      filterOnPress,
      onSubmitEditing,
      onEndEditing,
      containerStyles,
      inputStyles,
      leftIconContainer,
      selectedFilter,
    } = props;
  
    const rightIconComp = () => {
      return (
        <TouchableOpacity onPress={filterOnPress} style={styles.rightIconContainer}>
          <Text style={styles.filterStyle}>{selectedFilter}</Text>
          <ChevronDownIcon/>
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
            placeholderTextColor={FontColor}
            onEndEditing={onEndEditing}
            onSubmitEditing={onSubmitEditing}
            {...props}
          />
          <View>
            {rightIconComp()}
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
  rightIconContainer: {
    padding: ms(4),
    flexDirection: 'row',
    alignItems: 'center',
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
  filterStyle: {
    fontSize: mvs(13),
    fontFamily: font.InterLight,
    fontWeight: 'bold',
    color: color.Warning[900],
  },
});
