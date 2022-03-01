import React from 'react'

export default class Aliments extends React.Component{
    render(){
        var result = "";
        if(this.props.listAliments.length >= 1){
         result = this.props.listAliments.map(aliment =>{
            return <li>{aliment}</li>
            })
        }else{
            result = "La liste au format de poche est vide";
        }
        return(
            <div>
            <ul>{result}</ul>
            </div>
        )
    }
}