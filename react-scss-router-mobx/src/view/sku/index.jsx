import React, { Component } from 'react';
import Home from './home.jsx';
import Detail from './detail.jsx';
class View extends Component {
    ifPage(sku){
        if(sku){
            return <Detail sku={sku}/>
        }else {
            return <Home/>
        }
    }
    render(){
        console.log(this.props.location)
        let sku = this.props.match.params.sku;
        return this.ifPage(sku)
    }
}

export default View;
