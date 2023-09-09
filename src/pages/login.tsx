import { useEffect } from 'react'

import Homeserver from '~/components/login/homeserver'
import User from '~/components/login/user'
import { useMatrixClient } from '~/context'

function Login() {
  const client = useMatrixClient()

  useEffect(() => {
    client?.logout()
  }, [client])

  return (
    <>
      <Homeserver />
      <User />
    </>
    // <Form.Root>
    //   <Form.Field className="FormField" name="email">
    //     <div style={{ alignItems: 'baseline', display: 'flex', justifyContent: 'space-between' }}>
    //       <Form.Label className="FormLabel">Email</Form.Label>
    //       <Form.Message className="FormMessage" match="valueMissing">
    //         Please enter your email
    //       </Form.Message>
    //       <Form.Message className="FormMessage" match="typeMismatch">
    //         Please provide a valid email
    //       </Form.Message>
    //     </div>
    //     <Form.Control asChild>
    //       <input className="Input" required type="email" />
    //     </Form.Control>
    //   </Form.Field>
    //   <Form.Field className="FormField" name="question">
    //     <div style={{ alignItems: 'baseline', display: 'flex', justifyContent: 'space-between' }}>
    //       <Form.Label className="FormLabel">Question</Form.Label>
    //       <Form.Message className="FormMessage" match="valueMissing">
    //         Please enter a question
    //       </Form.Message>
    //     </div>
    //     <Form.Control asChild>
    //       <textarea className="Textarea" required />
    //     </Form.Control>
    //   </Form.Field>
    //   <Form.Submit asChild>
    //     <button className="Button" style={{ marginTop: 10 }}>
    //       Post question
    //     </button>
    //   </Form.Submit>
    // </Form.Root>
  )
}

export default Login
