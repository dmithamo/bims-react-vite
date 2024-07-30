import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import { RootRoute } from '~/routes/Root.route.tsx';
import { homeRoute, moneyRoute } from '~/utils/routes.utils.ts';
import { MoneyRoute } from '~/routes/Money.route.tsx';
import { MoneyOverviewRoute } from '~/routes/Money.Overview.route.tsx';
import { AccessDeniedOr404Route } from '~/routes/AccessDeniedOr404.route.tsx';

const ROUTER = createBrowserRouter(
  createRoutesFromElements(
    <Route path={homeRoute()} element={<RootRoute />}>
      <Route path={moneyRoute()} element={<MoneyRoute />}>
        <Route path={moneyRoute('')} element={<MoneyOverviewRoute />} />
        <Route path={'*'} element={<AccessDeniedOr404Route />} />
      </Route>
      <Route path={'*'} element={<AccessDeniedOr404Route />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={ROUTER} />
  </React.StrictMode>,
);
