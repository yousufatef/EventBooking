'use client';

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "flowbite-react";
import { FaMoon, FaSun } from "react-icons/fa";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    // Avoid hydration mismatch
    if (!mounted) return null;

    return (
        <Button
            className='w-12 h-10 hidden sm:inline'
            color='gray'
            pill
            onClick={toggleTheme}
        >
            <span>{theme === 'light' ? <FaSun /> : <FaMoon />}</span>
        </Button>
    );
}
