import React from 'react'
import ProduitPanier from './ProduitPanier'


var productsList =  [
    {id: 1, title: 'gateau', description : 'miam miam le gato', price: 3.50, quantity:1},
    {id: 2, title: 'ordinateur', description :'laptop au top du top', price: 400, quantity:1},
    {id: 3, title: 'souris', description :'bonjour ', price: 10, quantity:1},
]

export default class Panier extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            produitPanier: [
                {id: 1, title: 'clavier', description: 'bonjour je suis un clavier', price: 40},
                {id: 4, title: 'clavier', description: 'bonjour je suis un clavier', price: 40},

            ]
        }
    }
    
    render(){
        var getData = ()=>{
            var data = []
            for(var i=0; i<this.state.produitPanier.length; i++){
                data.push(<ProduitPanier produitPanier={this.state.produitPanier[i]}/>)      
             } 
             return data; 
        }
        return(
            <div>
                <table>
                     <thead>
                       <tr>
                         <th>Index</th> 
                         <th>Nom</th> 
                         <th>Quantité</th> 
                        <th>Prix</th>
                       </tr>
                      </thead>
                    {getData()}                     
                    </table>



                </div>
        )
    }
}