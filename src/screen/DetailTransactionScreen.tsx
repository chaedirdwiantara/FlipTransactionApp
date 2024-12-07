import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, { useCallback } from 'react'
import { color } from '../theme'
import { widthResponsive } from '../utils/dimensionFormat'
import { RootStackParams } from '../navigations'
import { RouteProp } from '@react-navigation/native'
import { Gap } from '../components/atom'
import { useNavigation } from '@react-navigation/native'
import DoubleText from '../components/molecule/DoubleText/DoubleText'

const DetailTransactionScreen = React.memo(({route}: {route: RouteProp<RootStackParams, 'DetailTransactionScreen'>}) => {
    const { item } = route.params;

    const navigation = useNavigation();

    const handleGoBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <Gap height={20} />
            <View style={styles.bodyContainer}>
                <Text style={styles.textStyle}>{'ID TRANSAKSI: #'}{item.id.toString()}</Text>
            </View>
            <View style={[styles.bodyContainer,styles.middleSection]}>
                <Text style={styles.textStyle}>{'DETAIL TRANSAKSI'}</Text>
                <TouchableOpacity onPress={handleGoBack}>
                    <Text style={styles.textStyle}>{'Tutup'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={[styles.textStyle,{fontSize: widthResponsive(20)}]}>{item.sender_bank.toString()}{' -> '}{item.beneficiary_bank.toString()}</Text>
                <Gap height={20} />
                <View style={styles.doubleTextContainer}>
                    <DoubleText title={item.beneficiary_name.toString()} value={item.account_number.toString()} style={{flex: 3}} />
                    <DoubleText title={'NOMINAL'} value={`Rp. ${item.amount.toString()}`} style={{flex: 2}} />
                </View>
                <Gap height={20} />
                <View style={styles.doubleTextContainer}>
                    <DoubleText title={'BERITA TRANSFER'} value={item.remark.toString()} style={{flex: 3}} />
                    <DoubleText title={'KODE UNIK'} value={item.unique_code.toString()} style={{flex: 2}} />
                </View>
                <Gap height={20} />
                <View style={styles.doubleTextContainer}>
                    <DoubleText title={'WAKTU DIBUAT'} value={item.created_at.toString()}/>
                </View>
            </View>
        </SafeAreaView>
    )
})

export default DetailTransactionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Neutral[20],
  },
  bodyContainer: {
    width: '100%',
    padding: widthResponsive(20),
    backgroundColor: color.Neutral[10],
  },
  middleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: color.Neutral[25],
    borderBottomColor: color.Neutral[35],
  },
  textStyle: {
    color: color.Dark[800],
    fontSize: widthResponsive(16),
    fontWeight: 'bold',
  },
  doubleTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
