'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PassaroPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/nossos-animais?especie=passaro');
  }, [router]);

  return null;
}
