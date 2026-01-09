import React from 'react'
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native'

interface TheProps extends TextProps{
    children?: React.ReactNode;
    style?: TextStyle | TextStyle[];
}

const TextComp: React.FC<TheProps> = ({children, style}) => {
  return (
    <Text style={[styles.text, style]}> {children}</Text>
  )
}

export default TextComp;

const styles= StyleSheet.create({
    text:{
        color:"#41a1faff",
        fontSize:16
    }
})
