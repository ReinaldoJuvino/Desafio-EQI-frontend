import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../pages/user/userCrud'
import InvestmentCrud from '../pages/investment/investmentCrud'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Route path='/investment' component={InvestmentCrud} />
        <Redirect from='*' to='/' />
    </Switch>