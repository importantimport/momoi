import { createContextState } from 'foxact/context-state'
import { type MatrixClient } from 'matrix-js-sdk'

// const initial_device_display_name: string = import.meta.env.MOMOI_INITIAL_DEVICE_DISPLAY_NAME ?? 'Momoi Web'

// eslint-disable-next-line unicorn/no-useless-undefined
const [MatrixClientProvider, useMatrixClient, useSetMatrixClient] = createContextState<MatrixClient | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export { MatrixClientProvider, useMatrixClient, useSetMatrixClient }

// const getMatrixClient =

// export const initClient = async (): Promise<MatrixClient> => {
//   const client = createClient({
//     // .well-known/matrix/client m.homeserver
//     baseUrl: import.meta.env.MOMOI_BASE_URL,
//     // .well-known/matrix/client m.identity_server
//     // idBaseUrl: import.meta.env.MOMOI_DEFAULT_IS_URL,
//   })

//   await client.initRustCrypto()
//   // await client.startClient()

//   return client
// }

// export const loginWithPassword = async (baseUrl: string, user: string, password: string) => {
//   const client = createClient({ baseUrl })
//   await client.login('m.login.password', {
//     identifier: {
//       type: 'm.id.user',
//       user,
//     },
//     initial_device_display_name,
//     password,
//   })
// }

// export const loginWithToken = async (baseUrl: string, token: string) => {
//   const client = createClient({ baseUrl })
//   await client.login('m.login.token', {
//     initial_device_display_name,
//     token,
//   })
// }
