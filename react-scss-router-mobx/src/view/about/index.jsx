import React, { Component } from 'react';

import { withRouter,NavLink,Switch,Redirect,Route} from 'react-router-dom';

import {observer,inject} from 'mobx-react';
// 导入需要的模块
@withRouter
@inject('first')
@observer
class View extends Component{

    render(){
         console.log(this.props.first)
        return(
            <div >关于我们</div>
        )

    }
}


export default View;
