import { useLocalStorage } from "@mantine/hooks"

import EncryptionService from "react-secure-storage/src/lib/encryption.ts"

export const useSecureLocalStorage = <T = string>(props: Parameters<typeof useLocalStorage<T>>[0]) => {
  const { decrypt, encrypt } = new EncryptionService()

  return useLocalStorage<T>({
    ...props,
    serialize: value => encrypt(JSON.stringify(value)),
    deserialize: value => {
      if (value) {
        try {
          return JSON.parse(decrypt(value))
        } catch {
          return decrypt(value)
        }
      } else return value
    },
  })
}