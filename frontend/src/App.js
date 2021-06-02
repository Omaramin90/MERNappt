import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/common/Header'
import Footer from './components/common/Footer'

import CreateapptsCreate from './components/createappts/views/create'
import ViewapptView from './components/viewappt/views/view'



const App = () =>{

    return(
        <div class="container text-center">
            <div class="row">
                <div class="col-12"></div>
                <Header/>
            </div>

            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                    </Route>

                    <Route path="/Home" exact>
                       <CreateapptsCreate/>
                    </Route>

                    <Route path="/View" exact>
                        <ViewapptView/>
                    </Route>
                </Switch>
            </BrowserRouter>

            <div className="col-12">
                <h1>This is the body portion</h1>
            </div>

            <div className="col-12">
                <Footer/>
            </div>
        </div>

    )
}

export default App
