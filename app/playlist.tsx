import BackgroundComp from '@/components/BackgroundComp'
import TextComp from '@/components/TextComp'
import React from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import noRecImg from '@/assets/icons/emptyRecsIcon.png';

const playlist = () => {
  return (
    <BackgroundComp style={styles.container}>
        <TextComp style={styles.headingSt}>Recordings</TextComp>
        <ScrollView style={styles.secContainer} horizontal={false}>
            <View style={styles.audHold}>
                <View></View>
            </View>
        </ScrollView>
    </BackgroundComp>
  )
}

export default playlist;

const styles= StyleSheet.create({
    container:{
        paddingTop: 10,
        display:'flex',
        gap: '3%'
    },secContainer:{
        backgroundColor:"#e3e3e3",
        paddingLeft:"2%",
        maxHeight:"82%",
        
    },
    headingSt:{
        fontSize: 32
    },//==== Bellow is the style for the audios
    audHold:{
        borderRadius:20,
        borderColor: "#4f88f1ff",
        borderWidth:2,
        width:"98%",
        height:60,
        marginBottom:7
    }
    
})
