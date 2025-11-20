'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HamsterPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/nossos-animais?especie=hamster');
  }, [router]);

  return null;
}
