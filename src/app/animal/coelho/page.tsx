'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CoelhoPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/nossos-animais?especie=coelho');
  }, [router]);

  return null;
}
