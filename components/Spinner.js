import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Block } from '../components';

const Spinner = ({ size }) => {
  return (
    <Block style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </Block>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
