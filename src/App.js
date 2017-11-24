import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchRecipes from './components/SearchRecipes';
import RecipeList from './components/RecipeList';
import FavoriteRecipeList from './components/FavoriteRecipeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Recipe Now!!!</h1>
        <SearchRecipes/>
        <RecipeList />
      </div>
    );
  }
}

export default App;
