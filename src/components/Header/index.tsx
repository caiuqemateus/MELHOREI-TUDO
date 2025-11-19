"use client";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useState } from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import styles from './styles.module.css';

export default function Header() {
  const [query, setQuery] = useState("");
  const auth = useAuth();
  const user = auth?.user;

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* � Logo */}
        <div className={styles.logoSection}>
          <Logo />
        </div>

        {/* 📱 Menu Desktop - Links de Navegação */}
        <nav className={styles.navDesktop}>
          <Link href="/" className={styles.navLink}>
            Início
          </Link>
          <Link href="/sobre" className={styles.navLink}>
            Sobre Nós
          </Link>
          <Link href="/nossos-animais" className={styles.navLink}>
            Adotar
          </Link>
          <Link href="/doacao" className={styles.navLink}>
            Doações
          </Link>
          <Link href="/faleConosco" className={styles.navLink}>
            Contato
          </Link>
        </nav>

        {/* 🔍 Barra de Pesquisa */}
        <div className={styles.searchSection}>
          <div className={styles.search}>
            <div className={styles.searchIcon}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21l-4.35-4.35"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="11"
                  cy="11"
                  r="5.2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </div>
            <input
              className={styles.searchInput}
              placeholder="Buscar animais..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Pesquisar"
            />
          </div>
        </div>

        {/* � Área de Autenticação */}
        <div className={styles.authSection}>
          {user ? (
            <div className={styles.userInfo}>
              <span className={styles.userName}>Olá, {user.nome}</span>
            </div>
          ) : (
            <div className={styles.authButtons}>
              <Link href="/login" className={styles.btnLogin}>
                Entrar
              </Link>
              <Link href="/cadastro" className={styles.btnSignup}>
                Cadastrar
              </Link>
            </div>
          )}
        </div>

        {/* ☰ Menu Mobile (Hamburger) */}
        <div className={styles.mobileMenuButton}>
          <Menu />
        </div>
      </div>
    </header>
  );
}
