import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './Style'

export default function Square ({number, color}) {
    return (
      <View style={styles.container}>
        <View style={{
          width:100,
          height:100,
          backgroundColor: color,
        }}>Square {number}</View>
      </View>
    )
  
}