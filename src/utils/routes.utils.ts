type Route = (param?: string) => string;

export const homeRoute: Route = () => '/';
export const accessControlRoute: Route = () => '/iam';
export const moneyRoute: Route = (tab = '') =>
  `/finance${tab ? '/' + tab : ''}`;
export const assetsRoute: Route = () => '/assets';
export const timelinesRoute: Route = () => '/timelines';
export const settingsRoute: Route = (tab = '') =>
  `/settings${tab ? '/' + tab : ''}`;
export const notificationsRoute: Route = () => '/notifications';
export const authRoute: Route = () => '/auth';
export const loginRoute: Route = provider =>
  `/auth/login${provider ? '/' + provider : ''}`;
export const logoutRoute: Route = provider =>
  `/auth/logout${provider ? '/' + provider : ''}`;
