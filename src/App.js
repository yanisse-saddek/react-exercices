import React from 'react'
import Title from './components/Title'
import Header from './components/Header'
import Aliments from './components/Aliments'
import Produits from './components/Produits'
import Personne from './components/Personne'
import Panier from './components/Panier'

export default class App extends React.Component{

  render(){
    const AlimentsMiam = ["CACAAAAAAAAA"]

    return(
      <div>
        {/* <Header titre="titre au format de poche" img="https://www.tiktok.com/api/img/?itemId=6931067069559590150&location=0&aid=1988" message="message au format de pochette "/>
        <Title titre="titre qui proute" img="https://i.ytimg.com/vi/O-EUVVGfSfE/maxresdefault.jpg" message="mon message au top du top !" /> */}
        {/* <Aliments listAliments={AlimentsMiam} /> */}
        {/* <Produits/> */}
        {/* <Personne/> */}
        <Panier/>
      </div>
)
  }
}