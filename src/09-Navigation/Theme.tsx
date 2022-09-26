import { StyleSheet } from "react-native";

export const colors = {
  primary:'red',
}

export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    fontSize: 30,
    marginBottom: 10
  },
  avatar:{
    width: 150,
    height: 150,
    borderRadius: 100
  },
  avatarContainer: {
    alignItems:'center',
    marginTop:20
  },
  menuContainer: {
    marginVertical:30,
    marginHorizontal:30,
  },
  menuButton: {
    marginVertical: 10
  },
  menuText:{
    fontSize:20
  }

});
