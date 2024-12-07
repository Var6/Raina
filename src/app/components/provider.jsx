'use client'
import { ThemeProvider } from "next-theme"
export function Providers({children}) {
    return<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
    </ThemeProvider>
    
}