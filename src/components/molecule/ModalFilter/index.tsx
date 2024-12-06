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
  filterOnPress?: (label: string) => void;
  sendCategory: (value: string) => void;
  // xPosition: number;
  // yPosition: number;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  icon?: boolean;
  buttonContainerStyle?: ViewStyle;
  onModalHide?: () => void;
  selectedMenu?: (label: any) => void;
}

const FilterModal: FC<ModalFilterProps> = (props: ModalFilterProps) => {
  const {
    toggleModal,
    modalVisible,
    dataFilter,
    filterOnPress,
    sendCategory,
    // xPosition,
    // yPosition,
    containerStyle,
    textStyle,
    icon,
    buttonContainerStyle,
    onModalHide,
    selectedMenu,
  } = props;

  const filterButtonHandler = (data: any) => {
    toggleModal();
    filterOnPress?.(data.label);
    sendCategory?.(data.value);
    selectedMenu?.(data);
  };

  return (
    <>
      {modalVisible && (
        <Modal
          isVisible={modalVisible}
          backdropOpacity={0}
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
            {/* {dataFilter.map((item, index) => (
              <TouchableOpacity
                key={index.toString()}
                style={[styles.buttonContainer, buttonContainerStyle]}
                onPress={() => filterButtonHandler(item)}
                disabled={item?.disabled ?? false}>
                <Text
                  style={[
                    styles.textFilter,
                    {
                      color: item?.disabled
                        ? color.Dark[100]
                        : color.Neutral[10],
                    },
                    textStyle,
                  ]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))} */}
          </View>
        </Modal>
      )}
    </>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.Dark[600],
    borderColor: color.Dark[600],
    alignItems: 'flex-start',
    borderRadius: 4,
    paddingVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: widthResponsive(12),
    paddingVertical: widthResponsive(5),
    borderColor: color.Dark[600],
  },
  textFilter: {
    fontSize: widthResponsive(10),
    fontFamily: font.InterRegular,
    fontWeight: '500',
    color: color.Neutral[10],
  },
});
