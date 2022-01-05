import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Content from './components/Content';
import { useState } from 'react';

function App() {
  const [recipe, setrecipe] = useState([
    {
        id: 1,
        name: "jamoon",
        recipe: "How To Make Gulab Jamun Without Khoya At Home During Lockdown Heres The Step-By-Step Recipe Of Gulab Jamun Without Khoya:Servings - 5-6 gulab jamuns Ingredients - 2 tbsp milk 3 tbsp milk powder Half cup sugar Half tbsp. maida Half teaspoon cardamom powder 1 cup water A pinch of baking soda Half tbsp. ghee Method - Step 1- Make sugar syrup by boiling sugar and cardamom powder in 1 cup water. Add more water, if required. Boil on medium flame till it attains a thick syrupy texture. Step 2 - Combine maida, baking soda and milk powder in a bowl. Mix well. Step 3 - Add half tbsp. ghee and mix. Step 4 - Now add milk and mix again.Step 5 - Knead a light dough of the mixture.Add more milk if required.Make sure the dough is light and soft.Step 6 - Grease your palms with oil and divide the dough into small balls.Step 7 - Deep fry the gulab jamuns till they turn golden brown and dip them in the sugar syrup.If you keep the gulab jamuns dipped in sugar syrup for a couple of hours before serving, youll get moist and squishy gulab jamun as they would have absorbed the syrup properly.",
        img: "https://cookingcraft.net/wp-content/uploads/2020/12/Gulab-Jamun.jpg"
    },
    {
        id: 2,
        name: " Veg Biriyani",
        recipe: "To marinate the chicken for the biryani, combine the vegetable oil, garlic, ginger, chili peppers, mint, cilantro, garam masala, cinnamon and salt in a large bowl and stir together. Add the chicken pieces and toss together making sure the chicken is thoroughly coated in the marinade. Allow the chicken to marinate for at least 1 hour or up to overnight. In a pot wide enough to hold the chicken in a single layer, add the ghee and onions and saute the onions until they are well caramelized (15-20 minutes). Transfer the caramelized onions to a bowl and set aside.",
        img: "https://th.bing.com/th/id/OIP.HiZaSxXwIybi6R1enDGnTAHaHa?pid=ImgDet&w=550&h=550&rs=1"
    },
    {
        id: 3,
        name: "shushi",
        recipe: "Prep all of your ingredients. First things first, make your sushi rice ideally at least an hour or two in advance so that it has time to cool to room temperature before assembling your rolls. Then go ahead and prep all of your other ingredients so that you can have a nice assembly line ready to go for your rolls. Press the rice. Then, begin your assembly! The first step will be to press the rice onto your sheet of nori in an even layer, leaving a 1-inch empty border of nori at the top. (See photos above.) Add the fillings. Next, layer on your fillings horizontally on the rice, side by side, as evenly as possible. Roll up the sushi. Lift up the bottom edge of the sushi mat and carefully fold it over the fillings until they are enclosed in a roll, yet still leaving the top 1-inch of the empty nori exposed. Use the sushi mat to squeeze the roll in as tightly as possible. (Although not too tight, as you don’t want all of the fillings to squish out!)  Dip your fingers in the water bowl once more and use them to wet the remaining 1-inch of nori. Then use the sushi mat to finish rolling up the roll until it is completely enclosed, giving it a final squeeze or two once it has been rolled up to be sure that everything is packed in there tightly. Repeat with the remaining ingredients. Cut the sushi. Using a very sharp knife, cut the each sushi roll into 8 equal(ish)-sized pieces on a cutting board. Transfer them to your serving plate. Drizzle and garnish. Drizzle the sushi with the spicy mayo and/or sprinkle with extra toasted sesame seeds. Serve. Serve immediately, along with pickled ginger, wasabi paste, and soy sauce for dipping. And enjoy!",
        img: "https://images5.alphacoders.com/325/thumb-1920-325287.jpg"
    }
  ]);
  const [ClickedData, setClickedData] = useState([])

  let getData = (userClick)=>{
    setClickedData(userClick)
  }
console.log(ClickedData)
  return (
    <Router>
      
      <div className="App">
        <div className="row border border-secondary">
        <Home/>
        <br/>
        <div className="col-md-4">
        <Recipe data={recipe} getData={getData}/>
        </div><br/>
        <div className="col-md-7">
        <Content data={ClickedData}/>
        </div>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
