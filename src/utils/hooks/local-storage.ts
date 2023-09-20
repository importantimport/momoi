import { useLocalStorage } from '@mantine/hooks'

import type { LoginResponse } from 'matrix-js-sdk/lib/@types/auth'

export type MomoiWellKnown = {
  baseUrl: string,
  idBaseUrl: string
}

export type MomoiSecret = {
  accessToken: LoginResponse['access_token'],
  deviceId: LoginResponse['device_id'],
  // expiresInMs: LoginResponse['expires_in_ms'],
  userId: LoginResponse['user_id'],
  // refreshToken: LoginResponse['refresh_token'],
  // wellKnown: LoginResponse['well_known']
}

export const useSecret = () => useLocalStorage<MomoiSecret>({ key: 'momoi-secret' })

export const useWellKnown = () => useLocalStorage<MomoiWellKnown>({ key: 'momoi-well-known' })

// export const useAccessToken = () => useLocalStorage({key: 'momoi-access-token' })

// export const useDeviceId = () => useLocalStorage({ key: 'momoi-device-id' })

// export const useIdBaseUrl = () => useLocalStorage({ key: 'momoi-id-base-url' })

// export const useUserId = () => useLocalStorage({ key: 'momoi-user-id' })
