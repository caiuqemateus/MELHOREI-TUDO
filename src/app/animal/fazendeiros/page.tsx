'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function FazendeirosPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/nossos-animais?especie=fazenda');
  }, [router]);

  return null;
}
