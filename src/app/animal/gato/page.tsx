'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function GatoPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/nossos-animais?especie=gato');
  }, [router]);

  return null;
}
