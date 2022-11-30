import * as Dialog from '@radix-ui/react-dialog'
<<<<<<< HEAD
import { useShoppingCart } from 'use-shopping-cart'
import axios from "axios"

import { Overlay, Content, CloseButton, ProductCard, Info, ImageContainer, Title, Products, InfoContainer, CheckoutArea, Quantity, Total, CheckoutButton } from '../../styles/components/cartModal'
=======
import { Overlay, Content, CloseButton, ProductCard, Info, ImageContainer, Title, Products, InfoContainer } from '../../styles/components/cartModal'
>>>>>>> fe4529519a6621993e743f0f55d4d57af5021bf3

import { X } from 'phosphor-react'
import Image from 'next/future/image'

export function CartModal() {
  const cart = useShoppingCart()
  const productList = Object.values(cart.cartDetails)

  const itensMessage = productList.length > 1 ? 'itens' : 'item'

  async function handleCheckout() {
    const transformedItems = productList.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: "BRL",
        unit_amount: item.price,
        product_data: {
          name: item.name,
          description: item.description,
          images: [item.imageUrl],
        },
      },
    }));

    const response = await axios.post('/api/checkout', {
      lineItems: transformedItems
    })

    const { checkoutUrl } = response.data
    window.location.href = checkoutUrl
  }

  function handleRemoveItem(id: string) {

    cart.removeItem(id)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Sacola de compras</Title>

        <CloseButton asChild>
          <X size={24} />
        </CloseButton>

        <Products>
<<<<<<< HEAD

          {productList.map(product => (
            <ProductCard key={product.id}>
              <ImageContainer>
                <Image src={product.imageUrl} alt="" width={100} height={100} />
              </ImageContainer>
              <InfoContainer>
                <Info>
                  <span>{product.name}</span>
                  <strong>{product.formattedValue}</strong>
                </Info>
                <button onClick={() => handleRemoveItem(product.id)}>Remover</button>
              </InfoContainer>
            </ProductCard>
          ))}

        </Products>
        
        <CheckoutArea>
          <Quantity>
            <span>Quantidade</span>
            <strong>{productList.length} {itensMessage}</strong>
          </Quantity>
          <Total>
            <span>Total</span>
            <strong>{cart.formattedTotalPrice}</strong>
          </Total>
          <CheckoutButton onClick={handleCheckout}>Finalizar compra</CheckoutButton>
        </CheckoutArea>

=======
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
>>>>>>> fe4529519a6621993e743f0f55d4d57af5021bf3
      </Content>
    </Dialog.Portal>
)
}