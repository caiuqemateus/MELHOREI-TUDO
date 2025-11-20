'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CachorroPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/nossos-animais?especie=cachorro');
  }, [router]);

  return null;
}
