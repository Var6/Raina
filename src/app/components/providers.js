import Nav from "./nav"
import Footer from "./footer"
import { ThemeProvider } from "next-themes"
export function Providers({children}) {
    return(
    <ThemeProvider attribute="class" defaultTheme="light-theme">
        <Nav/>
        {children}
        <Footer/>
    </ThemeProvider>
    )
}