import { createContextState } from 'foxact/context-state'
import { type MatrixClient } from 'matrix-js-sdk'

// eslint-disable-next-line unicorn/no-useless-undefined
const [MatrixClientProvider, useMatrixClient, useSetMatrixClient] = createContextState<MatrixClient | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export { MatrixClientProvider, useMatrixClient, useSetMatrixClient }
