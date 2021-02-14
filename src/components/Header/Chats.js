import React from 'react'

import { 
  Drawer, 
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton, 
  Tooltip, 
  useDisclosure 
} from '@chakra-ui/react'
import { BiChat } from 'react-icons/bi'

const Chats = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Tooltip label="Chats">
        <IconButton 
          aria-label="Chats" 
          icon={<BiChat />} 
          isRound 
          variant="ghost" 
          size="lg"
          ml="2"
          ref={btnRef}
          onClick={onOpen}
        />
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Chats</DrawerHeader>

            <DrawerBody>
              Chats here
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default Chats
