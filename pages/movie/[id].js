import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/router'

const Movie = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <h1>{id}</h1>
  )
}


export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://api.themoviedb.org/3/movie/now_playing/?api_key=cf51a46c6ac26bd4f4c55018fdad298d')
  const movies = await res.json()

  console.log(movies.results)

  // Get the paths we want to pre-render based on posts
  const paths = movies.data.results.map((movie) => ({
    params: { id: movie.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time on server-side.
export const getStaticProps = async ({ params }) => {
  const movie = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}/?api_key=cf51a46c6ac26bd4f4c55018fdad298d`);
  return { props: { movie } };
};

export default Movie;
