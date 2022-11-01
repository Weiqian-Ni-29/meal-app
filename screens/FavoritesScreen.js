import MealsList from "../components/MealsList/MealsList";
import { useContext } from 'react';
import { FavouritesContext } from "../store/context/favouritesContext";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, View, Text } from 'react-native';
function FavoritesScreen() {
  const favoriteMealCtx = useContext(FavouritesContext);
  const favoriteMeals = MEALS.filter((meal)=>{
    return favoriteMealCtx.ids.includes(meal.id);
  });
  return (
    favoriteMeals.length === 0 
    ? <View style = {styles.rootContainer}>
      <Text style = {styles.text}>
        You have no favourate meals yet.
      </Text>
    </View> 
    : <MealsList  items = {favoriteMeals}/>
  );
}

export default FavoritesScreen;
const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  }
});