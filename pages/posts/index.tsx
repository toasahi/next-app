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
      <h1 className="text-5xl text-green-100">POST一覧</h1>
      <ul className="leading-4">
        {posts.map((post) => {
          return (
            <li key={post.id} className="my-5 border-b-2 pb-2">
              <Link href={`/posts/${post.id}`}>
                <a className="text-xl text-white hover:text-gray-200">{post.title}</a>
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
