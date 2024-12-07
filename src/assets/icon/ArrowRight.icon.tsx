import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {widthResponsive} from '../../utils';
import {SvgProps} from '../../interface/svg.interface';

const ArrowRightIcon = ({
  width = widthResponsive(16),
  height = widthResponsive(16),
  fill = 'none',
  stroke = '#000',
  style,
}: SvgProps) => {
  return (
    <View style={[{width, height}, style]}>
      <Svg width={'100%'} height={'100%'} fill={fill} viewBox={'0 0 20 20'}>
      <Path
      d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
          fill={stroke}
        />
      </Svg>
    </View>
  );
}

export default ArrowRightIcon;
