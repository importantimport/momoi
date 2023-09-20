import { valibotResolver } from '@hookform/resolvers/valibot'
import * as Form from '@momoi/react/primitives/form'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type Input, object, startsWith, string, url } from 'valibot'

import type { WellKnownMatrixClient } from '~/utils/matrix/types'

import { useSetMatrixClient } from '~/context'
import { initClient } from '~/utils/matrix/client'

const schema = object({
  homeserver: string([url(), startsWith('https://')]),
})

type Schema = Input<typeof schema>

export const Homeserver = () => {
  const setMatrixClient = useSetMatrixClient()

  const { handleSubmit, register } = useForm<Schema>({ resolver: valibotResolver(schema) })

  const onSubmit: SubmitHandler<Schema> = async ({ homeserver }) => {
    const matrix: WellKnownMatrixClient = await fetch(new URL('/.well-known/matrix/client', homeserver).toString())
      .then(res => res.json())

    setMatrixClient(await initClient({
      baseUrl: matrix['m.homeserver'].base_url,
      idBaseUrl: matrix['m.identity_server'].base_url,
    }))
  }

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.Field name="homeserver">
        <div style={{ alignItems: 'baseline', display: 'flex', justifyContent: 'space-between' }}>
          <Form.Label>Homeserver</Form.Label>
          <Form.Message match="valueMissing">
            Please enter your homeserver
          </Form.Message>
          <Form.Message match="typeMismatch">
            Please provide a valid homeserver
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input {...register('homeserver')} required type="url" />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button style={{ marginTop: 10 }}>
          Submit
        </button>
      </Form.Submit>
    </Form.Root>
  )
}

export default Homeserver
