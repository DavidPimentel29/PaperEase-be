'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">PE</span>
          </div>
          <span className="font-bold text-lg text-primary hidden sm:inline">PaperEase</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/menu" className="text-foreground hover:text-primary transition">
            Menu
          </Link>
          <Link href="/programas" className="text-foreground hover:text-primary transition">
            Programas
          </Link>
          <Link href="/solicitudes" className="text-foreground hover:text-primary transition">
            Solicitudes
          </Link>
          <Link href="/login" className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition">
            Ingresar
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden border-t border-border bg-card px-4 py-4 flex flex-col gap-4">
          <Link href="/menu" className="text-foreground hover:text-primary transition">
            Menu
          </Link>
          <Link href="/programas" className="text-foreground hover:text-primary transition">
            Programas
          </Link>
          <Link href="/solicitudes" className="text-foreground hover:text-primary transition">
            Solicitudes
          </Link>
          <Link href="/login" className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition text-center">
            Ingresar
          </Link>
        </nav>
      )}
    </header>
  );
}
