import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"

import Image from "next/future/image"
import { CartModal } from "./components/cartModal"
import { CartProvider } from "use-shopping-cart"
import { CartButton } from "./components/cartButton"

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_SECRET_KEY}
      successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={`${process.env.NEXT_URL}/`}
      currency="BRL"
      allowedCountries={['BR']}
      billingAddressCollection={true}
    >
      <Container>
        <Header>
          <Image src={logoImg} alt="" />

          <Dialog.Root>
            
            <Dialog.Trigger asChild>
              <CartButton />
            </Dialog.Trigger>

            <CartModal />
          </Dialog.Root>
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
