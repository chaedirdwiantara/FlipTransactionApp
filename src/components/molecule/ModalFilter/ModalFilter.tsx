import {
  Dimensions,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import Modal from 'react-native-modal';
import {color, font} from '../../../theme';
import {widthResponsive} from '../../../utils';
import FilterButton from '../../atom/FilterButton/FilterButton';

export const {width} = Dimensions.get('screen');

interface ModalFilterProps {
  toggleModal: () => void;
  modalVisible: boolean;
  dataFilter: any[];
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  onModalHide?: () => void;
  setFilter: (label: string) => void;
  selectedFilter: string;
}

const FilterModal: FC<ModalFilterProps> = (props: ModalFilterProps) => {
  const {
    toggleModal,
    modalVisible,
    dataFilter,
    containerStyle,
    onModalHide,
    setFilter,
    selectedFilter,
  } = props;

  const filterButtonHandler = (label: string) => {
    toggleModal();
    setFilter(label);
  };

  return (
    <>
      {modalVisible && (
        <Modal
          isVisible={modalVisible}
          backdropOpacity={0.5}
          backdropColor={color.Dark[800]}
          onBackdropPress={toggleModal}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          style={{marginHorizontal: 0}}
          onBackButtonPress={toggleModal}
          onModalHide={onModalHide}>
          <View
            style={[
              styles.container,
              containerStyle,
            ]}>
            {dataFilter.map((item, index) => (
              <FilterButton
                key={index.toString()}
                label={item.label}
                isSelected={selectedFilter === item.label}
                onPress={() => filterButtonHandler(item.label)}
              />
            ))}
          </View>
        </Modal>
      )}
    </>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.Neutral[10],
    alignItems: 'flex-start',
    borderRadius: 4,
    paddingTop: widthResponsive(24),
    paddingHorizontal: widthResponsive(14),
    marginHorizontal: widthResponsive(20),
  },
});
