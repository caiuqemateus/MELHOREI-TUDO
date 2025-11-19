'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface Testimonial {
  name: string;
  pet: string;
  petImage: string;
  ownerImage: string;
  location: string;
  date: string;
  text: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Maria Silva",
    pet: "Luna",
    petImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    location: "São Paulo, SP",
    date: "Adotado em Janeiro 2024",
    text: "Adotar a Luna mudou completamente minha vida! Ela trouxe alegria, amor e companheirismo para nosso lar. Cada dia ao lado dela é uma aventura incrível.",
    quote: "A Luna não é apenas minha gata, ela é minha família. Gratidão eterna ao Novo Amigo!",
  },
  {
    name: "João Pedro Santos",
    pet: "Thor",
    petImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    location: "Rio de Janeiro, RJ",
    date: "Adotado em Março 2024",
    text: "Thor é o melhor amigo que eu poderia ter. Ele me ensinou sobre amor incondicional e lealdade. Nossa conexão é indescritível!",
    quote: "Adotar foi a melhor decisão da minha vida. Thor trouxe luz aos meus dias!",
  },
  {
    name: "Ana Costa",
    pet: "Mel",
    petImage: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    location: "Belo Horizonte, MG",
    date: "Adotado em Fevereiro 2024",
    text: "Mel trouxe paz e companheirismo para minha vida. Ela é carinhosa, brincalhona e me faz sorrir todos os dias. A adoção responsável realmente transforma vidas!",
    quote: "Cada ronronar da Mel é um lembrete de que o amor é puro e verdadeiro!",
  },
  {
    name: "Carlos Mendes",
    pet: "Bolinha",
    petImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    location: "Curitiba, PR",
    date: "Adotado em Abril 2024",
    text: "Bolinha chegou na minha vida em um momento difícil. Seu amor e energia positiva me ajudaram a superar momentos complicados. É incrível como um animal pode mudar tudo!",
    quote: "Bolinha me ensinou que alegria está nas pequenas coisas!",
  },
  {
    name: "Juliana Oliveira",
    pet: "Pipoca",
    petImage: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    location: "Porto Alegre, RS",
    date: "Adotado em Maio 2024",
    text: "Pipoca é a gatinha mais fofa que já conheci. Ela me acompanha em todos os momentos e deixa minha casa muito mais aconchegante. Adotar foi um dos melhores presentes que já me dei!",
    quote: "Minha vida era boa, mas com a Pipoca ficou perfeita!",
  },
  {
    name: "Roberto Almeida",
    pet: "Rex",
    petImage: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    location: "Brasília, DF",
    date: "Adotado em Junho 2024",
    text: "Rex é um pastor alemão incrível! Ele é protetor, inteligente e extremamente leal. Minha família toda ama ele. Foi a melhor escolha que fizemos!",
    quote: "Rex não é só um cão, é nosso guardião e melhor amigo!",
  },
  {
    name: "Fernanda Lima",
    pet: "Nina",
    petImage: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    location: "Recife, PE",
    date: "Adotado em Julho 2024",
    text: "Nina era uma gatinha abandonada que encontrei através do site. Hoje ela é a rainha da casa! É carinhosa, esperta e me faz rir todos os dias.",
    quote: "Nina me escolheu tanto quanto eu a escolhi. Foi amor à primeira vista!",
  },
  {
    name: "Paulo Henrique",
    pet: "Beethoven",
    petImage: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    location: "Salvador, BA",
    date: "Adotado em Agosto 2024",
    text: "Beethoven é um São Bernardo gigante e extremamente gentil. Apesar do tamanho, é um amor de cachorro. Meus filhos adoram brincar com ele!",
    quote: "Amor não tem tamanho, e Beethoven prova isso todos os dias!",
  },
  {
    name: "Camila Rodrigues",
    pet: "Pretinha",
    petImage: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop",
    location: "Fortaleza, CE",
    date: "Adotado em Setembro 2024",
    text: "Pretinha é uma gata preta linda que sofria preconceito no abrigo. Hoje ela é a estrela da minha casa e prova que gatos pretos trazem é muita sorte e amor!",
    quote: "Pretinha é a prova de que o amor não vê cores!",
  },
  {
    name: "Lucas Ferreira",
    pet: "Pandora",
    petImage: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop",
    location: "Manaus, AM",
    date: "Adotado em Outubro 2024",
    text: "Pandora é uma husky siberiana cheia de energia. Ela adora correr e brincar. Desde que ela chegou, minha rotina ficou mais ativa e saudável!",
    quote: "Pandora me trouxe aventura e motivação para viver intensamente!",
  },
  {
    name: "Mariana Souza",
    pet: "Fofinho",
    petImage: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop",
    location: "Goiânia, GO",
    date: "Adotado em Novembro 2023",
    text: "Fofinho é um gatinho laranja super carinhoso. Ele sempre está do meu lado, seja para trabalhar ou assistir TV. Sua presença é terapêutica!",
    quote: "Fofinho é meu companheiro de todas as horas!",
  },
  {
    name: "André Barbosa",
    pet: "Amora",
    petImage: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop",
    location: "Campinas, SP",
    date: "Adotado em Dezembro 2023",
    text: "Amora é uma pitbull super amorosa que desmistifica todos os preconceitos da raça. Ela é dócil, brincalhona e adora crianças!",
    quote: "Amora provou que amor e educação são tudo que um cachorro precisa!",
  },
  {
    name: "Beatriz Martins",
    pet: "Simba",
    petImage: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop",
    location: "Natal, RN",
    date: "Adotado em Janeiro 2024",
    text: "Simba é um gato laranja majestoso! Ele realmente se comporta como um rei. É independente mas super carinhoso quando quer atenção.",
    quote: "Simba me ensinou que respeito e amor andam juntos!",
  },
  {
    name: "Ricardo Santos",
    pet: "Bidu",
    petImage: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    location: "Florianópolis, SC",
    date: "Adotado em Fevereiro 2024",
    text: "Bidu é um vira-lata caramelo cheio de personalidade. Ele é engraçado, inteligente e extremamente fiel. Melhor parceiro para todas as aventuras!",
    quote: "Bidu é pura alegria em forma de cachorro!",
  },
  {
    name: "Tatiana Campos",
    pet: "Mia",
    petImage: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    location: "Vitória, ES",
    date: "Adotado em Março 2024",
    text: "Mia é uma gatinha siamesa linda e muito falante. Ela me acorda todos os dias com seus miados melodiosos. É impossível não amar!",
    quote: "Mia encheu minha casa de sons e amor!",
  },
  {
    name: "Gustavo Rocha",
    pet: "Apolo",
    petImage: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop",
    location: "João Pessoa, PB",
    date: "Adotado em Abril 2024",
    text: "Apolo é um golden retriever maravilhoso. Ele é gentil com todos e adora nadar. Levá-lo para a praia é sempre uma festa!",
    quote: "Apolo é puro amor em forma de cachorro dourado!",
  },
  {
    name: "Patrícia Nunes",
    pet: "Garfield",
    petImage: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop",
    location: "Maceió, AL",
    date: "Adotado em Maio 2024",
    text: "Garfield é um gato persa laranja que adora comer e dormir, exatamente como o desenho! Ele é preguiçoso mas extremamente carinhoso.",
    quote: "Garfield me ensinou a aproveitar os momentos de descanso!",
  },
  {
    name: "Diego Alves",
    pet: "Lola",
    petImage: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop",
    location: "São Luís, MA",
    date: "Adotado em Junho 2024",
    text: "Lola é uma beagle cheia de energia. Ela adora farejar tudo e é super curiosa. Nossas caminhadas nunca são monótonas!",
    quote: "Lola transformou minha rotina sedentária em pura aventura!",
  },
  {
    name: "Renata Costa",
    pet: "Frida",
    petImage: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop",
    location: "Teresina, PI",
    date: "Adotado em Julho 2024",
    text: "Frida é uma gatinha tricolor linda e muito independente. Ela me ensinou sobre respeito ao espaço e momentos certos de carinho.",
    quote: "Frida é arte em forma de gata!",
  },
  {
    name: "Marcos Paulo",
    pet: "Scooby",
    petImage: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop",
    location: "Cuiabá, MT",
    date: "Adotado em Agosto 2024",
    text: "Scooby é um dogue alemão gigante que se acha um cachorro de colo. Ele é medroso como o personagem mas incrivelmente amoroso!",
    quote: "Scooby provou que tamanho não importa quando se trata de amor!",
  },
  {
    name: "Vanessa Silva",
    pet: "Chiquinha",
    petImage: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&h=150&fit=crop",
    location: "Palmas, TO",
    date: "Adotado em Setembro 2024",
    text: "Chiquinha é uma gata malhada super arteira. Ela adora escalar tudo e me surpreende todos os dias com suas travessuras!",
    quote: "Chiquinha trouxe diversão e imprevisibilidade para minha vida!",
  },
  {
    name: "Fernando Dias",
    pet: "Duke",
    petImage: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=150&h=150&fit=crop",
    location: "Campo Grande, MS",
    date: "Adotado em Outubro 2024",
    text: "Duke é um bulldog inglês super tranquilo. Ele adora tirar sonecas e é o melhor companheiro para maratonas de séries!",
    quote: "Duke me ensinou que relaxar também é importante!",
  },
  {
    name: "Aline Teixeira",
    pet: "Kira",
    petImage: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5b8?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop",
    location: "Aracaju, SE",
    date: "Adotado em Novembro 2024",
    text: "Kira é uma akita inu elegante e leal. Ela é calma, observadora e extremamente protetora. Nossa conexão é profunda e verdadeira.",
    quote: "Kira é sabedoria e lealdade em forma de cachorro!",
  },
  {
    name: "Rodrigo Pires",
    pet: "Mingau",
    petImage: "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop",
    location: "Boa Vista, RR",
    date: "Adotado em Dezembro 2024",
    text: "Mingau é um gato branco de olhos azuis hipnotizantes. Ele é calmo, elegante e adora ser admirado. É como ter uma obra de arte viva em casa!",
    quote: "Mingau é beleza e serenidade puras!",
  },
  {
    name: "Isabela Moraes",
    pet: "Toby",
    petImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=150&h=150&fit=crop",
    location: "Macapá, AP",
    date: "Adotado em Janeiro 2025",
    text: "Toby é um labrador chocolate cheio de energia. Ele adora buscar bolinha e nadar. Desde que chegou, minha vida ficou muito mais ativa!",
    quote: "Toby é pura energia positiva e motivação!",
  },
  {
    name: "Vinícius Lopes",
    pet: "Bella",
    petImage: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop",
    location: "Rio Branco, AC",
    date: "Adotado em Fevereiro 2025",
    text: "Bella é uma Yorkshire terrier pequenina e corajosa. Ela tem a personalidade de um cachorro grande e me faz rir todos os dias!",
    quote: "Bella provou que grandeza não tem nada a ver com tamanho!",
  },
  {
    name: "Carla Mendes",
    pet: "Félix",
    petImage: "https://images.unsplash.com/photo-1615789591457-74a63395c990?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    location: "Porto Velho, RO",
    date: "Adotado em Março 2025",
    text: "Félix é um gato preto e branco super brincalhão. Ele adora caçar borboletas no jardim e é extremamente carinhoso com todos.",
    quote: "Félix trouxe alegria e brincadeira para todos os dias!",
  },
  {
    name: "Gabriel Cardoso",
    pet: "Zara",
    petImage: "https://i.postimg.cc/L6zJHTmq/images-(4).jpg",
    ownerImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop",
    location: "Belém, PA",
    date: "Adotado em Abril 2025",
    text: "Zara é uma border collie incrivelmente inteligente. Ela aprende truques rapidamente e adora desafios mentais. É uma alegria treiná-la!",
    quote: "Zara é inteligência e companheirismo em forma de cachorro!",
  },
  {
    name: "Larissa Freitas",
    pet: "Nino",
    petImage: "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    location: "São Carlos, SP",
    date: "Adotado em Maio 2025",
    text: "Nino é um gatinho cinza super elegante e carinhoso. Ele me acompanha enquanto trabalho e sempre sabe quando preciso de um abraço.",
    quote: "Nino é meu terapeuta emocional de quatro patas!",
  },
  {
    name: "Eduardo Campos",
    pet: "Mel e Thor",
    petImage: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=400&fit=crop",
    ownerImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    location: "Ribeirão Preto, SP",
    date: "Adotados em Junho 2025",
    text: "Adotei dois irmãos inseparáveis! Mel e Thor são cachorros vira-latas que brincam o dia todo juntos. Ver a amizade deles é emocionante!",
    quote: "Mel e Thor provaram que família é tudo!",
  },
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000); // 8 segundos para dar tempo de ler
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentTestimonial];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.testimonialsHeader}>
          <div className={styles.testimonialsHeaderContent}>
            <span className={styles.testimonialsLabel}>💙 Histórias Reais</span>
            <h2 className={styles.sectionTitle}>Vidas Transformadas pela Adoção</h2>
            <p className={styles.sectionSubtitle}>
              Conheça histórias emocionantes de pessoas que encontraram amor e companheirismo através da adoção responsável
            </p>
          </div>
        </div>
        
        <div className={styles.testimonialCardModern}>
          <div className={styles.testimonialContent}>
            {/* Imagem do Pet */}
            <div className={styles.testimonialImageSection}>
              <div className={styles.testimonialPetImageWrapper}>
                <Image
                  src={current.petImage}
                  alt={current.pet}
                  width={600}
                  height={400}
                  className={styles.testimonialPetImage}
                />
                <div className={styles.testimonialBadge}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  Adotado com Amor
                </div>
              </div>
            </div>

            {/* Informações e Depoimento */}
            <div className={styles.testimonialTextSection}>
              <div className={styles.testimonialQuote}>
                <svg className={styles.quoteIcon} width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <p className={styles.testimonialQuoteText}>
                  {current.quote}
                </p>
              </div>

              <p className={styles.testimonialStory}>
                {current.text}
              </p>

              <div className={styles.testimonialFooter}>
                <div className={styles.testimonialOwner}>
                  <div className={styles.testimonialOwnerImage}>
                    <Image
                      src={current.ownerImage}
                      alt={current.name}
                      width={60}
                      height={60}
                      className={styles.ownerAvatar}
                    />
                  </div>
                  <div className={styles.testimonialOwnerInfo}>
                    <h4 className={styles.testimonialOwnerName}>
                      {current.name}
                    </h4>
                    <p className={styles.testimonialPetName}>
                      Tutor(a) de <strong>{current.pet}</strong>
                    </p>
                    <div className={styles.testimonialMeta}>
                      <span className={styles.testimonialLocation}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        {current.location}
                      </span>
                      <span className={styles.testimonialDate}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                          <line x1="16" y1="2" x2="16" y2="6"/>
                          <line x1="8" y1="2" x2="8" y2="6"/>
                          <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        {current.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navegação */}
          <div className={styles.testimonialNavigation}>
            <button 
              onClick={prevTestimonial} 
              className={styles.navButtonModern} 
              aria-label="História anterior"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            
            <div className={styles.testimonialIndicators}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`${styles.indicator} ${index === currentTestimonial ? styles.indicatorActive : ''}`}
                  aria-label={`Ver história ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial} 
              className={styles.navButtonModern} 
              aria-label="Próxima história"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>

          {/* Contador de histórias */}
          <div className={styles.testimonialCounter}>
            <span>{currentTestimonial + 1} de {testimonials.length} histórias</span>
          </div>
        </div>
      </div>
    </section>
  );
}
