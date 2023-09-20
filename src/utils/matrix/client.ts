import Olm from '@matrix-org/olm'
import olmWasmPath from '@matrix-org/olm/olm.wasm?url'
import { createClient, type MatrixClient, type ICreateClientOpts } from 'matrix-js-sdk'
import { createIndexedDBCryptoStore, createIndexedDBStore } from './store'

export const initClient = async (options: ICreateClientOpts): Promise<MatrixClient> => {
  // @ts-ignore
  // TODO: https://gitlab.matrix.org/matrix-org/olm/-/issues/10
  window.OLM_OPTIONS = {}
  await Olm.init({ locateFile: () => olmWasmPath })

  const store = createIndexedDBStore('momoi-store')
  const cryptoStore = createIndexedDBCryptoStore('momoi-crypto-store')

  const matrixClient = createClient({
    ...options,
    store,
    cryptoStore,
  })

  // await matrixClient.initRustCrypto
  // await matrixClient.startClient({ lazyLoadMembers: true })
  // matrixClient.getCrypto()!.globalBlacklistUnverifiedDevices = false

  return matrixClient
}
