'use client';

import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import styles from './styles.module.css';

interface SideBarProps {
  open: boolean;
  onClose: () => void;
}

export default function SideBar({ open, onClose }: SideBarProps) {
  const auth = useAuth();
  const user = auth?.user;
  const logout = auth?.logout;

  return (
    <>
      {open && <div className={styles.backdrop} onClick={onClose} />}

      <aside className={`${styles.sidebar} ${open ? styles.open : ''}`} aria-hidden={!open}>
        <div className={styles.headerBar}>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6l12 12"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <nav className={styles.nav}>
          <ul>
            {!user ? (
              <>
                <li><Link href="/doacao" onClick={onClose}>Doação</Link></li>
                <li><Link href="/nossos-animais" onClick={onClose}>Animais</Link></li>
                <li><Link href="/faleConosco" onClick={onClose}>Fale Conosco</Link></li>
                <li><Link href="/login" onClick={onClose}>Entrar</Link></li>
              </>
            ) : (
              <>
                <li><Link href="/animais-favoritos" onClick={onClose}>Animais Favoritos</Link></li>
                <li><Link href="/doacao" onClick={onClose}>Doação</Link></li>
                <li><Link href="/configuracoes" onClick={onClose}>Configurações</Link></li>
                <li>
                  <button
                    onClick={() => {
                      logout?.();
                      onClose();
                    }}
                    className={styles.logoutBtn}
                  >
                    Sair
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </aside>
    </>
  );
}
