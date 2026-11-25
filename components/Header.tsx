'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Palette, ChevronDown, Camera, Sparkles, MessageCircle } from 'lucide-react';

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickFora(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuAberto(false);
      }
    }

    document.addEventListener('mousedown', handleClickFora);
    return () => document.removeEventListener('mousedown', handleClickFora);
  }, []);

  const opcoesMenu = [
    { nome: 'Galeria', href: '#galeria', icone: <Camera size={18} className="text-[#E83E76]" /> },
    { nome: 'Serviços', href: '#servicos', icone: <Sparkles size={18} className="text-[#5E3A8C]" /> },
    { nome: 'Contato', href: '#contato', icone: <MessageCircle size={18} className="text-[#5BB83C]" /> },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 bg-[#FFFDF7]/95 backdrop-blur-md border-b border-amber-100 shadow-sm">
      <Link href="/" className="flex items-center gap-2 text-2xl font-black tracking-tight">
        <Palette size={28} className="text-[#E83E76]" />
        <span className="text-[#5E3A8C]">
          Tia <span className="text-[#E83E76]">Milly</span>
        </span>
      </Link>

      <div className="relative" ref={menuRef}>
        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-expanded={menuAberto}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FCE373]/40 border border-[#FCE373] text-[#5E3A8C] font-bold shadow-sm hover:bg-[#FCE373]/70 active:scale-95 transition-all duration-200 cursor-pointer select-none"
        >
          <span>Menu</span>
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${menuAberto ? 'rotate-180' : ''}`}
          />
        </button>

        <nav
          className={`absolute right-0 mt-3 w-52 rounded-2xl bg-white shadow-xl border border-amber-100 p-2 origin-top-right transition-all duration-200 ${
            menuAberto
              ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
          }`}
        >
          {opcoesMenu.map((opcao) => (
            <Link
              key={opcao.href}
              href={opcao.href}
              onClick={() => setMenuAberto(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#5E3A8C] font-semibold hover:bg-amber-50 hover:text-[#E83E76] active:scale-95 transition-all duration-150"
            >
              {opcao.icone}
              <span>{opcao.nome}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}