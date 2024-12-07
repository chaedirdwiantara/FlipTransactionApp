import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { widthResponsive } from '../../../utils/dimensionFormat';
import Gap from '../../atom/Gap/Gap';

interface DoubleTextProps {
    title: string;
    value: string;
    style?: ViewStyle;
}

const DoubleText = ({title, value, style}: DoubleTextProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Gap height={4} />
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

export default DoubleText

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: widthResponsive(16),
        fontWeight: '600',
    },
    value: {
        fontSize: widthResponsive(16),
    },
})