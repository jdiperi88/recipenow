import React, { Component } from 'react';

class RecipeItem extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                {this.props.recipes.map((recipe,i) =>{
                    return (
                        <div class='recipeItem'>
                            <div key={i} className='recipeText'>
                                <a href={recipe.href}>
                                    <h4>{recipe.title}</h4>
                                </a>  
                                <p>{recipe.ingredients}</p>
                                  
                            </div>
                            <img 
                                src={recipe.thumbnail} 
                                alt={recipe.title}
                                className='recipeImage'
                            /> 
                        </div>
                    )
                })}
            </div>

        )
    }
}

export default RecipeItem;