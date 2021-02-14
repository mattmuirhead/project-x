import React from 'react'
import { Button, Flex, Heading } from '@chakra-ui/react'

import firebase from '../../firebase'

const auth = firebase.auth()

const Login = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (
    <Flex flex={1} w="100%" maxW="1000px" margin="0 auto" justifyContent="center" alignItems="center" flexDirection="column">
      <Heading as="h1" mb={4}>Login</Heading>
      <Button onClick={signInWithGoogle}>Login with Google</Button>
    </Flex>
  )
}

export default Login