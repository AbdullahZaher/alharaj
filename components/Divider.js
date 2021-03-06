import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import Block from './Block';
import { theme } from '../constants';

export default class Divider extends Component {
  handleMargins() {
    const { margin } = this.props;
    if (typeof margin === 'number') {
      return {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin,
      }
    }

    if (typeof margin === 'object') {
      const marginSize = Object.keys(margin).length;
      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0],
          }
        case 2:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[0],
            marginLeft: margin[1],
          }
        case 3:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[1],
          }
        default:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[3],
          }
      }
    }
  }

  handlePaddings() {
    const { padding } = this.props;
    if (typeof padding === 'number') {
      return {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding,
      }
    }

    if (typeof padding === 'object') {
      const paddingSize = Object.keys(padding).length;
      switch (paddingSize) {
        case 1:
          return {
            paddingTop: padding[0],
            paddingRight: padding[0],
            paddingBottom: padding[0],
            paddingLeft: padding[0],
          }
        case 2:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[0],
            paddingLeft: padding[1],
          }
        case 3:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[1],
          }
        default:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[3],
          }
      }
    }
  }

  render() {
    const { 
      color,
      padding,
      margin,
      height,
      style, 
      ...props 
    } = this.props;
    const dividerStyles = [
      styles.divider,
      margin && { ...this.handleMargins() },
      padding && { ...this.handlePaddings() },
      height && { height },
      style,
    ];

    return (
      <Block
        color={color || theme.colors.gray2}
        style={dividerStyles}
        {...props}
      />
    )
  }
}

export const styles = StyleSheet.create({
  divider: {
    height: 1,
    borderBottomColor: theme.colors.gray3,
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})