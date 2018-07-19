import React from 'react';
import App from "../modus/App.js"
import UserHome from "../modus/User/index.js"
import {
	Route,
	IndexRoute
} from 'react-router';
import Home from "../modus/Home/Home.js"
const routes = <Route path="/" component={App}>
<Route component={Home} >
 <IndexRoute component={Home}/>
</Route>
<Route component={UserHome}>
<Route component={UserHome} path="/user/userHome"/>
</Route>
</Route>;
export default routes;