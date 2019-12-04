import React from 'react';
import { Switch, Platform } from 'react-native';

import { theme } from '../constants';

const GRAY_COLOR = theme.colors.gray;

export default class SwitchInput extends React.PureComponent {
  render() {
    const { value, ...props } = this.props;
    let thumbColor = null;

    if (Platform.OS === 'android') {
      thumbColor = GRAY_COLOR;
      if (props.value) thumbColor = theme.colors.green;
    }

    return (
      <Switch
        thumbColor={thumbColor}
        ios_backgroundColor={GRAY_COLOR}
        trackColor={{
          // false: GRAY_COLOR,
          true: theme.colors.green
        }}
        value={value}
        {...props}
      />
    );
  }
}