import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthResponsive} from '../../../utils/dimensionFormat';
import {color} from '../../../theme';
import {TransactionStatus} from '../../../interface/transaction.interface';

const StatusCard = ({status}: {status: TransactionStatus}) => {
  return status === 'SUCCESS' ? (
    <View style={styles.successContainer}>
      <Text style={styles.successTextStyle}>{'Berhasil'}</Text>
    </View>
  ) : (
    <View style={styles.pendingContainer}>
      <Text style={styles.pendingTextStyle}>{'Pengecekan'}</Text>
    </View>
  );
};

export default StatusCard;

const styles = StyleSheet.create({
  successContainer: {
    paddingHorizontal: widthResponsive(10),
    paddingVertical: widthResponsive(6),
    backgroundColor: color.Success[400],
    borderRadius: widthResponsive(6),
  },
  pendingContainer: {
    paddingHorizontal: widthResponsive(10),
    paddingVertical: widthResponsive(6),
    backgroundColor: color.Neutral[10],
    borderRadius: widthResponsive(6),
    borderWidth: 1,
    borderColor: color.Warning[700],
  },
  successTextStyle: {
    color: color.Neutral[10],
    fontSize: widthResponsive(12),
    fontWeight: 'bold',
  },
  pendingTextStyle: {
    color: color.Dark[800],
    fontSize: widthResponsive(12),
    fontWeight: 'bold',
  },
});
