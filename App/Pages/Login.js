import React from 'react';
import { View } from 'react-native';
import Colors from '../Shared/Colors';
export default function Login() {
  return (
    <View>
      <Image source={require('./../Assets/Images/login.png')} />
        <View style={styles.container}>
             <Text style={styles.welcomeText}>Welcome to Education App</Text>
            <Text style={{textAlign:'center',
        marginTop:80,fontSize:20}}>Login/Signup</Text>
        <View style={styles.button}>
        <Ionicons name="logo-google" size={24} color="white" style={{marginRight : 10}}/>
            <Text style={{color:Colors.white}}>Sing In With Google</Text>
        </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        marginTop:-25,
        backgroundColor:'#fff',
        borderTopRightRadius:30,
        borderTopLeftRadius:30
    },
    welcomeText:{
        fontSize:35,
        textAlign:'center',
        fontWeight:'bold' 
    },
    button:{
        backgroundColor:Colors.primary,
        padding:10,
        margin:30,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
})
