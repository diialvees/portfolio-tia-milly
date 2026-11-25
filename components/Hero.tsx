import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { gerarLinkWhatsApp } from '@/constants/contato';

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto gap-12">
      <div className="md:w-1/2 flex flex-col gap-6 text-center md:text-left">
        <span className="inline-block self-center md:self-start bg-[#E83E76] text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-sm">
          Diversão e muita criatividade para a criançada
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#5E3A8C] leading-tight">
          Pintura Facial Infantil com <span className="text-[#E83E76]">Tia Milly</span>
        </h1>

        <p className="text-lg text-gray-600">
          Deixe a imaginação ganhar cor! Atendimento carinhoso, tintas seguras e laváveis
          para festas infantis, eventos e ensaios fotográficos.
        </p>

        <div className="flex justify-center md:justify-start mt-2">
          <a
            href={gerarLinkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#5BB83C] text-white px-8 py-4 rounded-full font-bold text-lg hover:brightness-105 hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            <MessageCircle size={22} />
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center relative">
        <div className="absolute -z-10 w-80 h-80 md:w-[410px] md:h-[410px] rounded-full bg-gradient-to-tr from-[#7ACBE8]/40 via-[#FCE373]/60 to-[#E83E76]/20 blur-md" />
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-[#FCE373] shadow-2xl relative overflow-hidden animate-flutuar bg-white">
          <Image
            src="/galeria/foto-esp.webp"
            alt="Tia Milly - Pintura facial infantil"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}