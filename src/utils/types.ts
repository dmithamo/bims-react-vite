import { type ReactElement } from 'react';

export type UUID = ReturnType<typeof crypto.randomUUID>;

export type TSessionUser = {
  id: UUID;
  name: string;
  email: string;
  account: TAccount;
  avatar?: string;
  role: {
    name: string;
    id: UUID;
  };
  permissions: Array<TPermissionFromBE>;
};

export type TPermissionOnFE =
  | 'moneyOverviewRead'
  | 'moneyBalancesRead'
  | 'moneyBalancesWrite'
  | 'moneyBalancesDelete'
  | 'moneyBudgetsRead'
  | 'moneyBudgetsWrite'
  | 'moneyBudgetsDelete'
  | 'moneyTransactionsRead'
  | 'moneyTransactionsWrite'
  | 'moneyTransactionsDelete'
  | 'moneyInvestmentsRead'
  | 'moneyInvestmentsWrite'
  | 'moneyInvestmentsDelete'
  | 'assetsRead'
  | 'assetsWrite'
  | 'assetsDelete'
  | 'timelinesRead'
  | 'timelinesWrite'
  | 'timelinesDelete'
  | 'notificationsRead'
  | 'notificationsWrite'
  | 'settingsRead'
  | 'settingsWrite'
  | 'accountRead'
  | 'accountWrite'
  | 'accountDelete';

export type TPermissionFromBE =
  | `${string}.read`
  | `${string}.write`
  | `${string}.delete`;

export type TAccount = {
  id: UUID;
  name: string;
};

export type TNavbarItem = {
  to: string;
  label: string;
  icon: ReactElement;
  permissions: Array<TPermissionOnFE>;
};
