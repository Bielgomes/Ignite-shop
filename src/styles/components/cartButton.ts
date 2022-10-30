import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog'

interface TriggerAttributes {
  cartItens: string
}

export const Trigger = styled(Dialog.Trigger, {
  padding: '0.75rem',
  borderRadius: 6,
  border: 0,
  backgroundColor: '$gray800',
  color: '$gray300',
  cursor: 'pointer',

  variants: {
    cartItens: {
      
    }
  }
})