import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem  from './RecipeItem';

class RecipeList extends Component{
    render(){
        return (
            this.props.recipes.map((recipe,i) =>{
                return (
                    <RecipeItem 
                        recipe={recipe}
                        key={i}
                        favoriteButton={true} 
                    />
                )
            })
        )
        
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps,null)(RecipeList);