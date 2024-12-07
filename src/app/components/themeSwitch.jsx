'use client'
import useTheme from "next-theme"
import { useEffect, useState } from "react"
import Image from "next/image"
import { MoneyOff } from "@mui/icons-material"
export default function ThemeSwitch(){
    const [Mount, setMount] = useState(false)
    const {setTheme , resolveTheme}=useTheme()
    useEffect(() => setMount(true), [])
    if (!Mount) return(
        <Image height={35} width={35} sizes="35X35" alt="toggle image" priority={false} title="toggle image"/>
        
    )
    if (resolveTheme==='dark') {
        return <MoneyOff onClick={()=> setTheme('light')}/>
    }
    if (resolveTheme==='light') {
        return <MoneyOff onClick={()=> setTheme('dark')}/>
    }
    
    
}
