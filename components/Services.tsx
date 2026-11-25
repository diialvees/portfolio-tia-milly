import { PartyPopper, Ghost, Store } from 'lucide-react';
// Quando reativar Pintura Gestacional, adicione "Baby" no import acima

export default function Services() {
  const servicos = [
    {
      icone: <PartyPopper size={44} className="text-[#2B8BB0] mb-4" />,
      titulo: "Festas Infantis",
      descricao: "Pinturas divertidas de super-heróis, princesas e animais com tintas seguras e laváveis.",
      estiloCard: "bg-[#E6F6FC] border-[#7ACBE8]"
    },
    {
      icone: <Ghost size={44} className="text-[#E83E76] mb-4" />,
      titulo: "Halloween e Temáticas",
      descricao: "Maquiagem artística de terror, caveiras mexicanas e personagens para festas à fantasia.",
      estiloCard: "bg-[#FCE8F0] border-[#F49AC1]"
    },
    /* Temporariamente desativado:
    {
      icone: <Baby size={44} className="text-[#B58900] mb-4" />,
      titulo: "Pintura Gestacional",
      descricao: "Arte delicada e hipoalergênica na barriga das futuras mamães para ensaios fotográficos.",
      estiloCard: "bg-[#FFF8D6] border-[#FCE373]"
    },
    */
    {
      icone: <Store size={44} className="text-[#5E3A8C] mb-4" />,
      titulo: "Espaço Kids e Comércios",
      descricao: "Atendimento especial para o espaço kids do seu comércio, trazendo um momento divertido e colorido para as crianças.",
      estiloCard: "bg-[#F3EBFC] border-[#C4A6E8]"
    }
  ];

  return (
    <section id="servicos" className="py-20 px-8 bg-white border-y border-amber-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#5E3A8C]">
            Meus <span className="text-[#E83E76]">Serviços</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Pacotes personalizados com higiene, segurança e muita alegria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className={`${servico.estiloCard} p-6 rounded-2xl border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center`}
            >
              {servico.icone}
              <h3 className="text-xl font-bold text-[#5E3A8C] mb-3">{servico.titulo}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{servico.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}