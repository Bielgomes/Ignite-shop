import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, CloseButton, ProductCard, Info, ImageContainer, Title, Products, InfoContainer } from '../../styles/components/cartModal'

import { X } from 'phosphor-react'

export function CartModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Sacola de compras</Title>

        <CloseButton asChild>
          <X size={24} />
        </CloseButton>

        <Products>
          <ProductCard>
            <ImageContainer>

            </ImageContainer>
            <InfoContainer>
              <Info>
                <span>Camiseta Beyond the Limits</span>
                <strong>R$ 79,90</strong>
              </Info>
              <button>Remover</button>
            </InfoContainer>
          </ProductCard>

          <ProductCard>
            <ImageContainer>

            </ImageContainer>
            <InfoContainer>
              <Info>
                <span>Camiseta Beyond the Limits</span>
                <strong>R$ 79,90</strong>
              </Info>
              <button>Remover</button>
            </InfoContainer>
          </ProductCard>

          <ProductCard>
            <ImageContainer>

            </ImageContainer>
            <InfoContainer>
              <Info>
                <span>Camiseta Beyond the Limits</span>
                <strong>R$ 79,90</strong>
              </Info>
              <button>Remover</button>
            </InfoContainer>
          </ProductCard>
          
        </Products>
      </Content>
    </Dialog.Portal>
)
}