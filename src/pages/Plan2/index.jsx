import React from 'react'

import { Route, useRouteMatch, Switch, Redirect } from 'react-router-dom'
import PlanList from './view/PlanList'
import NewPlan from './view/NewPlan'
import Plan from './view/Plan'
import EditPlan from './view/EditPlan'
import RealEstateList from './view/RealEstateList'

export default function index() {
	const { path } = useRouteMatch()
	return (
		<>
			<Switch>
				<Route exact path={`${path}/`} component={PlanList} />
				<Route exact path={`${path}/new_agent`} component={NewPlan} />
				<Route path={`${path}/edit/:id`} component={EditPlan} />
				<Route exact path={`${path}/real_estate/:id`} component={RealEstateList} />
				<Route path={`${path}/:id`} component={Plan} />
				<Redirect from="*" to="/404"/>
			</Switch>
		</>
	)
}
