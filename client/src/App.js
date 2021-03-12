import React , {Component}from 'react';

import './App.css';
import './styles/css/selectstyle.scss';
import NamesContainer from './components/NamesContainer';

class App extends Component {
  
  state = {
    names: [
      'Budget', 'Food allergies',  'Number of People', 'Special Restrictions'],
    searchTerm: '' ,
  }

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }
  

    render(){
      const useStyles = ({
        button: {
          background: 'linear-gradient(45deg, #3ebfcf 30%, #3ebfcf 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 30,
          padding: '0 10px',
          spacing: '8px',
          outline: 'none',
          lineHeight: '24px',
        },
        container: {
          fontFamily: 'Avenir',
          fontSize: '12px',
          display:"inline",
          maxWidth:"sm",
          

        },
        box:{
          display:"inline-table",
          marginLeft: '170px',
          padding: '0 10px',
          minWidth: '64px',
          boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
          width: '200px',
          height: "200px"
        },
        searchbox:{
          border: '0px',
          height: '40px',
          outline: 'none'
        },
        tick: {
          width : "20px"
        }

      });
      
      return (
        <div style={useStyles.container}>
          <h1 style = {{color: 'rgb(241 115 225)'}}>02.08.MultipleOptions<br/> with multiple add</h1>
          <button style={useStyles.button}><img style= {useStyles.tick} alt = "tick" src = "http://www.clipartbest.com/cliparts/jTx/kX5/jTxkX5rTE.png"></img>ADS-35</button>
          <div  style = {useStyles.box}>
            <input style={useStyles.searchbox} type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search questions'/>
            <hr/>
            <NamesContainer  names = {this.dynamicSearch()}/>
          </div>
        </div>
      );
    }
}

export default App;