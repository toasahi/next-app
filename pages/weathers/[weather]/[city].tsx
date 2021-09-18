import { useRouter } from 'next/router';
export default function City() {
  const router = useRouter();
  const { weather, city } = router.query;
  return (
    <h1>
      {city}の天気は{weather}です
    </h1>
  );
}
