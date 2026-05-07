import { useSearchParams } from 'next/navigation';

export function useCategory() {
  const searchParams = useSearchParams();
  return searchParams.get('category') || 'all';
}