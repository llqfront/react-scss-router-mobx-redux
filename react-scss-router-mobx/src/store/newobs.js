import {observable, makeObservable, computed, action, autorun,runInAction} from 'mobx';
import axios from 'axios';
class Store {
    @observable name = '小刘';

    @observable personCfg = {
        name:'元芳',
        age:'37',
        sex:'男'
    }
    constructor(){
       makeObservable(this)
    }
    @action
    changePerson = (str) =>{
        console.log(str)
        this.name = '老刘'
        this.personCfg = {
            name:'狄仁杰',
            age:'27',
            sex:'男'
        }
    }
    @action
    async getApi(url,cfg,headers){
        let data = await axios.get(url,{params:cfg},
        {
            headers: headers
        })
        return data;
    }

    @action
    async postApi(url,cfg,headers){
        let fd = new FormData();
        for(let key in cfg){
            fd.append(key, cfg[key]);
        }
        let	data = await axios.post(url,fd,
        {
            headers: headers
        })
        return data;
    }
    // @action
    // async getApi(url,cfg,headers){
    //     let data = await axios.get(url,{params:cfg},
    //     {
    //         headers: headers
    //     })
    //     return data;
    // }

}

export default Store;
