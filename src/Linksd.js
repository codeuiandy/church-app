import React from 'react'
import App from './App'
import AppData from './AppData'
import Tabs from './Components/tabpage'
import  {BrowserRouter,Link,Route,Switch} from 'react-router-dom'

export default function Linksd() {
    return (
<div>
        <BrowserRouter>
        <div>
            <Switch>
                <Route exact="/" path="/" component={App}/>
            <Route exact="/AppData" path="/AppData" component={AppData}/>
            <Route exact="/Tabs" path="/Tabs" component={Tabs}/>
            </Switch>
        </div>
        </BrowserRouter>
        </div>
    )
}
