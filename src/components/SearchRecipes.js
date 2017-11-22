import React,{Component} from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

class SearchRecipes extends Component{
    constructor(){
        super();
        this.state = {
            ingredients : '',
            dish: ''
        }
    }
    search(){
        let {ingredients, dish } = this.state
        const url = `http://www.recipepuppy.com/api?i=${ingredients}&q=${dish}`
        console.log(this.state, url)
        fetch(url,{
            method: 'GET'
        })
        .then(res => {
            res.json()
        .then(json => console.log(json))
        })
    }
    render(){
        return(
            <Form inline>
                <FormGroup>
                    <ControlLabel >Ingredients </ControlLabel>
                    {' '}
                    <FormControl 
                        type="text" 
                        placeholder="garlic, chicken"
                        onChange ={e => this.setState({ingredients: e.target.value })}
                    
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <ControlLabel> Dish </ControlLabel>
                    {' '}
                    <FormControl 
                        type="text" 
                        placeholder="Adobo"
                        onChange= {e => this.setState({ dish: e.target.value }) }
                    />
                </FormGroup>
                {' '}
                <Button onClick={ () =>this.search()}>Submit</Button>
            </Form>
        )
    }
}

export default SearchRecipes;