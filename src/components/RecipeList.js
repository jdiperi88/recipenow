import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem  from './RecipeItem';

class RecipeList extends Component{
    render(){
        return (
            <RecipeItem recipes={this.props.recipes}/>
        )
        
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps,null)(RecipeList);