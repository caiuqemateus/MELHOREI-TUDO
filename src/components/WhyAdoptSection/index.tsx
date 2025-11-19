'use client';

import Link from 'next/link';
import styles from './styles.module.css';

export default function WhyAdoptSection() {
  return (
    <section className={styles.whyAdopt}>
      <div className={styles.container}>
        <div className={styles.whyAdoptHeader}>
          <span className={styles.whyAdoptLabel}>💛 Faça a Diferença</span>
          <h2 className={styles.sectionTitle}>Por que adotar um pet?</h2>
          <p className={styles.sectionSubtitle}>
            A adoção é um ato de amor que transforma duas vidas: a sua e a do animal
          </p>
        </div>

        <div className={styles.whyAdoptGrid}>
          <div className={styles.whyAdoptCard}>
            <div className={styles.whyAdoptIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <h3>Amor Incondicional</h3>
            <p>Receba todo dia o carinho e a lealdade que só um pet resgatado pode oferecer</p>
          </div>

          <div className={styles.whyAdoptCard}>
            <div className={styles.whyAdoptIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
            </div>
            <h3>Salve uma Vida</h3>
            <p>Cada adoção é uma vida salva e uma chance de recomeço para um animal</p>
          </div>

          <div className={styles.whyAdoptCard}>
            <div className={styles.whyAdoptIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>Exemplo para Todos</h3>
            <p>Inspire sua família e amigos com um gesto de compaixão e responsabilidade</p>
          </div>

          <div className={styles.whyAdoptCard}>
            <div className={styles.whyAdoptIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Combata o Abandono</h3>
            <p>Adotar é uma escolha consciente contra o comércio ilegal de animais</p>
          </div>

          <div className={styles.whyAdoptCard}>
            <div className={styles.whyAdoptIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3>Pet Preparado</h3>
            <p>Animais vacinados, castrados e com acompanhamento veterinário</p>
          </div>

          <div className={styles.whyAdoptCard}>
            <div className={styles.whyAdoptIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h3>Lar é Tudo</h3>
            <p>Dê a um animal a oportunidade de conhecer o que é ter uma família de verdade</p>
          </div>
        </div>

        <div className={styles.whyAdoptCta}>
          <div className={styles.whyAdoptCtaContent}>
            <h3>Pronto para mudar uma vida?</h3>
            <p>Conheça os animais que estão esperando por você</p>
          </div>
          <Link href="/nossos-animais" className={styles.whyAdoptCtaButton}>
            Ver Animais Disponíveis
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
