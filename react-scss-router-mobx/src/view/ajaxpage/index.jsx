import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import {observer,inject} from 'mobx-react';

@withRouter
@inject('newobs')
@observer
class View extends Component{

    newobs = this.props.newobs

    ajaxPage(){
        const { getApi } = this.newobs;
        const cfg = {
            page_number:'2',
            page_size:'10'
        }
        getApi('/home/mediareports',cfg,{}).then((res)=>{
            console.log(res.data)
        })
    }
    componentDidMount(){
        this.ajaxPage();
    }
    render(){
        return(
            <div>这是ajax页面</div>
        )
    }
}
export default View;
