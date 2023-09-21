import { useLocalStorage } from "@mantine/hooks"

import EncryptionService from "react-secure-storage/src/lib/encryption.ts"

export const useSecureLocalStorage = <T = string>(props: Parameters<typeof useLocalStorage<T>>[0]) => {
  const encryption = new EncryptionService()

  return useLocalStorage<T>({
    ...props,
    serialize: value => encryption.encrypt(JSON.stringify(value)),
    deserialize: value => {
      if (value) {
        try {
          return JSON.parse(encryption.decrypt(value))
        } catch {
          return encryption.decrypt(value)
        }
      } else return value
    },
  })
}