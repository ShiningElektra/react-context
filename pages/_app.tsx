import type { AppProps } from "next/app";
import AppHeader from "../components/AppHeader";
import Cart from "../components/Cart";
import "../styles/globals.css";
import { CartContextProvider } from "../contexts/CartContext";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <AppHeader>
        <Cart />
      </AppHeader>

      <Component {...pageProps} />
    </CartContextProvider>
  );
}

export default MyApp;
