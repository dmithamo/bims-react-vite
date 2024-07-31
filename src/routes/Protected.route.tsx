import React, { ReactNode } from 'react';
import { AccessDeniedOr404Route } from '~/routes/AccessDeniedOr404.route.tsx';
import { TPermissionOnFE } from '~/utils/types.ts';

interface Props {
  requiredPermissions: Array<TPermissionOnFE>;
  children: ReactNode;
}

export const ProtectedRoute: React.FC<Props> = ({
  children,
  requiredPermissions,
}) => {
  if (requiredPermissions) return <>{children}</>;

  return <AccessDeniedOr404Route />;
};
