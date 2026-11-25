const TELEFONE_WHATSAPP = "5579988290540";

export const INSTAGRAM_URL = "https://instagram.com/Milly_Fontes"; // Substitua pelo @ dela

export function gerarLinkWhatsApp(
  mensagem = "Olá Tia Milly! Vim pelo site e gostaria de solicitar um orçamento de pintura facial."
) {
  return `https://wa.me/${TELEFONE_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}