import { valibotResolver } from '@hookform/resolvers/valibot'
import { useOs } from '@mantine/hooks'
import * as Form from '@momoi/react/primitives/form'
import { createClient } from 'matrix-js-sdk'
import { useEffect } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type Input, object, string } from 'valibot'

import { useMatrixClient, useSetMatrixClient } from '~/context'
import { useSecret, useWellKnown } from '~/utils/hooks/local-storage'
import { initClient } from '~/utils/matrix/client'

// import { Navigate } from '~/router'

const schema = object({
  password: string(),
  user: string(),
})

type Schema = Input<typeof schema>

export const User = () => {
  const matrixClient = useMatrixClient()
  const setMatrixClient = useSetMatrixClient()
  const [wellKnown] = useWellKnown()
  const [secret, setSecret] = useSecret()
  const os = useOs()

  const { handleSubmit, register } = useForm<Schema>({ resolver: valibotResolver(schema) })

  useEffect(() => {
    const secretLogin = async () => {
      if (!secret || !wellKnown)
        return
      const { baseUrl, idBaseUrl } = wellKnown
      const { accessToken, deviceId, userId } = secret

      setMatrixClient(await initClient({
        accessToken,
        baseUrl,
        deviceId,
        idBaseUrl,
        userId,
      }, `Momoi (${location.host}, ${os})`))
    }
    secretLogin()
  }, [os, secret, setMatrixClient, wellKnown])

  if (!wellKnown)
    return

  const onSubmit: SubmitHandler<Schema> = async ({ password, user }) => {
    const { baseUrl, idBaseUrl } = wellKnown

    const tempClient = createClient({ baseUrl, idBaseUrl })

    const { access_token: accessToken, device_id: deviceId, user_id: userId } = await tempClient.loginWithPassword(user, password)

    setSecret({
      accessToken,
      deviceId,
      userId,
    })

    setMatrixClient(await initClient({
      accessToken,
      baseUrl,
      deviceId,
      idBaseUrl,
      userId,
    }, `Momoi (${location.host}, ${os})`))
  }

  // if (matrixClient?.isLoggedIn)
  //   return <Navigate to="/" />

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
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
      <br />
      {matrixClient?.isLoggedIn ? 'logged in' : ''}
      {matrixClient?.deviceId}
    </Form.Root>
  )
}

export default User
