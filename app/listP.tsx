import BackgroundComp from '@/components/BackgroundComp'
import TextComp from '@/components/TextComp'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import noRecImg from '@/assets/icons/emptyRecsIcon.png';

const listP = () => {
  return (
    <BackgroundComp style={styles.container}>
        <TextComp style={styles.headingSt}>Recordings</TextComp>
        <View style={styles.noRecHoldSty}>
            <Image source={noRecImg} style={styles.noRecImag}/>
            <TextComp style={styles.noticeText}>Records Page Empty</TextComp>
        </View>
    </BackgroundComp>
  )
}

export default listP;

const styles= StyleSheet.create({
    container:{
        paddingTop: 10,
        display:'flex',
        gap: '15%'
    },
    headingSt:{
        fontSize: 32
    },
    noRecHoldSty:{
        display: 'flex',
        flexDirection:"column",
        width: '75%',
        height: '45%',
        alignSelf:"center",
        alignItems: 'center',
        borderRadius:22,
        borderColor:"#4f88f1ff",
        borderWidth:2
    },
    noRecImag:{
        width: "90%",
        height: "67%"
    },
    noticeText:{
        fontSize:33,
        textAlign: "center"
    }
    
})
