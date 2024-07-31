import { TPermissionOnFE, TSessionUser } from '~/utils/types.ts';
import { PERMISSIONS_FROM_BE } from '~/utils/constants.ts';

export const AuthService = {
  getAuthenticatedUser: async (): Promise<TSessionUser | null> => {
    return null;
  },
  getAuthenticatedUserPermissions: async (): Promise<
    Array<TPermissionOnFE>
  > => {
    const userPermsBE =
      (await AuthService.getAuthenticatedUser())?.permissions || [];

    if (userPermsBE.length === 0) return [];

    const userPermsFE: Array<TPermissionOnFE> = [];

    for (const [permOnFE, permFromBE] of Object.entries(PERMISSIONS_FROM_BE)) {
      if (permFromBE.length === 0) {
        userPermsFE.push(permOnFE as TPermissionOnFE);
        continue;
      }

      if (permFromBE.every(perm => userPermsBE.includes(perm))) {
        userPermsFE.push(permOnFE as TPermissionOnFE);
      }
    }

    return userPermsFE;
  },
  hasAccess: async (
    requiredPermissions: Array<TPermissionOnFE>,
  ): Promise<boolean> => {
    if (requiredPermissions.length === 0) return true;

    const userPermissions = await AuthService.getAuthenticatedUserPermissions();

    if (userPermissions.length === 0) return false;

    return requiredPermissions.every(rqdPerm => {
      return userPermissions.some(uPerm => rqdPerm === uPerm);
    });
  },
};
