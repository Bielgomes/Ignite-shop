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
  position: 'relative',

  'span': {
    position: 'absolute',
    
    width: 24,
    height: 24,

    top: -12,
    right: -12,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    boxSizing: 'content-box',
    border: '3px solid $gray900',
    borderRadius: 24,
    backgroundColor: '$green500',

    color: '$white',
    fontWeight: 'bold',
    fontSize: '$sm',
  }
})