import axios from 'axios';
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
import { AUTH_USER_PAYLOAD_KEY } from './constants';
import { IRoute } from './interfaces/route';
import AuthLayout from './layouts/AuthLayout';
import store from './store';
import { logout, setCurrentUser } from './store/auth';
import { showFlash } from './store/flash';
import { IFlashTypes } from './store/flash/flash.interface';
import { getAuthToken, setAuthorizationToken } from './utils';

axios.defaults.baseURL = process.env.API_BASE_URL;
axios.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    store.dispatch(logout());
  }

  if (error.response.data.message) {
    store.dispatch(showFlash({
      type: IFlashTypes.error,
      messages: error.response.data.message,
    }));
  }

  return Promise.reject(error);
});

if (getAuthToken()) {
  setAuthorizationToken(getAuthToken());
  store.dispatch(setCurrentUser({
    user: JSON.parse(localStorage.getItem(AUTH_USER_PAYLOAD_KEY)),
  }));
}

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
