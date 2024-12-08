import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {color} from '../../../theme';
import {widthResponsive} from '../../../utils/dimensionFormat';
import {
  Transactions,
  TransactionStatus,
} from '../../../interface/transaction.interface';
import {Gap} from '../../atom';
import {capitalizeText, formatCurrency, formatDate} from '../../../utils';
import StatusCard from '../../atom/StatusCard/StatusCard';
import {ArrowRightIcon} from '../../../assets/icon';

interface Props {
  item: Transactions;
  onPress: ({item}: {item: Transactions}) => void;
}

const ListTransactionCard = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress({item})}>
      <View
        style={[
          styles.cardLeftStyle,
          {
            backgroundColor:
              item.status.toString() === 'SUCCESS'
                ? color.Success[400]
                : color.Warning[700],
          },
        ]}
      />
      <View style={styles.mainBodyContainer}>
        <View style={styles.bankContainer}>
          <Text style={[styles.textStyle, {fontWeight: 'bold'}]}>
            {capitalizeText(item.sender_bank.toString()) + ' '}
          </Text>
          <ArrowRightIcon />
          <Text style={[styles.textStyle, {fontWeight: 'bold'}]}>
            {' ' + capitalizeText(item.beneficiary_bank.toString())}
          </Text>
        </View>
        <Gap height={4} />
        <Text style={styles.textStyle}>
          {item.beneficiary_name.toString().toUpperCase()}
        </Text>
        <Gap height={4} />
        <View style={styles.amountContainer}>
          <Text style={styles.textStyle}>
            {formatCurrency(parseInt(item.amount.toString()))}
          </Text>
          <View style={styles.dotContainer} />
          <Text style={styles.textStyle}>
            {formatDate(item.created_at.toString())}
          </Text>
        </View>
      </View>
      <View style={styles.statusCardContainer}>
        <StatusCard status={item.status.toString() as TransactionStatus} />
      </View>
    </TouchableOpacity>
  );
};

export default ListTransactionCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: widthResponsive(10),
    marginBottom: widthResponsive(8),
    flexDirection: 'row',
    overflow: 'hidden',
  },
  cardLeftStyle: {
    width: widthResponsive(8),
    backgroundColor: color.Primary[500],
  },
  mainBodyContainer: {
    flex: 1,
    padding: widthResponsive(10),
    backgroundColor: color.Neutral[10],
  },
  bankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusCardContainer: {
    backgroundColor: color.Neutral[10],
    paddingRight: widthResponsive(10),
    justifyContent: 'center',
  },
  textStyle: {
    color: color.Dark[900],
    fontSize: widthResponsive(14),
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotContainer: {
    width: widthResponsive(5),
    height: widthResponsive(5),
    backgroundColor: color.Dark[900],
    borderRadius: widthResponsive(50),
    marginHorizontal: widthResponsive(4),
    marginTop: widthResponsive(2),
  },
});
