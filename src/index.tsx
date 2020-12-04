import { lazy, StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './assets/css/app.css';
import AppLoader from './components/app/AppLoader';
import { IRoute } from './interfaces/route';
import store from './store';

const Main = lazy(() => import(/* webpackChunkName: "pages/main" */ './pages/Main'));

const App = () => (
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div className="flex items-center h-full"><AppLoader /></div>}>
          <Switch>
            <Route
              exact
              path={IRoute.main}
              component={Main}
            />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  </StrictMode>
);

const wrapper = document.getElementById('app');
ReactDOM.render(<App />, wrapper);
