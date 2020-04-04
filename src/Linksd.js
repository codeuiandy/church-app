import React from 'react'
import App from './App'
import AppData from './AppData'
import Sermons from './Components/sermons'
import  {BrowserRouter,Link,Route,Switch} from 'react-router-dom'

export default function Linksd() {
    return (
<div>
        <BrowserRouter>
        <div>
            <Switch>
                <Route exact="/" path="/" component={App}/>
            <Route exact="/AppData" path="/AppData" component={AppData}/>
            <Route exact="/Sermons" path="/Sermons" component={Sermons}/>
            </Switch>
        </div>
        </BrowserRouter>
        </div>
    )
}
