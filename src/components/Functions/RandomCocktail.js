import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const APP_ID = "1949bcdc";
const APP_KEY = "b99569c224fcfecca6f202946bed7bfe";
const APP_ID2 = "ffd7e1b9";
const APP_KEY2 = "e439b5df8590bafcf11efad43ca3a69b";

class RandomCocktail extends Component {
  state = {
    cocktails: [],
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
    // console.log(res.data);

    this.setState({
      cocktails: res.data.drinks,
    });
    
    console.log(this.state.cocktails);
  }

  // async componentDidMount() {
  //   let res = await axios.get(
  //     `https://api.edamam.com/search?q=${
  //       this.state.randomTypeCocktail[this.randomIndex()]
  //     }&to=100&app_id=${APP_ID}&app_key=${APP_KEY}`
  //   );
  //   // console.log("random cocktail type category", res);

  //   const drink = this.randomizedCocktail(res.data.hits);
  //   // console.log("random cocktail within type category", drink);

  //   this.setState({
  //     cocktails: [...this.state.cocktails, drink.recipe],
  //   });
  // }

  showRandomCocktail = () => {
    return this.state.cocktails.map((eachDrink) => {
      return (
        <div>
          <Link to={`/foods/${eachDrink.strDrink}`}>
            <li key="landing">
              <img src={eachDrink.strDrinkThumb} alt="random-drink" />
              <br />
              <div className="column">{eachDrink.strDrink}</div>
            </li>
          </Link>
        </div>
      );
    });
  };

  // randomIndex = () => {
  //   let index = Math.floor(
  //     Math.random() * this.state.randomTypeCocktail.length
  //   );
  //   return index;
  // };

  // randomizedCocktail = (drinks) => {
  //   let index = Math.floor(Math.random() * drinks.length);
  //   return drinks[index];
  // };

  render() {
    return <div className="landing">{this.showRandomCocktail()}</div>;
  }
}

export default RandomCocktail;
