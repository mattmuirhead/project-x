import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

import firebase from './firebase'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ChatRoom from './pages/ChatRoom'

import Header from './components/Header/index'

const auth = firebase.auth()

const App = () => {
  const [user] = useAuthState(auth)

  return (
    <ChakraProvider theme={theme}>
      <Router>
        {user && <Header />}
        <Route path="/" component={user ? Dashboard : Login} exact />
        <Route path="/chat-room" component={ChatRoom} />
      </Router>
    </ChakraProvider>
  )
}

export default App
