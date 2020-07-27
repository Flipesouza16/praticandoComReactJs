import React from 'react'
import { Switch, Route } from 'react-router'

import Inicio from '../components/Inicio'
import Form from '../components/Form'
import Lista from '../components/lista/Lista'
import Conversor from '../components/conversor/Conversor'

export default props =>
    <Switch>
        <Route exact path='/' component={Inicio} />
        <Route path='/form' component={Form} />
        <Route path='/lista' component={Lista} />
        <Route path='/conversor' component={Conversor} />
    </Switch>