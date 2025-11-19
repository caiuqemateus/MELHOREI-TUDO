'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyAdoptSection from "@/components/WhyAdoptSection";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const categories = [
    { 
      name: "Cachorros", 
      icon: "🐕", 
      link: "/nossos-animais?especie=cachorro", 
      color: "#FFD93D",
      count: 45,
      description: "Leais, carinhosos e sempre prontos para uma aventura" 
    },
    { 
      name: "Gatos", 
      icon: "🐈", 
      link: "/nossos-animais?especie=gato", 
      color: "#FF8FB1",
      count: 38,
      description: "Independentes, elegantes e cheios de personalidade" 
    },
    { 
      name: "Pássaros", 
      icon: "🦜", 
      link: "/nossos-animais?especie=passaro", 
      color: "#6BCF7F",
      count: 12,
      description: "Coloridos, alegres e enchem a casa de vida" 
    },
    { 
      name: "Coelhos", 
      icon: "🐰", 
      link: "/nossos-animais?especie=coelho", 
      color: "#B4A7D6",
      count: 15,
      description: "Fofos, sociáveis e perfeitos para toda a família" 
    },
    { 
      name: "Hamsters", 
      icon: "🐹", 
      link: "/nossos-animais?especie=hamster", 
      color: "#FFA07A",
      count: 8,
      description: "Pequenos, adoráveis e fáceis de cuidar" 
    },
    { 
      name: "Fazenda", 
      icon: "🐴", 
      link: "/nossos-animais?especie=fazendeiros", 
      color: "#98D8C8",
      count: 6,
      description: "Animais de grande porte em busca de espaço e amor" 
    },
  ];

  return (
    <>
      <Header />
      
      <main className={styles.mainContainer}>
        {/* 🌟 SEÇÃO HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Adote amor.<br />Encontre seu novo melhor amigo.</h1>
              <p className={styles.heroSubtitle}>Transforme vidas através da adoção responsável</p>
              <div className={styles.heroButtons}>
                <Link href="/nossos-animais" className={styles.btnPrimary}>
                  Ver Animais
                </Link>
                <Link href="/doacao" className={styles.btnSecondary}>
                  Quero Doar
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 🐾 SEÇÃO CATEGORIAS */}
        <section className={styles.categories}>
          <div className={styles.container}>
            <div className={styles.categoriesHeader}>
              <div className={styles.categoriesHeaderContent}>
                <span className={styles.categoriesLabel}>🐾 Nossos Pets</span>
                <h2 className={styles.sectionTitle}>Escolha uma Categoria</h2>
                <p className={styles.sectionSubtitle}>
                  Temos mais de 120 animais esperando por um lar cheio de amor. 
                  Encontre o pet perfeito para você e sua família!
                </p>
              </div>
              <div className={styles.categoriesStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>124</div>
                  <div className={styles.statLabel}>Animais disponíveis</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>890+</div>
                  <div className={styles.statLabel}>Adoções realizadas</div>
                </div>
              </div>
            </div>
            
            <div className={styles.categoryGrid}>
              {categories.map((category, index) => (
                <Link href={category.link} key={index} className={styles.categoryCard}>
                  <div className={styles.categoryCardInner}>
                    <div className={styles.categoryIcon} style={{ background: category.color }}>
                      <span>{category.icon}</span>
                    </div>
                    <div className={styles.categoryContent}>
                      <h3 className={styles.categoryName}>{category.name}</h3>
                      <p className={styles.categoryDescription}>{category.description}</p>
                      <div className={styles.categoryFooter}>
                        <span className={styles.categoryCount}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                          </svg>
                          {category.count} disponíveis
                        </span>
                        <span className={styles.categoryArrow}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                            <polyline points="12 5 19 12 12 19"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className={styles.categoryBadge}>Disponível</div>
                  </div>
                </Link>
              ))}
            </div>

            <div className={styles.categoriesCta}>
              <p className={styles.categoriesCtaText}>
                Não encontrou o que procura? 
              </p>
              <Link href="/nossos-animais" className={styles.categoriesCtaButton}>
                Ver Todos os Animais
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* 💚 SEÇÃO HISTÓRIAS DE ADOÇÃO */}
        <TestimonialsSection />

        {/* 🌈 SEÇÃO POR QUE ADOTAR */}
        <WhyAdoptSection />
      </main>

      {/* Botão WhatsApp Flutuante */}
      <a
        href="https://wa.me/5516000000000"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappFloat}
        aria-label="Contato via WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      <Footer />
    </>
  );
}
