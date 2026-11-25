'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';

export default function Gallery() {
  // Para adicionar mais fotos no futuro, basta incluir novas linhas nesta lista
  // e salvar os arquivos dentro da pasta public/galeria/
  const fotos = [
    { src: "/galeria/trabalho1.jpeg", alt: "Pintura facial infantil" },
    { src: "/galeria/trabalho2.jpeg", alt: "Pintura facial de bola" },
    { src: "/galeria/trabalho3.jpeg", alt: "Maquiagem facial homem aranha" },
    { src: "/galeria/trabalho4.jpeg", alt: "Maquiagem  facial borboleta" },
    { src: "/galeria/trabalho5.jpeg", alt: "Pintura artística borboleta" },
    { src: "/galeria/trabalho6.jpeg", alt: "Maquiagem facial tigre" },
    { src: "/galeria/trabalho7.jpeg", alt: "Pintura facial homem aranha" },
    { src: "/galeria/trabalho8.jpeg", alt: "Pintura artística pônei" },
    { src: "/galeria/trabalho9.jpeg", alt: "Maquiagem facial homem aranha" },
    { src: "/galeria/trabalho10.jpeg", alt: "Pintura artística stitch " },
    { src: "/galeria/trabalho11.jpeg", alt: "Pintura artística halloween" },
    { src: "/galeria/trabalho12.jpeg", alt: "Pintura artística borboleta" },
    { src: "/galeria/trabalho13.jpeg", alt: "Pintura artística cobra" },
    { src: "/galeria/trabalho14.jpeg", alt: "Pintura artística pônei" },

  ];

  const [indiceAtual, setIndiceAtual] = useState(0);
  const [itensPorTela, setItensPorTela] = useState(1);
  const [pausado, setPausado] = useState(false);
  const [toqueInicialX, setToqueInicialX] = useState<number | null>(null);
  const [fotoAmpliada, setFotoAmpliada] = useState<{ src: string; alt: string } | null>(null);

  // Ajusta quantas fotos aparecem simultaneamente conforme o tamanho da tela
  useEffect(() => {
    function atualizarQuantidadeVisivel() {
      const visiveis = window.innerWidth >= 768 ? 3 : 1;
      setItensPorTela(visiveis);
      setIndiceAtual((anterior) => {
        const limite = Math.max(0, fotos.length - visiveis);
        return anterior > limite ? limite : anterior;
      });
    }

    atualizarQuantidadeVisivel();
    window.addEventListener('resize', atualizarQuantidadeVisivel);
    return () => window.removeEventListener('resize', atualizarQuantidadeVisivel);
  }, [fotos.length]);

  const maxIndice = Math.max(0, fotos.length - itensPorTela);

  const avancar = useCallback(() => {
    setIndiceAtual((anterior) => (anterior >= maxIndice ? 0 : anterior + 1));
  }, [maxIndice]);

  const voltar = () => {
    setIndiceAtual((anterior) => (anterior <= 0 ? maxIndice : anterior - 1));
  };

  // Passagem automática a cada 3,5 segundos (pausa se o mouse estiver em cima ou foto aberta)
  useEffect(() => {
    if (pausado || fotoAmpliada || maxIndice === 0) return;

    const intervalo = setInterval(() => {
      avancar();
    }, 3500);

    return () => clearInterval(intervalo);
  }, [pausado, fotoAmpliada, maxIndice, avancar]);

  // Suporte para arrastar com o dedo no celular (swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    setPausado(true);
    setToqueInicialX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (toqueInicialX !== null) {
      const diferenca = toqueInicialX - e.changedTouches[0].clientX;
      if (diferenca > 45) avancar();
      if (diferenca < -45) voltar();
    }
    setToqueInicialX(null);
    setPausado(false);
  };

  return (
    <section id="galeria" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#5E3A8C]">
          Meus <span className="text-[#E83E76]">Trabalhos</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Um pouco da magia e cor que levo para cada evento. Clique na foto para ampliar!
        </p>
      </div>

      {/* Área principal do carrossel */}
      <div
        className="relative group"
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Botão Anterior */}
        <button
          type="button"
          onClick={voltar}
          aria-label="Foto anterior"
          className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/95 border-2 border-[#FCE373] text-[#5E3A8C] shadow-lg flex items-center justify-center hover:bg-[#E83E76] hover:text-white hover:border-[#E83E76] active:scale-90 transition-all cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Trilho deslizante das imagens */}
        <div className="overflow-hidden rounded-2xl py-2">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${indiceAtual * (100 / itensPorTela)}%)`,
            }}
          >
            {fotos.map((foto, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 flex-shrink-0 px-2.5"
              >
                <div
                  onClick={() => setFotoAmpliada(foto)}
                  className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-md border-4 border-white hover:border-[#FCE373] transition-all duration-300 cursor-pointer group/card bg-amber-50"
                >
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                  {/* Indicador discreto de zoom ao passar o mouse */}
                  <div className="absolute inset-0 bg-[#5E3A8C]/0 group-hover/card:bg-[#5E3A8C]/20 transition-colors flex items-end justify-end p-3">
                    <span className="w-9 h-9 rounded-full bg-white/90 text-[#5E3A8C] flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity shadow">
                      <ZoomIn size={18} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botão Próximo */}
        <button
          type="button"
          onClick={avancar}
          aria-label="Próxima foto"
          className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/95 border-2 border-[#FCE373] text-[#5E3A8C] shadow-lg flex items-center justify-center hover:bg-[#E83E76] hover:text-white hover:border-[#E83E76] active:scale-90 transition-all cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bolinhas indicadoras de navegação */}
      <div className="flex justify-center items-center gap-2.5 mt-6">
        {Array.from({ length: maxIndice + 1 }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setIndiceAtual(idx)}
            aria-label={`Ir para o slide ${idx + 1}`}
            className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
              indiceAtual === idx
                ? 'w-8 bg-[#E83E76]'
                : 'w-3 bg-[#5E3A8C]/25 hover:bg-[#5E3A8C]/50'
            }`}
          />
        ))}
      </div>

      {/* Modal para ampliar a foto ao clicar */}
      {fotoAmpliada && (
        <div
          onClick={() => setFotoAmpliada(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-white rounded-3xl p-2 shadow-2xl border-4 border-[#FCE373]"
          >
            <button
              type="button"
              onClick={() => setFotoAmpliada(null)}
              aria-label="Fechar ampliação"
              className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full bg-[#E83E76] text-white shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="relative w-full h-[65vh] max-h-[540px] rounded-2xl overflow-hidden">
              <Image
                src={fotoAmpliada.src}
                alt={fotoAmpliada.alt}
                fill
                sizes="(max-width: 768px) 95vw, 672px"
                className="object-contain bg-[#FFFDF7]"
              />
            </div>
            <p className="text-center text-[#5E3A8C] font-semibold py-3 text-sm">
              {fotoAmpliada.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}