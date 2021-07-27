import React from 'react';
import {BrowserRouter,Switch, Route, Redirect} from 'react-router-dom';

import LoginComponent from "./component/auth/login";
import SignupComponent from "./component/auth/signup";

class App extends React.Component{

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LoginComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                    <Route path="/signup" component={SignupComponent}/>
                    <Route path="*">
                        <Redirect to={"/"}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }

}
export default App;
