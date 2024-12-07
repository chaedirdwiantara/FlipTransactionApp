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
              <TouchableOpacity
                key={index.toString()}
                style={[styles.buttonContainer]}
                onPress={() => filterButtonHandler(item.label)}
                disabled={item?.disabled ?? false}>
                <Text
                  style={[
                    styles.textFilter,
                    selectedFilter === item.label && styles.selectedFilter,
                  ]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
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
    paddingTop: widthResponsive(20),
    paddingHorizontal: widthResponsive(14),
    marginHorizontal: widthResponsive(20),
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: widthResponsive(12),
    paddingVertical: widthResponsive(5),
    borderColor: color.Dark[600],
    marginBottom: widthResponsive(20),
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
