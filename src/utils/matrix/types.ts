/**
 * Example:
 * {@link https://matrix.org/.well-known/matrix/client}
 */
export type WellKnownMatrixClient = {
  'm.homeserver': {
    /** @example 'https://matrix-client.matrix.org' */
    base_url: string
  },
  'm.identity_server': {
    /** @example 'https://vector.im' */
    base_url: string
  },
  'org.matrix.msc3575.proxy'?: {
    /** @example 'https://slidingsync.lab.matrix.org' */
    url: string
  }
}
