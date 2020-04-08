import React from 'react'
import App from './App'
import AppData from './AppData'
import Tabs from './Components/tabpage'
import Give from './Components/give'
import SelectedSermon from './Components/selectedSermon'
import Prayer from './Components/prayerRequest'
import Testimony from './Components/testimony'
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
            <Route exact="/SelectedSermon" path="/SelectedSermon" component={SelectedSermon}/>
            <Route exact="/Give" path="/Give" component={Give}/>
            <Route exact="/Prayer" path="/Prayer" component={Prayer}/>
            <Route exact="/Testimony" path="/Testimony" component={Testimony}/>
        
            </Switch>
        </div>
        </BrowserRouter>
        </div>
    )
}
