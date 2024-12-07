import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {widthResponsive} from '../../utils';
import {SvgProps} from '../../interface/svg.interface';
import { color } from '../../theme';

function ChevronDownIcon({
  width = widthResponsive(23),
  height = widthResponsive(23),
  fill = 'none',
  stroke = color.Warning[700],
  style,
}: SvgProps) {
  return (
    <View style={[{width, height}, style]}>
      <Svg width={'100%'} height={'100%'} fill={fill} viewBox={'0 0 20 20'}>
        <Path
          d="M15.833 7.5l-5.834 5.833L4.166 7.5"
          stroke={stroke}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

export default ChevronDownIcon;
