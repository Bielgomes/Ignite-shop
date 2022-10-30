import { styled } from '..'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  width: '100vw',
  height: '100vh',
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  right: 0,
  top: 0,
  minHeight: '100vh',
  backgroundColor: '$gray900',
  padding: '3rem',
  paddingTop: '4.5rem',
  fontSize: '$lg',
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  color: '$gray300',
  cursor: 'pointer',
})