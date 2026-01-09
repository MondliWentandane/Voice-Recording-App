import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import BackgroundComp from '@/components/BackgroundComp';
import TextComp from '@/components/TextComp';
import RecordingImg from '@/assets/icons/recorderIcon.png';
import stopIcon from "@/assets/icons/stopIcon.png";
import pauseIcon from "@/assets/icons/pauseIcon.png";
import playIcon from "@/assets/icons/playIcon.png";


const RecordingScreen: React.FC =()=> {
  return (
    <BackgroundComp style={styles.container}>
      <TextComp style={styles.textStyl}>Voice Recorder</TextComp>
      <TextComp style={styles.timeStyle}>00:03:75</TextComp>
        <View style={styles.btnHolder}>
          <Image source={RecordingImg} style={styles.recoderImgStyle}/>
        </View>
        <View style={styles.oneSect}>
            <Image source={stopIcon} style={styles.btnStop}/>
            <Image source={pauseIcon} style={styles.btnPause}/>
           {/*<Image source={playIcon} style={styles.btnPlay}/> */}
        </View>
        <View style={styles.twoSect}>
            <TextComp style={styles.text}>To stop the recording, click</TextComp>
            <TextComp style={styles.text}>Stop button</TextComp>
        </View>
        <View style={styles.threeSect}>
            <Pressable style={styles.cnclBtn}><TextComp style={styles.btnFonts}>Cancel</TextComp></Pressable>
            <Pressable style={styles.saveBtn}><TextComp style={[{color:"#e3e3e3"}, styles.btnFonts]}>Save</TextComp></Pressable>
        </View>
    </BackgroundComp>
  );
}

export default RecordingScreen;
const styles = StyleSheet.create({
  textStyl:{
    fontSize: 43,
    textAlign:'center'
  },timeStyle:{
    fontSize: 28,
    textAlign:'center'
  },
  container:{
    paddingTop: 5,
    display: 'flex',
    gap: "3%"
  },
  btnHolder:{
    alignSelf: 'center',
    borderColor:"#4f88f1ff",
    borderWidth:2,
    height:"37%",
    width:"70%",
    justifyContent:"center",
    borderRadius:"50%",
    paddingBottom:"6%",
    paddingRight:"2.5%",
    boxShadow:"#4f88f1ff",
    alignItems:'center'
  },
  startStyle:{
    textAlign:'center',
    fontSize:49
  },
  recStyle:{
    textAlign:'center',
    fontSize:22
  },recoderImgStyle:{
    width:"35%",
    height:"40%",
    
  },oneSect:{
    width:"100%",
    height:"10%",
    display:"flex",
    gap:"7%",
    flexDirection:"row",
    justifyContent:'center'
  },twoSect:{
    width:"100%",
    display:"flex",
    flexDirection:"column",
    alignItems: 'center'
  },threeSect:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    gap:"4%"
  },btnStop:{
    width:"14%",
    height:"80%"
  },btnPause:{
    width:"22%",
    height:"82%"
  },btnPlay:{
    width:"19%",
    height:"82%"
  },cnclBtn:{
    paddingVertical:"3%",
    borderColor:"#41a1faff",
    width:"35%",
    borderWidth:2,
    borderRadius:19
  },saveBtn:{
    paddingVertical:"3%",
    backgroundColor:"#527df3ff",
    width:"35%",
    borderRadius:19
  },btnFonts:{
    fontSize:24,
    textAlign:'center',
    fontWeight:"bold"
  },text:{
    fontSize:19
  },
  listPStyle:{
    backgroundColor: "#26dd2fff",
    padding:2,
    width: '24%',
    borderRadius: 22
  }
})

