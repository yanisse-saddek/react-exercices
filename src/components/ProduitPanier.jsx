import React from 'react'

export default class ProduitPanier extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            produitPanier: {id:1, title:"", price:0, quantity:1, actif:true}
        }

    }
    decrementerQuantite = (id)=>{
        var newQuantity = this.state.produitPanier.quantity -1
        if(newQuantity!==0){
        this.setState({
            produitPanier: {id:this.state.produitPanier.id, 
                            title:this.state.produitPanier.title, 
                            price: this.state.price,
                            quantity: newQuantity, 
                            actif:true
                        }
        })
    }
}

    incrementerQuantite = (id)=>{
        var newQuantity = this.state.produitPanier.quantity +1
        console.log(this.state.produitPanier)
        this.setState({
            produitPanier: {id:this.state.produitPanier.id, 
                            title:this.state.produitPanier.title, 
                            price: this.state.price,
                            quantity: newQuantity, 
                            actif:true
                        }
        })
    }
    delete = (id)=>{
        this.setState({
            produitPanier: {actif: false}
        })
    }
    array = ()=>{
        var produit = this.props.produitPanier;
        if(this.state.produitPanier.actif){
            return <tr>
            <td>{produit.id}</td> 
            <td>{produit.title}</td> 
            <td>
                <span onClick={()=>{
                    this.decrementerQuantite(produit.id)
                }}>-</span>
                    <span>{this.state.produitPanier.quantity}</span>

                <span onClick={()=>{
                    this.incrementerQuantite(produit.id)
                }}>+</span>
            </td>   

            <td>{produit.price}</td> 

            <span onClick={()=>{
                this.delete(produit.id)
            }}>retirer</span>
       </tr>
        }
       
    }

    render(){        
        return(
            <tbody>
                {this.array()}
            </tbody>
        )
    }
}