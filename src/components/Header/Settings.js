import React from 'react'
import { useHistory } from 'react-router-dom'

import firebase from '../../firebase'

import { 
  IconButton, 
  Menu, 
  MenuButton, 
  MenuList, 
  MenuItem, 
  Tooltip 
} from '@chakra-ui/react'
import { BiCog, BiLogOut, BiUser } from 'react-icons/bi'

const Settings = () => {
  const auth = firebase.auth()
  const history = useHistory()

  const onSignOut = () => {
    auth.signOut().then(() => {
      history.push('/')
    })
  }

  return (
    <Menu>
      <Tooltip label="Settings">
        <MenuButton
          as={IconButton}
          aria-label="Settings"
          icon={<BiCog />}
          variant="ghost"
          size="lg"
          isRound
          ml={2}
        />
      </Tooltip>
      <MenuList>
        <MenuItem icon={<BiUser />}>
          Profile
        </MenuItem>
        <MenuItem icon={<BiLogOut />} onClick={onSignOut}>
          Signout
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default Settings
