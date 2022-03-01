import React from 'react'

export default class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.titre}</h1>
                <img height="300px" src={this.props.img} alt="" />
                <p>{this.props.message}</p>
            </div>

        )
    }
}