import React from 'react'
import '../css/product.css'

export default class Produit extends React.Component{
    render(){
        var products = this.props.products
        var tabloTh = products.map(product =>{
            return <th>{product.title}</th>
        })
        var tabloTd = products.map(product =>{
            return <td>Description:  {product.description}</td>
        })
        var tabloTd2 = products.map(product =>{
            return <td>Prix:   {product.price}</td>
        })
        var tablo = <table> 
                        <tr> {tabloTh} </tr> 
                        <tr> {tabloTd} </tr> 
                        <tr> {tabloTd2} </tr> 
                     </table>
        return(
            <div class="tablo">
                {tablo}
            </div>
        )
    }
}