import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
const products = [{ name: 'bag' }, { name: 'shoes' }, { name: 'socks' }];
export default function Home() {
  return (
    <div className="container mx-auto px-5 mt-5">
      <h1 className="text-5xl text-center">Hello Next.js</h1>
      <ul className="flex justify-between mt-5">
        {products.map((product) => {
          return (
            <li key={product.name}>
              <Link href={`/products/${product.name}`}>
                <a className="text-3xl">{product.name}</a>
              </Link>
            </li>
          );
        })}
        <li>
          <Link href="/about">
            <a className="text-3xl">About</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
