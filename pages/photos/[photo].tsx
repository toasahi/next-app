import { GetStaticPaths, GetStaticProps } from 'next';

export type Photo = {
  alubum: string;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export default function Photo(photo: Photo) {
  return (
    <div className="mx-auto container p-10">
      <h1 className="text-5xl text-blue-400">Photos(投稿){photo.id}</h1>
      <h2 className="text-3xl mt-5 text-gray-600">{photo.title}</h2>
      <img src={photo.url} />
      <p className="text-xl mt-2 text-gray-500">{photo.thumbnailUrl}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.photo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();
  if (!Object.keys(photo).length) {
    return {
      notFound: true,
    };
  }
  return { props: photo };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const photos = await res.json();
  const paths = photos.map((photo) => ({
    params: { photo: `${photo.id}` },
  }));
  return {
    paths,
    fallback: false,
  };
};
