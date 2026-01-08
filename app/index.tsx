import { View, Text, StyleSheet, Image } from 'react-native';
import BackgroundComp from '@/components/BackgroundComp';
import TextComp from '@/components/TextComp';
import startBtn from "@/assets/startBtn.png";


const HomeScreen: React.FC =()=> {
  return (
    <BackgroundComp style={styles.container}>
      <TextComp style={styles.textStyl}>Welcome!</TextComp>
      <View style={styles.btnHolder}>
        <Image source={startBtn}/>
      </View>
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
  }
})

