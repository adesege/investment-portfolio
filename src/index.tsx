import { lazy, StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './assets/css/normalize.css';
import './assets/css/style.scss';
import AppLoader from './components/app/AppLoader';
import { IRoute } from './interfaces/route';
import AuthLayout from './layouts/AuthLayout';
import store from './store';

const Main = lazy(() => import(/* webpackChunkName: "pages/main" */ './pages/Main'));
const AuthSignup = lazy(() => import(/* webpackChunkName: "pages/auth/signup" */ './pages/Auth/Signup'));
const AuthSignin = lazy(() => import(/* webpackChunkName: "pages/auth/signin" */ './pages/Auth/Signin'));

const App = () => (
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Suspense fallback={<AppLoader center />}>
            <Route
              exact
              path={IRoute.main}
              component={Main}
            />

            <Route path="/auth">
              <AuthLayout>
                <Suspense fallback={<AppLoader center />}>
                  <Switch>
                    <Route
                      exact
                      path={IRoute.signup}
                      component={AuthSignup}
                    />
                    <Route
                      exact
                      path={IRoute.signin}
                      component={AuthSignin}
                    />
                  </Switch>
                </Suspense>
              </AuthLayout>
            </Route>
          </Suspense>
        </Switch>
      </Router>
    </Provider>
  </StrictMode>
);

const wrapper = document.getElementById('app');
ReactDOM.render(<App />, wrapper);
