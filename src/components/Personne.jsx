import React from 'react'

export default class Personne extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            prenom: ""
        }
        this.changerNom = this.changerNom.bind(this)
    }
    changerNom(e){
        var newName = e.target.value
            this.setState({
                prenom: newName
            })
    }
    render(){
    
        return(
            <div>
                <p>{this.state.prenom}</p>
                <input onChange={this.changerNom} type="text" />
            </div>
        )
    }
}