import React , { Component } from 'react';


import { NavLink,Switch,Redirect,Route} from 'react-router-dom';

class View extends Component{

    render(){
        return(
            <div className="">
                这是w1904的首页
                <NavLink to="/w1904">w1904</NavLink><br/>
                <NavLink to="/">首页</NavLink><br/>
                <NavLink to="/input">表单</NavLink><br/>
                <NavLink to="/event">事件</NavLink><br/>
                <NavLink to="/tab">tab</NavLink>
            </div>
        )
    }
}
export default View;
