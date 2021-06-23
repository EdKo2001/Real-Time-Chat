import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { useContent } from '../contexts/Context'

export default function AppRouter() {

    const { currentUser } = useContent()

    return currentUser ?
        (
            <Switch>
                {privateRoutes.map(({ path, component }) =>
                    <Route key={path} path={path} component={component} />
                )}
                <Redirect to={CHAT_ROUTE} />
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({ path, component }) =>
                    <Route key={path} path={path} component={component} />
                )}
                <Redirect to={LOGIN_ROUTE} />
            </Switch>
        )
}
