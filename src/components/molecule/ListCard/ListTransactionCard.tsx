import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { color } from '../../../theme'
import { widthResponsive } from '../../../utils/dimensionFormat'
import { Transactions } from '../../../interface/transaction.interface'
import { Gap } from '../../atom'
import { capitalizeText, formatCurrency, formatDate } from '../../../utils'

interface Props {
  item: Transactions;
  onPress: ({item}: {item: Transactions}) => void;
}

const ListTransactionCard = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress({item})}>
      <View style={[styles.cardLeftStyle, {backgroundColor: item.status.toString() === 'SUCCESS' ? color.Success[400] : color.Warning[700]}]} />
      <View style={styles.mainBodyContainer}>
        <Text style={[styles.textStyle, {fontWeight: 'bold'}]}>
          {capitalizeText(item.sender_bank.toString())} {' -> '} {capitalizeText(item.beneficiary_bank.toString())}
        </Text>
        <Gap height={5} />
        <Text style={styles.textStyle}>
          {item.beneficiary_name.toString().toUpperCase()}
        </Text>
        <Gap height={5} />
        <Text style={styles.textStyle}>
          {formatCurrency(parseInt(item.amount.toString()))} {' . '} {formatDate(item.created_at.toString())}
        </Text>
      </View> 
    </TouchableOpacity>
  )
}

export default ListTransactionCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: widthResponsive(10),
    marginBottom: widthResponsive(12),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: color.Neutral[30],
  },
  cardLeftStyle: {
    width: widthResponsive(10),
    backgroundColor: color.Primary[500],
    borderTopLeftRadius: widthResponsive(10),
    borderBottomLeftRadius: widthResponsive(10),
  },
  mainBodyContainer: {
    flex: 1,
    padding: widthResponsive(10),
    backgroundColor: color.Neutral[10],
    borderTopRightRadius: widthResponsive(10),
    borderBottomRightRadius: widthResponsive(10),
  },
  textStyle: {
    color: color.Dark[800],
    fontSize: widthResponsive(16),
  },
})
