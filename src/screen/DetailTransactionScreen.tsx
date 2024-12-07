import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, { useCallback } from 'react'
import { color } from '../theme'
import { widthResponsive } from '../utils/dimensionFormat'
import { RootStackParams } from '../navigations'
import { RouteProp } from '@react-navigation/native'
import { Gap } from '../components/atom'
import { useNavigation } from '@react-navigation/native'
import DoubleText from '../components/molecule/DoubleText/DoubleText'
import { capitalizeText, formatCurrency, formatDate } from '../utils/formatter'
import ArrowRightIcon from '../assets/icon/ArrowRight.icon'
import CopyIcon from '../assets/icon/Copy.icon'
import Clipboard from '@react-native-clipboard/clipboard'

const DetailTransactionScreen = React.memo(({route}: {route: RouteProp<RootStackParams, 'DetailTransactionScreen'>}) => {
    const { item } = route.params;

    const navigation = useNavigation();

    const handleGoBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const handleCopy = () => {
        Clipboard.setString(item.id.toString());
        Alert.alert('Berhasil', 'ID transaksi telah disalin ke clipboard');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Gap height={20} />
            <View style={[styles.bodyContainer,styles.idContainer]}>
                <Text style={styles.textStyle}>{'ID TRANSAKSI: #'}{item.id.toString()}</Text>
                <Gap width={4} />
                <TouchableOpacity onPress={handleCopy}>
                    <CopyIcon/>
                </TouchableOpacity>
            </View>
            <View style={[styles.bodyContainer,styles.middleSection]}>
                <Text style={styles.textStyle}>{'DETAIL TRANSAKSI'}</Text>
                <TouchableOpacity onPress={handleGoBack}>
                    <Text style={styles.closeStyle}>{'Tutup'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.bankContainer}>
                    <Text style={[styles.textStyle,{fontSize: widthResponsive(20)}]}>{capitalizeText(item.sender_bank.toString())}</Text>
                    <ArrowRightIcon width={widthResponsive(20)} height={widthResponsive(20)}/>
                    <Text style={[styles.textStyle,{fontSize: widthResponsive(20)}]}>{capitalizeText(item.beneficiary_bank.toString())}</Text>
                </View>
                <Gap height={20} />
                <View style={styles.doubleTextContainer}>
                    <DoubleText title={item.beneficiary_name.toString().toUpperCase()} value={item.account_number.toString()} style={{flex: 3}} />
                    <DoubleText title={'NOMINAL'} value={formatCurrency(parseInt(item.amount.toString()))} style={{flex: 2}} />
                </View>
                <Gap height={20} />
                <View style={styles.doubleTextContainer}>
                    <DoubleText title={'BERITA TRANSFER'} value={item.remark.toString()} style={{flex: 3}} />
                    <DoubleText title={'KODE UNIK'} value={item.unique_code.toString()} style={{flex: 2}} />
                </View>
                <Gap height={20} />
                <View style={styles.doubleTextContainer}>
                    <DoubleText title={'WAKTU DIBUAT'} value={formatDate(item.created_at.toString())}/>
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
  idContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  closeStyle: {
    color: color.Warning[700],
    fontSize: widthResponsive(16),
    fontWeight: '400',
  },
  doubleTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
