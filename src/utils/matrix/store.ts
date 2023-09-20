import { IndexedDBStore, IndexedDBCryptoStore } from "matrix-js-sdk";

export const createIndexedDBStore = (dbName: string) => {
  const indexedDbStore = new IndexedDBStore({
    indexedDB: globalThis.indexedDB,
    localStorage: globalThis.localStorage,
    dbName
  })

  indexedDbStore.startup()

  return indexedDbStore
}

export const createIndexedDBCryptoStore = (dbName: string) => new IndexedDBCryptoStore(
  globalThis.indexedDB,
  dbName,
)
