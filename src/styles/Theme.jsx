import { ThemeProvider } from "styled-components"
import React from "react"

const theme = {
    colors: {
        purple: "#8284FA",
        purpleDark: "#5E60CE",
        blue: "#4EA8DE",
        blueDark: "#1E6F9F",
        gray: {
            100: "#F2F2F2",
            200: "#D9D9D9",
            300: "#808080",
            400: "#333333",
            500: "#262626",
            600: "#1A1A1A",
            700: "#0D0D0D",
        },
        danger: "#E25858",

    },
    
    fontSizes: {
        small: "0.75rem",
        medium: "0.875rem",
        large: "1rem", 
    }
}

export const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)



