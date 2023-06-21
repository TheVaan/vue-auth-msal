// packages/vue-auth-msal/src/utils/utilFuncs.ts

import type { AccountInfo } from '@azure/msal-browser'

type AccountIdentifiers = Partial<Pick<AccountInfo, 'homeAccountId' | 'localAccountId' | 'username'>>

/**
 * Helper function to determine whether 2 arrays are equal
 * Used to avoid unnecessary state updates
 * @param arrayA
 * @param arrayB
 * @returns boolean
 * @internal
 */
export function accountArraysAreEqual(arrayA: Array<AccountIdentifiers>, arrayB: Array<AccountIdentifiers>): boolean {
  if (arrayA.length !== arrayB.length) {
    return false
  }

  const comparisonArray = [...arrayB]

  return arrayA.every((elementA) => {
    const elementB = comparisonArray.shift()
    if (!elementA || !elementB) {
      return false
    }

    return (
      elementA.homeAccountId === elementB.homeAccountId &&
      elementA.localAccountId === elementB.localAccountId &&
      elementA.username === elementB.username
    )
  })
}
