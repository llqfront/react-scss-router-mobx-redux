import React , { Component } from 'react';
import { withRouter,NavLink,Switch,Redirect,Route} from 'react-router-dom';

import Home from './view/home';
import About from './view/about';
import Sku from './view/sku';
import AjaxPage from './view/ajaxpage';

class App extends Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/ajaxpage" component={AjaxPage} />

                <Route exact path="/sku" component={Sku}/>
                <Route path={`/sku/:sku`} component={Sku}/>
            </Switch>
        );
    }
}
export default App;
