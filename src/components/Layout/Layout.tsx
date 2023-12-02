import { ReactNode } from 'react'
import { Header } from "../Header/Header";
import './Layout.css'

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (

    <main>
      <Header />
      <section className="mainContent">
        {children}
      </section>
    </main>
  )
}
