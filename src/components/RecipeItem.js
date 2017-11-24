import React, { Component } from 'react';
import { connect } from  'react-redux';
import { favoriteRecipe } from '../actions';
class RecipeItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            favorited : false
        }
    }
    favorite(recipe){
        this.props.favoriteRecipe(recipe);
        this.setState({favorited: true})
    }
    

    render(){
        let {recipe} = this.props
        return(
                
                <div className='recipeItem'>
                    {
                        this.props.favoriteButton ?
                        
                            this.state.favorited
                            ?
                                <div className='star'>
                                    &#9733;
                                </div>
                            :
                                <div 
                                    onClick={()=> this.favorite(recipe)}
                                    className='star'
                                >
                                    &#9734;
                                </div>
                        
                        :
                        <div></div>
                    }
                   
                    
                    <div className='recipeText'>
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
    }
}

export default connect(null,{favoriteRecipe})(RecipeItem);