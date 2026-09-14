import { useCallback, useEffect, useState } from "react"

const STORAGE_KEY = "aluraflix-theme"

function getInitialTheme() {
    if (typeof window === "undefined") return "dark"
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === "light" || saved === "dark") return saved
    return "dark"
}

export function useTheme() {
    const [theme, setTheme] = useState(getInitialTheme)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        document.documentElement.style.colorScheme = theme
        window.localStorage.setItem(STORAGE_KEY, theme)
    }, [theme])

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    }, [])

    return { theme, toggleTheme }
}
