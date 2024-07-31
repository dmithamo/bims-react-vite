import { LayoutWithNavbar } from '~/components/layouts/layout-with-navbar.tsx';
import { ReactElement } from 'react';
import { moneyRoute } from '~/utils/routes.utils.ts';
import { WalletIcon } from '~/components/svg-icons/wallet-icon.tsx';
import { FinanceTab } from '~/utils/enums.ts';
import { BudgetIcon } from '~/components/svg-icons/budget-icon.tsx';
import { TransactionsIcon } from '~/components/svg-icons/transactions-icon.tsx';
import { BriefcaseIcon } from '~/components/svg-icons/briefcase-icon.tsx';

const iconWidthHeight = 'w-7 h-7';

const NAVBAR_LINKS: Array<{
  to: string;
  label: string;
  icon: ReactElement;
  permissions: Array<string>;
}> = [
  {
    to: moneyRoute(),
    label: 'Overview',
    icon: <WalletIcon widthHeight={iconWidthHeight} />,
    permissions: [],
  },
  {
    to: moneyRoute(FinanceTab.budgets),
    label: 'Budget',
    icon: <BudgetIcon widthHeight={iconWidthHeight} />,
    permissions: [],
  },
  {
    to: moneyRoute(FinanceTab.transactions),
    label: 'Transactions',
    icon: <TransactionsIcon widthHeight={iconWidthHeight} />,
    permissions: [],
  },
  {
    to: moneyRoute(FinanceTab.investments),
    label: 'Investments',
    icon: <BriefcaseIcon widthHeight={iconWidthHeight} />,
    permissions: [],
  },
];

export const MoneyRoute = () => {
  return <LayoutWithNavbar navLinks={NAVBAR_LINKS} />;
};
