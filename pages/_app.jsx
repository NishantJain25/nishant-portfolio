import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import {Montserrat} from "next/font/google"

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-mont"
})

export default function MyApp({Component, pageProps}){
    return (
    <main className={`${montserrat.variable} font-mont`}>
        <Component {...pageProps} />
    </main>)
}