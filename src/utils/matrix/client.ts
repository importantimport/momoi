import { type MatrixClient, createClient } from 'matrix-js-sdk'

const initial_device_display_name: string = import.meta.env.MOMOI_INITIAL_DEVICE_DISPLAY_NAME ?? 'Momoi Web'

export const initClient = async (): Promise<MatrixClient> => {
  const client = createClient({
    // baseUrl: localStorage.getItem('base_url') ?? '',
    // accessToken: localStorage.getItem('access_token') ?? '',
    // userId: localStorage.getItem('user_id') ?? '',
    accessToken: import.meta.env.MOMOI_ACCESS_TOKEN,
    baseUrl: import.meta.env.MOMOI_BASE_URL,
    userId: import.meta.env.MOMOI_USER_ID,
  })

  await client.initRustCrypto()
  await client.startClient()

  return client
}

export const loginWithPassword = async (baseUrl: string, user: string, password: string) => {
  const client = createClient({ baseUrl })
  await client.login('m.login.password', {
    identifier: {
      type: 'm.id.user',
      user,
    },
    initial_device_display_name,
    password,
  })
}

export const loginWithToken = async (baseUrl: string, token: string) => {
  const client = createClient({ baseUrl })
  await client.login('m.login.token', {
    initial_device_display_name,
    token,
  })
}
