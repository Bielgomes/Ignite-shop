import { Handbag } from 'phosphor-react'
import { Trigger } from '../../styles/components/cartButton'
import { useShoppingCart } from 'use-shopping-cart'

export function CartButton() {
  const cart = useShoppingCart()
  
  return (
    <Trigger>
      <Handbag size={24} weight="bold" />
      {cart.cartCount > 0 && <span>{cart.cartCount}</span>}
    </Trigger>
  )
}