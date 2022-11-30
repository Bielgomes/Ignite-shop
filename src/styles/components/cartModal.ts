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
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  right: 0,
  top: 0,
  minHeight: '100vh',
  backgroundColor: '$gray900',
  padding: '3rem',
  paddingTop: '4.5rem',
  minWidth: '30rem',
})

export const Products = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  color: '$gray300',
  cursor: 'pointer',
})

export const Title = styled(Dialog.Title, {
  fontSize: '$lg',
  marginBottom: '2rem',
})

export const ProductCard = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: '24rem',
  gap: '1.25rem',
})

export const ImageContainer = styled('div', {
  minWidth: '6.375rem',
  height: '5.812rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #4765d4 100%)',
  borderRadius: 8,

  'img': {
    objectFit: 'cover',
  }
})

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  fontSize: '$md',
  lineHeight: '160%',

  button: {
    border: 0,
    backgroundColor: 'transparent',
    textAlign: 'left',
    lineHeight: '160%',
    color: '$green500',
    fontWeight: 'bold',
    fontSize: '$mds',
    cursor: 'pointer',
    width: 'fit-content',
  }
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const CheckoutArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',
})

export const Quantity = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  strong: {
    fontWeight: 'normal',
  },

  marginBottom: '0.437rem',
})

export const Total = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  marginBottom: '3.562rem',

  lineHeight: '160%',
})

export const CheckoutButton = styled('button', {
  padding: '1.25rem',
  border: 0,
  borderRadius: 8,
  backgroundColor: '$green500',
  fontWeight: 'bold',
  fontSize: '$md',
  color: '$white',
  cursor: 'pointer',
})