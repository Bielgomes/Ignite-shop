import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../assets/logo.svg'
import { CartButton, Container, Header } from "../styles/pages/app"

import Image from "next/future/image"
import { CartModal } from "./components/cartModal"
import { Handbag } from "phosphor-react"

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />

        <Dialog.Root>
          
          <Dialog.Trigger asChild>
            <CartButton css={{ $$cartItems: 1 }}>
              <Handbag size={24} weight="bold" />
              <span>10</span>
            </CartButton>
          </Dialog.Trigger>

          <CartModal />
        </Dialog.Root>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
