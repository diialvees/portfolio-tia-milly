import { MessageCircle } from 'lucide-react';
import { gerarLinkWhatsApp } from '@/constants/contato';

export default function Contact() {
  const linkContato = gerarLinkWhatsApp(
    "Olá Tia Milly! Gostaria de consultar datas disponíveis e valores para um evento."
  );

  return (
    <section id="contato" className="py-24 px-8 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-[#5E3A8C] mb-6">
        Vamos <span className="text-[#E83E76]">Conversar?</span>
      </h2>
      <p className="text-lg text-gray-600 mb-10 leading-relaxed">
        Pronta para levar muita cor e alegria para o seu próximo evento!
        Entre em contato pelo WhatsApp <strong className="text-[#5E3A8C]">(79) 9 8829-0540</strong> para
        consultar datas disponíveis e solicitar um orçamento sem compromisso.
      </p>

      <div className="flex justify-center">
        <a
          href={linkContato}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-[#5BB83C] text-white px-8 py-4 rounded-full font-bold text-lg hover:brightness-105 hover:-translate-y-1 active:scale-95 transition-all shadow-lg"
        >
          <MessageCircle size={22} />
          <span>Chamar no WhatsApp</span>
        </a>
      </div>
    </section>
  );
}