import AppHeader from '~/components/app-nav/app-header.tsx';
import { AppFooter } from '~/components/app-nav/app-footer.tsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
      <div className={'h-screen flex flex-col justify-start items-start p-4'}>
        <AppHeader />
        <div
          className={'flex-1 w-full flex flex-col justify-center items-center'}>
          <h1 className="text-3xl font-bold">Hello world!</h1>
          <p>Welcome to the re-write</p>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

export const ROUTER = createBrowserRouter(
  createRoutesFromElements(<Route path={'/'} element={<App />} />),
);
