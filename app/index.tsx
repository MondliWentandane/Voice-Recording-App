import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import BackgroundComp from '@/components/BackgroundComp';
import TextComp from '@/components/TextComp';
import startBtn from "@/assets/startBtn.png";
import { Link, router } from 'expo-router';


const HomeScreen: React.FC =()=> {
  return (
    <BackgroundComp style={styles.container}>
      <TextComp style={styles.textStyl}>Welcome!</TextComp>
        <Pressable onPress={()=> router.push("/recordingP")} style={styles.btnHolder}>
          <TextComp style={styles.startStyle}>Start</TextComp>
          <TextComp style={styles.recStyle}>Voice Recording</TextComp>
        </Pressable>
      <Link href="./listP" style={styles.listPStyle}><TextComp>List(m) Page</TextComp></Link>
      <Link href="./playlist" style={styles.listPStyle}><TextComp>List Page</TextComp></Link>
    </BackgroundComp>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  textStyl:{
    fontSize: 43
  },
  container:{
    paddingTop: 30,
    display: 'flex',
    gap: "15%"
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
    boxShadow:"#4f88f1ff"
  },
  startStyle:{
    textAlign:'center',
    fontSize:49
  },
  recStyle:{
    textAlign:'center',
    fontSize:22
  },
  listPStyle:{
    backgroundColor: "#26dd2fff",
    padding:2,
    width: '24%',
    borderRadius: 22
  }
})

