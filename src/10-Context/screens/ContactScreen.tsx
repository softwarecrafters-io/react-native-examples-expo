import {Button, SafeAreaView, Text, View} from "react-native";
import React, {useContext} from "react";
import { styles } from "../Theme";
import {AuthContext} from "../context/AuthContext";


export const ContactScreen = () => {
    const context = useContext(AuthContext);

  return(
      <View style={styles.container}>
        <Text style={styles.title}>Contact</Text>
          {context.authState.isLoggedIn
              ? <Button title={'Log out'} onPress={context.signOut}/>
              : <Button title={'Log In'} onPress={context.signIn}/>
          }
      </View>
  )
}


