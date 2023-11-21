import Image from 'next/image'
import { Inter } from 'next/font/google'
import Pastilla1 from "./pastilla1"
import Landing from "./landing"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Landing />
    </>
  )
}
