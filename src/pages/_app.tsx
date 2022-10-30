import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"

import Image from "next/future/image"
import { CartModal } from "./components/cartModal"
import { CartButton } from "./components/cartButton"

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  )
}
