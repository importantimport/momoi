import { valibotResolver } from '@hookform/resolvers/valibot'
import * as Form from '@momoi/react/primitives/form'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type Input, object, string } from 'valibot'

import { useMatrixClient } from '~/context'

// import { Navigate } from '~/router'

const schema = object({
  password: string(),
  user: string(),
})

type Schema = Input<typeof schema>

export const User = () => {
  const matrixClient = useMatrixClient()

  const { handleSubmit, register } = useForm<Schema>({ resolver: valibotResolver(schema) })

  const onSubmit: SubmitHandler<Schema> = async ({ password, user }) => {
    matrixClient?.loginWithPassword(user, password)
    await matrixClient?.initRustCrypto()
    await matrixClient?.startClient()

     
    console.log(matrixClient?.getSyncState())
  }

  // if (matrixClient?.isLoggedIn)
  //   return <Navigate to="/" />

  return matrixClient
    ? (
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        {matrixClient ? 'client' : 'undefined'}
        <Form.Field name="user">
          <div style={{ alignItems: 'baseline', display: 'flex', justifyContent: 'space-between' }}>
            <Form.Label>Username</Form.Label>
            <Form.Message match="valueMissing">
              Please enter your username
            </Form.Message>
            <Form.Message match="typeMismatch">
              Please provide a valid username
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input {...register('user')} required type="text" />
          </Form.Control>
        </Form.Field>
        <Form.Field name="password">
          <div style={{ alignItems: 'baseline', display: 'flex', justifyContent: 'space-between' }}>
            <Form.Label>Password</Form.Label>
            <Form.Message match="valueMissing">
              Please enter your password
            </Form.Message>
            <Form.Message match="typeMismatch">
              Please provide a valid password
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input {...register('password')} required type="password" />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button style={{ marginTop: 10 }}>
            Submit
          </button>
        </Form.Submit>
      </Form.Root>
      )
    : undefined
}

export default User
