import * as React from 'react';
import {View} from 'react-native';
import Svg, {Circle, G, Path} from 'react-native-svg';
import {widthResponsive} from '../../utils';
import {SvgProps} from '../../interface/svg.interface';
import { color } from '../../theme';

function ChoosenIcon({
  width = widthResponsive(20),
  height = widthResponsive(20),
  fill = 'none',
  stroke = color.Warning[700],
  style,
}: SvgProps) {
  return (
    <View style={[{width, height}, style]}>
      <Svg width={'100%'} height={'100%'} fill={stroke} viewBox={'0 0 52 52'}>
        <G>
          <Circle cx="26" cy="26" r="11.2"/>
          <Path d="M26,2C12.8,2,2,12.8,2,26c0,13.2,10.8,24,24,24c13.2,0,24-10.8,24-24C50,12.8,39.2,2,26,2z M26,43.6
          c-9.7,0-17.6-7.9-17.6-17.6S16.3,8.4,26,8.4S43.6,16.3,43.6,26S35.7,43.6,26,43.6z"/>
        </G>
      </Svg>
    </View>
  );
}

export default ChoosenIcon;
