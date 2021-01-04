import React from 'react'
import {Route, Switch} from 'react-router-dom'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Projects" component={Projects} />
            <Route path='/Skills' component={Skills} />
            <Route path='/About' component={About} />
        </Switch>
    )
}

export default Routes;
