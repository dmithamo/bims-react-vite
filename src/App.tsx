import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { AccessDeniedOr404Route } from '~/routes/AccessDeniedOr404.route.tsx';
import { AuthLoginRoute } from '~/routes/Auth.Login.route.tsx';
import { AuthRoute } from '~/routes/Auth.route.tsx';
import { MoneyBudgetsRoute } from '~/routes/Money.Budgets.route.tsx';
import { MoneyInvestmentsRoute } from '~/routes/Money.Investments.route.tsx';
import { MoneyOverviewRoute } from '~/routes/Money.Overview.route.tsx';
import { MoneyRoute } from '~/routes/Money.route.tsx';
import { MoneyTransactionsRoute } from '~/routes/Money.Transactions.route.tsx';
import { ProtectedRoute } from '~/routes/Protected.route.tsx';
import { RootRoute } from '~/routes/Root.route.tsx';
import {
  authRoute,
  homeRoute,
  loginRoute,
  moneyRoute,
} from '~/utils/routes.utils.ts';

const ROUTER = createBrowserRouter(
  createRoutesFromElements(
    <Route path={homeRoute()} element={<RootRoute />}>
      <Route path={authRoute()} element={<AuthRoute />}>
        <Route path={loginRoute()} element={<AuthLoginRoute />} />
      </Route>
      <Route path={moneyRoute()} element={<MoneyRoute />}>
        <Route
          path={moneyRoute()}
          element={
            <ProtectedRoute requiredPermissions={['moneyOverviewRead']}>
              <MoneyOverviewRoute />
            </ProtectedRoute>
          }
        />
        <Route
          path={moneyRoute('budgets')}
          element={
            <ProtectedRoute requiredPermissions={['moneyBudgetsRead']}>
              <MoneyBudgetsRoute />
            </ProtectedRoute>
          }
        />
        <Route
          path={moneyRoute('transactions')}
          element={
            <ProtectedRoute requiredPermissions={['moneyTransactionsRead']}>
              <MoneyTransactionsRoute />
            </ProtectedRoute>
          }
        />
        <Route
          path={moneyRoute('investments')}
          element={
            <ProtectedRoute requiredPermissions={['moneyInvestmentsRead']}>
              <MoneyInvestmentsRoute />
            </ProtectedRoute>
          }
        />
        <Route path={'*'} element={<AccessDeniedOr404Route />} />
      </Route>
      <Route path={'*'} element={<AccessDeniedOr404Route />} />
    </Route>,
  ),
);

export const App = () => <RouterProvider router={ROUTER} />;
