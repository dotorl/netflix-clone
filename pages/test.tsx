import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import requests from '../utils/requests';
import { Movie } from '../typings';
import Row from '../components/Row';

const test = () => {
  const [netflixOriginals, setNetflixOriginals] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    const [netflixOriginals, topRated] = await Promise.all([
      fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
      fetch(requests.fetchTopRated).then((res) => res.json()),
    ]);

    setNetflixOriginals(netflixOriginals.results);
    setTopRated(topRated.results);
  };

  return (
    // <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <div
      className={`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]`}
    >
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <p>sdfasdfasdf</p>
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 ">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          {/* {/* <Row title="Trending Now" movies={trendingNow} /> */}
          <Row title="Top Rated" movies={topRated} />
          {/* <Row title="Action Thrillers" movies={actionMovies} /> */}
          {/* My List */}
          {/* {list.length > 0 && <Row title="My List" movies={list} />} */}
          {/* 
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} /> */}
        </section>
      </main>
      {/* Modal */}
    </div>
  );
};

export default test;
