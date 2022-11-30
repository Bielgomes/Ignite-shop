import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string,
  images: string[],
}

export default function Success({ customerName, images }: SuccessProps) {
  const cart = useShoppingCart();

  if (cart.cartCount > 1) {
    cart.clearCart();
  }
  const amount = images.length;
  const itensText = amount > 1 ? 'camisetas' : 'camiseta'
  
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImageContainer>
          {images.map((image) => {
            return (
              <Image key={image[0]} src={image[0]} alt="" width={140} height={140} />
            )
          })}
        </ImageContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {amount} {itensText} já está a caminho da sua casa. 
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }
  
  const sessionId = String(query.session_id);
  
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const images = session.line_items.data.map((item) => {
    return item.price.product.images;
  });

  const customerName = session.customer_details.name

  return {
    props: {
      customerName,
      images
    }
  }
}