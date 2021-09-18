import { useRouter } from 'next/dist/client/router';

export default function Weather() {
  const router = useRouter();
  console.log(router.query);
  return <h1>{router.query.weather}のページです</h1>;
}
