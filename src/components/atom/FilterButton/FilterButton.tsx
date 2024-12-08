import React, {FC} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {font} from '../../../theme';
import {widthResponsive} from '../../../utils';
import {color} from '../../../theme';
import ChoosenIcon from '../../../assets/icon/Choosen.icon';
import CircleIcon from '../../../assets/icon/Circle.icon';
import Gap from '../Gap/Gap';

interface FilterButtonProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
  disabled?: boolean;
}

const FilterButton: FC<FilterButtonProps> = ({
  label,
  isSelected,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer]}
      onPress={onPress}
      disabled={disabled}>
      {isSelected ? <ChoosenIcon /> : <CircleIcon />}
      <Gap width={10} />
      <Text style={styles.textFilter}>{label}</Text>
    </TouchableOpacity>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: widthResponsive(12),
    paddingVertical: widthResponsive(5),
    borderColor: color.Dark[600],
    marginBottom: widthResponsive(24),
  },
  textFilter: {
    fontSize: widthResponsive(16),
    fontFamily: font.InterRegular,
    fontWeight: '600',
    color: color.Dark[900],
  },
  selectedFilter: {
    color: color.Primary[500],
  },
});
