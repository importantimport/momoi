import { valibotResolver } from '@hookform/resolvers/valibot'
import * as Form from '@momoi/react/primitives/form'
import { createClient } from 'matrix-js-sdk'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type Input, object, startsWith, string, url } from 'valibot'

import { useSetMatrixClient } from '~/context'

const schema = object({
  homeserver: string([url(), startsWith('https://')]),
})

type Schema = Input<typeof schema>

export const Homeserver = () => {
  const setMatrixClient = useSetMatrixClient()

  const { handleSubmit, register } = useForm<Schema>({ resolver: valibotResolver(schema) })

  const onSubmit: SubmitHandler<Schema> = async ({ homeserver }) => {
    // eslint-disable-next-line no-console
    console.log(homeserver)

    const matrix = await fetch(new URL('/.well-known/matrix/client', homeserver).toString())
      .then(res => res.json())

    // eslint-disable-next-line no-console
    console.log(matrix['m.homeserver'], matrix['m.identity_server'], matrix['org.matrix.msc3575.proxy'])

    const matrixClient = createClient({
      baseUrl: matrix['m.homeserver'],
      idBaseUrl: matrix['m.identity_server'],
    })

    setMatrixClient(matrixClient)
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
          {/* fetch https://${homeserver}/.well-known/matrix/client */}
          {/* maybe: ?_cacheBuster=${cacheBuster} */}
          {/* m.homeserver m.identity_server org.matrix.msc3575.proxy */}
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
