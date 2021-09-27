import { GetStaticProps } from 'next';
import Link from 'next/link';

export interface Photo {
  alubum: string;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

type Photos = {
  photos: Array<Photo>;
};

export default function index({ photos }: Photos) {
  return (
    <div className="mx-auto container p-10">
      <h1 className="text-5xl text-green-100 text-center sticky top-0 bg-gray-600 p-7">Photos一覧</h1>
      <ul className="leading-4 flex flex-wrap justify-between">
        {photos.map((photo) => {
          return (
            <li key={photo.id} className="my-5 mx-2 w-1/4 p-5 bg-white rounded-md hover:bg-gray-200">
              <img src={photo.url} />
              <Link href={`/photos/${photo.id}`}>
                <a className="text-xl">{photo.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const photos = await res.json();
  return { props: { photos } };
};
