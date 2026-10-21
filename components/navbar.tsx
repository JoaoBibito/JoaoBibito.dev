'use client'
import { Menu, Bolt } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { useT } from "@/i18n/use-t";
import { motion } from 'framer-motion'

export const pages = ['about', 'projects', 'contact'] as const;

export function Navbar() {

    const t = useT();

    const pathname = usePathname();
    const [hovered, setHovered] = useState('');
    //const {toggle} = useCommandPalette();

    return (
        <header className="absolute top-0 z-30 mt-3 flex min-h-15 w-full flex-wrap items-center justify-center text-xs text-white md:mt-0">
            <Link
                href="/"
                className="order-1 ml-3 flex cursor-pointer appearence-none items-center justify-center rounded-lg border-none bg-transparent p-2 font-heading text-white transition-colors durations-200 ease-in-out hover:bg-hover" >

                <Bolt
                    className="h-6 w-6" />
            </Link>

            <nav className="order-3 flex-1 basis-full overflow-x-auto overflow-y-hidden text-center md:order-2 md:basis-[initial]">
                <ul className="relative top-[5px] inline-flex list-none justify-around">
                    {pages.map((page) => {
                        const path = `/${page.toLocaleLowerCase()}`
                        const ishovered = hovered === page;
                        const label = t.common.navbar[page]
                        return (
                            <li
                                key={page}
                            >
                                <Link
                                    href={path}
                                    className="border-0 hover:opacity-100 focus:opacity-100"

                                >
                                    <motion.span
                                        className={cn(
                                            'relative inline-block cursor-pointer p-5 text-xs font-medium uppercase tracking-[0.075em] text-secondary transition-colors duration-200 ease-in-out hover:text-primary',
                                            pathname === path && 'text-primary after:opacity-100',
                                            "after:absolute after:left-0 after:right-0 after:top-[1.125rem] after:mx-auto after:h-px after:w-5 after:bg-white after:opacity-0 after:transition-opacity after:duration-200 after:ease-in-out after:content-['']"
                                        )}
                                        onHoverStart={() => setHovered(page)}
                                        onHoverEnd={() => setHovered('')}
                                    >   {label}
                                    </motion.span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <aside className="order-2 ml-auto mr-3 flex items-centergap-1">
            <button
                type="button"
                aria-label="Open Command Palette"
                className="flex cursor-pointer z-10 items-center justify-center bg-transparent p-2 transition-colors duration-200 ease-in-out hover:bg-hover">
                <Menu className="h-6 w-6" />
            </button>
            </aside>
        </header>
    )
}
