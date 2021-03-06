import React from 'react';
import Head from 'next/head';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Homepage</title>
    </Head>

    <h1>Initial Structure</h1>
  </Container>
);

export default Home;
