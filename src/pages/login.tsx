import * as Form from '@momoi/react/primitives/form'
import { useEffect } from 'react'

import { useMatrixClient } from '~/context'

function Login() {
  const client = useMatrixClient()

  useEffect(() => client && client.logout(), [client])

  return (
    <Form.Root>
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
          <input required type="url" />
        </Form.Control>
      </Form.Field>
      {/* <Form.Field className="FormField" name="email">
        <div style={{ alignItems: 'baseline', display: 'flex', justifyContent: 'space-between' }}>
          <Form.Label className="FormLabel">Email</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" required type="email" />
        </Form.Control>
      </Form.Field>
      <Form.Field className="FormField" name="question">
        <div style={{ alignItems: 'baseline', display: 'flex', justifyContent: 'space-between' }}>
          <Form.Label className="FormLabel">Question</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter a question
          </Form.Message>
        </div>
        <Form.Control asChild>
          <textarea className="Textarea" required />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="Button" style={{ marginTop: 10 }}>
          Post question
        </button>
      </Form.Submit> */}
    </Form.Root>
  )
}

export default Login
