import { FC } from 'react'
import { Route, useRouteMatch, Switch } from 'react-router-dom'
import pathname from '../../constants/pathname'
import ErrorPage from '../../pages/Error'
import Home from '../../pages/Home/Home'

const AppRouter: FC = () => {
  const match = useRouteMatch();

  return (
    <Switch>
        <Route exact path={pathname.home} component={Home}/>
        <Route path={match.path} component={ErrorPage} />
    </Switch>
  )
}

export default AppRouter;