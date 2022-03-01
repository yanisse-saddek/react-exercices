import React from 'react'

export default class Title extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.titre}</p>
                <p>{this.props.message}</p>
                <img height="400px"src={this.props.img} alt="" />
            </div>
        )
    }
}