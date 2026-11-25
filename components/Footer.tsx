'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  const [anoAtual, setAnoAtual] = useState('');

  useEffect(() => {
    setAnoAtual(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-[#5E3A8C] text-white/90 py-8 px-4 text-center text-sm">
      <p>© {anoAtual || '2026'} Tia Milly - Pintura Facial Infantil. Todos os direitos reservados.</p>
      {/* <p className="mt-2 text-[#FCE373] font-medium inline-flex items-center justify-center gap-1.5">
        <span>Feito com</span>
        <Heart size={15} className="fill-[#E83E76] text-[#E83E76]" />
        <span>para levar cor e alegria a cada evento.</span>
      </p> */}
    </footer>
  );
}