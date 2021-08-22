import React , { Component } from 'react';
import { withRouter,NavLink,Switch,Redirect,Route} from 'react-router-dom';
class View extends Component {
    render(){
        return (
            <React.Fragment>
                <div className="mian">这是首页面</div>
                <NavLink to="/">首页</NavLink><br/>
                <NavLink to="/input">表单</NavLink><br/>
                <NavLink to="/event">事件</NavLink>
            </React.Fragment>
        )
    }
}
export default View;
