import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
const logoImg=require('@/assets/images/emoji3.png')
const logoImg1=require('@/assets/images/emoji5.png')
export default function Index() {
  return (
    <ScrollView style={{ flex: 1}}>
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ width: 300, height: 300, backgroundColor: "green", padding: 50 }}>
        <Text>Tanha</Text>
      </View>
      <View style={{ width: 400, height: 400, backgroundColor: "red", padding: 50 }}>
        <Text>Shraboni</Text>
      </View>
      <Text>
        <ImageBackground source={logoImg1} style={{flex:1, padding:50}}/>
        <Text style={{ color: "white", fontSize:350}}>Helloo</Text>
      </Text>
      <Image source={logoImg} style={{width: 500, height: 500}}/>
      <Image source={{uri:"https://picsum.photos/200"}} style={{width: 500, height: 500}}/>
      
    </View>
    </ScrollView>
  );
}

