import { StoreProvider } from "./StoreProvider"
import { Nav } from "./components/Nav"

import "./styles/globals.css"
import styles from "./styles/layout.module.css"

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav />

            <header className={styles.header}></header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}></footer>
          </section>
        </body>
      </html>
    </StoreProvider>
  )
}
