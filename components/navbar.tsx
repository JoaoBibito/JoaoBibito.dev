'use client'
import { Menu } from "lucide-react";

export const Navbar = () => {
    return (
        <header className="absolute top-0 z-30 mt-3 flex min-h-15 w-full flex-wrap items-center text-xs text-white md:mt-0">
            <button
                type="button"
                aria-label="Open Command Palette"
                className="flex cursor-pointer z-10 items-center justify-center bg-transparent p-2 border-transparent"
            >
                <Menu className="h-6 w-6" />
            </button>
        </header>
    )
}
