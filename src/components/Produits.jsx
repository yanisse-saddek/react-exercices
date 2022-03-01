import React from 'react'
import Produit from './Produit'


export default class Produits extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            productsList: [
                {id: 1, title: 'gateau', description : 'miam miam le gato', price: 3.50},
                {id: 2, title: 'ordinateur', description :'laptop au top du top', price: 400},
                {id: 3, title: 'souris', description :'bonjour ', price: 10},
            ]

        }
        
    }   
     render(){
        return(
            <div>
                <Produit products={this.state.productsList}/>
            </div>
        )
    }
}