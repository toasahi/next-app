import { GetStaticProps } from 'next';
import Link from 'next/link';

export interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}

type Posts = {
  posts: Array<Post>;
};

export default function index({ posts }: Posts) {
  return (
    <div className="mx-auto container p-10">
      <h1 className="text-5xl text-blue-400">POST一覧</h1>
      <ul className="leading-4">
        {posts.map((post) => {
          return (
            <li key={post.id} className="my-5">
              <Link href={`/posts/${post.id}`}>
                <a className="text-xl text-gray-500 hover:text-gray-700">{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await res.json();
//   return { props: { posts } };
// }

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return { props: { posts } };
};
