import { Handbag } from 'phosphor-react'
import { Trigger } from '../../styles/components/cartButton'

export function CartButton() {
  return (
    <Trigger>
      <Handbag size={24} width="bold" />
      <span>0</span>
    </Trigger>
  )
}