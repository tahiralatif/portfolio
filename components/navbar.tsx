"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from  "../lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b bg-background/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-primary">
          TR
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative text-lg font-medium transition-all duration-300",
                pathname === item.path ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <motion.span
                className="relative"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                    layoutId="navbar-underline"
                  />
                )}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Right Side Controls (Hamburger + Dark Mode) */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <ModeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-background shadow-md md:hidden">
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "text-lg font-medium transition-all duration-300",
                    pathname === item.path ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
