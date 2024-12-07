"use client"
import { ThemeProvider } from "next-theme"
import { useEffect, useState } from "react"

const Providers=({Children})=>{
    const [Mounted,setMounted]=useState(false)
    useEffect(()=>{
        setMounted(true)
    },[])
    if (!Mounted) {
        return <>{Children}</>
    }
    return(
        <ThemeProvider>
            {Children}
        </ThemeProvider>
    );
};
export default Providers;