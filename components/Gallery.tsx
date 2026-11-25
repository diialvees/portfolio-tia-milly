import Image from 'next/image';

export default function Gallery() {
  const fotos = [
    { src: "/galeria/trabalho1.jpeg", alt: "Pintura facial infantil de borboleta" },
    { src: "/galeria/trabalho2.jpeg", alt: "Pintura facial de bola" },
    { src: "/galeria/trabalho3.jpeg", alt: "Maquiagem artística" },
    { src: "/galeria/trabalho4.jpeg", alt: "Pintura facial de borboleta" },
    { src: "/galeria/trabalho5.jpeg", alt: "Pintura facial colorida" },
    { src: "/galeria/trabalho6.jpeg", alt: "Pintura de tigre" },
  ];

  return (
    <section id="galeria" className="py-20 px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Meus <span className="text-pink-500">Trabalhos</span>
        </h2>
        <p className="text-white-600 mt-4 text-lg">
          Um pouco da magia e cor que levo para cada evento.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {fotos.map((foto, index) => (
          <div 
            key={index} 
            className="relative h-48 md:h-72 rounded-xl overflow-hidden shadow-md group cursor-pointer"
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              loading="eager"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}