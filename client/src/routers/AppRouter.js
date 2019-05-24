import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Form from '../pages/Form';
import Jobs from '../pages/Jobs';
import Workers from '../pages/Workers';
import NotFound from '../pages/NotFound'
import Navigation from '../components/Navigation'
import LearnMoreUser from '../components/LearnMoreUser' 
export default function AppRouter() {
	return (
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route exact path='/' component={Form} />
				<Route path='/jobs' component={Jobs} />
				<Route exact path='/workers' component={Workers} />
				<Route path='/workers/:id' component={LearnMoreUser} />
				{/* <Route path='/portfolio/:id' component={PortfolioItem} />
				<Route path='/contact' component={Contact} /> */}
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);

}