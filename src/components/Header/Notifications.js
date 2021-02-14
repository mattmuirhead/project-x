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
import { BiBell } from 'react-icons/bi'

const Notifications = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Tooltip label="Notifications">
        <IconButton 
          aria-label="Notifications" 
          icon={<BiBell />} 
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
            <DrawerHeader>Notifications</DrawerHeader>

            <DrawerBody>
              Notifications here
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default Notifications
