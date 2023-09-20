import Olm from '@matrix-org/olm'
import olmWasmPath from '@matrix-org/olm/olm.wasm?url'
import { createClient, type MatrixClient, type ICreateClientOpts } from 'matrix-js-sdk'
import { createIndexedDBCryptoStore, createIndexedDBStore } from '~/utils/matrix/store'

export const initClient = async (options: ICreateClientOpts, displayName: string): Promise<MatrixClient> => {
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

  await matrixClient.initRustCrypto()
  await matrixClient.startClient({ lazyLoadMembers: true })

  const { display_name: currentDisplayName } = await matrixClient.getDevice(options.deviceId!)

  if (currentDisplayName !== displayName)
    matrixClient.setDeviceDetails(options.deviceId!, { display_name: displayName })

  // matrixClient.getCrypto()!.globalBlacklistUnverifiedDevices = false

  return matrixClient
}
