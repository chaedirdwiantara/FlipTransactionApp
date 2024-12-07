import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {widthResponsive} from '../../utils';
import {SvgProps} from '../../interface/svg.interface';
import { color } from '../../theme';

const CopyIcon = ({
  width = widthResponsive(20),
  height = widthResponsive(20),
  fill = 'none',
  stroke = '#000',
  style,
}: SvgProps) => {
  return (
    <View style={[{width, height}, style]}>
      <Svg width={'100%'} height={'100%'} fill={fill} viewBox={'0 0 24 24'}>
      <Path d="M4 2h11v2H6v13H4V2zm4 4h12v16H8V6zm2 2v12h8V8h-8z" fill={color.Warning[700]}/>
      </Svg>
    </View>
  );
}

export default CopyIcon;
