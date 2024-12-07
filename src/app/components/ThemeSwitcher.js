"use client";
import { useState,useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Switch } from "@mui/material";
import { MoonIcon } from "./Moon";
import { SunIcon } from "./Sun";


const ThemeSwitcher= ()=>{
    const [Mounted, setMounted] = useState(false);
    const [theme, settheme] = useTheme();
    useEffect(() => {
      setMounted(true);
    }, []);
    if (!Mounted) {
        return null
    }
    const handleTheme=()=>{
        if (theme==="light") {
            settheme("dark")
        } else {
            settheme("light")
        }
    }
    return(
        <div>
            <Switch defaultSelected size="lg" color="success" onClick={handleTheme} startContent={<SunIcon/>} endContent={<MoonIcon/>}>
            </Switch>
          
        </div>
    )
}