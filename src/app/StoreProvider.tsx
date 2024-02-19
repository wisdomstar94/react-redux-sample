'use client'

// import { initializeCount } from "@/lib/features/counter";
import { AppStore, makeStore } from '@/lib/store';
import { useRef } from 'react'
import { Provider } from 'react-redux';

export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    // storeRef.current.dispatch(initializeCount(0));
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}