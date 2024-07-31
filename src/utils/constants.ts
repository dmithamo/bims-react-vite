import { TPermissionFromBE, TPermissionOnFE } from '~/utils/types.ts';

export const PERMISSIONS_FROM_BE: Record<
  TPermissionOnFE,
  Array<TPermissionFromBE>
> = {
  moneyOverviewRead: ['money.balances.read', 'money.budgets.read'],
  moneyBalancesRead: ['money.balances.read'],
  moneyBalancesWrite: ['money.balances.write'],
  moneyBalancesDelete: ['money.balances.delete'],
  moneyBudgetsRead: ['money.balances.read'],
  moneyBudgetsWrite: ['money.balances.write'],
  moneyBudgetsDelete: ['money.balances.delete'],
  moneyTransactionsRead: ['money.transactions.read'],
  moneyTransactionsWrite: ['money.transactions.write'],
  moneyTransactionsDelete: ['money.transactions.delete'],
  moneyInvestmentsRead: ['money.investments.read'],
  moneyInvestmentsWrite: ['money.investments.write'],
  moneyInvestmentsDelete: ['money.investments.delete'],
  assetsRead: ['assets.read'],
  assetsWrite: ['assets.write'],
  assetsDelete: ['assets.delete'],
  timelinesRead: ['timelines.read'],
  timelinesWrite: ['timelines.write'],
  timelinesDelete: ['timelines.delete'],
  notificationsRead: ['notifications.read'],
  notificationsWrite: ['notifications.write'],
  settingsRead: ['settings.read'],
  settingsWrite: ['settings.write'],
  accountRead: ['accounts.read'],
  accountWrite: ['accounts.write'],
  accountDelete: ['accounts.delete'],
};
