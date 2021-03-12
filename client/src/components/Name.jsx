import React, { Component } from 'react'
import '../styles/css/selectstyle.scss';

class Name extends Component {
    state = {
        clicked : false ,
        image_path: 'https://icon-library.net/images/plus-icon-png/plus-icon-png-17.jpg'
    }

    ClickHandler= (e) => {
        if (this.state.clicked === false){
            e.target.style.color = "grey"
            this.setState({clicked: true});
            this.setState({image_path:'http://www.clipartbest.com/cliparts/jTx/kX5/jTxkX5rTE.png'})
            
        }
        else {
            e.target.style.color = "black"
            this.setState({clicked: false});
            this.setState({image_path:'https://icon-library.net/images/plus-icon-png/plus-icon-png-17.jpg'})
            onmouseover = e.target.style= "names"
        }
    }
    

    render() {
        return (
            <div onClick = {this.ClickHandler} className = 'names'>
                {this.props.name} <img className = 'plus' alt = "plus" src = {this.state.image_path}/>
            </div>
        )
    }
}

export default Name
