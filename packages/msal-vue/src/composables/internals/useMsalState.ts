// packages/msal-vue/src/composables/internals/useMsalState.ts

import { inject } from 'vue'
import type { MsalState } from '../../injectionSymbols'
import { msalStateKey } from '../../injectionSymbols'

/**
 * Function useMsalState
 * @returns
 * @internal
 */
export function useMsalState(): MsalState {
  const msalState = inject(msalStateKey)

  if (msalState == undefined) {
    throw 'useMsal*() cannot be used without installing msal-vue plugin.'
  }
  return msalState
}
