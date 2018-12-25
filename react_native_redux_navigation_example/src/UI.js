import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const IS_IPHONE_SE = width < 350;
const IS_IPAD_PRO_97 = height === 480;
const IS_IPHONE_X = height === 812 || height === 896;
const IS_IPHONE_PLUS = height === 736;

const unit = IS_IPHONE_PLUS ? 7 : IS_IPHONE_SE ? 5 : 6;
const color = {
  primary1: '#5574FF',
  border: '#D8D7DC',
  disable: '#E6EFFA',
  bg1: '#FFFFFF', // '#FCFDFF',
  black: '#1f2233',
  black1: '#453E56',
  white1: '#FFFFFF',
  gray2: '#2F405085',
  gray9: '#1F223384',
};

const size = {
  deviceWidth: width,
  deviceHeight: height,
};

const fontSize = {
  tiny: IS_IPHONE_SE ? 8 : 12,
  small: 14,
  regular: IS_IPHONE_SE ? 14 : 16,
  large: IS_IPHONE_SE ? 16 : 18,
  big: IS_IPHONE_SE ? 26 : 30,
  huge: IS_IPHONE_SE ? 32 : 36,
};

const font = {
  title: {
    fontFamily: 'Avenir Next',
    fontWeight: '600',
    color: color.black,
    fontSize: fontSize.large,
  },
  whiteRobotRegular16: {
    fontFamily: 'Avenir Next',
    fontWeight: '400',
    color: color.white1,
    fontSize: fontSize.regular,
  },
  regular: {
    fontFamily: 'Avenir Next',
    fontWeight: '400',
    color: color.black,
    lineHeight: 22,
    letterSpacing: -0.2,
    fontSize: fontSize.regular,
  }
};

export default {
  color,
  size,
  font,
  fontSize,
  IS_IPHONE_SE,
  IS_IPHONE_X,
  IS_IPHONE_PLUS,
  IS_IPAD_PRO_97,
  unit,
};
