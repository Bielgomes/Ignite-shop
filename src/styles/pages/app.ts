import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
})

export const CartButton = styled('button', {
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