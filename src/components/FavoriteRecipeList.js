import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeItem from './RecipeItem';
class FavoriteRecipeList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h4>Favorite Recipes:</h4>
                {
                    this.props.favoriteRecipes.map((recipe,i)=>{
                        return (
                            <RecipeItem 
                                key={i} 
                                recipe={recipe} 
                                favoriteButton={false}
                            />
                        )
                    })
                }
            </div>
           
        )
    }
}

function mapStateToProps(state){
    return{
        favoriteRecipes: state.favoriteRecipes
    }
}

export default connect(mapStateToProps,null)(FavoriteRecipeList);