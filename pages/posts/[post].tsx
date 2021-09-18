import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";

type Post = {
  userId: string;
  id: number;
  title: string;
  body: string;
}

export default function post( post :Post) {
  console.log(post)
  return (
    <div>
      <h1>POST(投稿){post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

// export async function getServerSideProps({ params }) {
//   const id = params.post;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const post = await res.json();
//   console.log(post);
//   return { props: post };
// }

// export const getServerSideProps: GetServerSideProps = ( async ({params})=>{
//   const id = params.post;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const post = await res.json();
//   if (!Object.keys(post).length) {
//     return {
//       notFound: true,
//     };
//   }
//   return{props:post}
// }) 

export const getStaticProps: GetStaticProps = async ({params})=>{
  const id = params.post;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  if (!Object.keys(post).length) {
    return {
      notFound: true,
    };
  }
  return{props:post}
}

export const getStaticPaths: GetStaticPaths = async()=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  // const paths = posts.map((post) => `/posts/${post.id}`);
  const paths = posts.map((post) => ({
    params: { post: `${post.id}` },
  }))
  return{
    paths,
    fallback:false,
  }
}