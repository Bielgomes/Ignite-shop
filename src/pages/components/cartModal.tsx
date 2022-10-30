import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, CloseButton } from '../../styles/components/cartModal'

import { X } from 'phosphor-react'

export function CartModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Sacola de compras</Dialog.Title>
        
        <CloseButton asChild>
          <X size={24} />
        </CloseButton>

      </Content>
    </Dialog.Portal>
)
}