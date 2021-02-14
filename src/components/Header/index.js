import React from 'react'
import { useHistory } from 'react-router-dom'

import Chats from './Chats'
import Notifications from './Notifications'
import Settings from './Settings'

import { Flex, IconButton, Tooltip } from '@chakra-ui/react'
import { BiHome } from 'react-icons/bi'

const Header = () => {
  const history = useHistory()

  return (
    <Flex width="100%" maxW="1000px" margin="0 auto" p={1}>
      <Tooltip label="Dashboard">
        <IconButton
          onClick={() => history.push('/')}
          aria-label="Dashboard" 
          icon={<BiHome />} 
          isRound 
          variant="ghost"
          size="lg"
          ml="2"
        />
      </Tooltip>

      <Flex ml="auto">
        <Chats />
        <Notifications />
        <Settings />
      </Flex>
    </Flex>
  )
}

export default Header
