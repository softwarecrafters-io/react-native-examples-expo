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
    flexDirection:'row',
    justifyContent:'flex-start',
    marginVertical: 10
  },
  menuText:{
    marginLeft:10,
    fontSize:20
  },

  imageContainer:{
    width:300,
    height:420,
    marginHorizontal:5
  },
  moviePosterShadow:{
    flex:1,
    borderRadius:18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  moviePosterImage:{
    flex:1,
    borderRadius:18,

  }
});
