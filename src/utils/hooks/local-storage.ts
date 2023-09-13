import { useLocalStorage } from '@mantine/hooks'

export const useAccessToken = () => useLocalStorage({ key: 'momoi-access-token' })
