import React from 'react';
import Layout from '@theme/Layout';
import '../css/custom.css';
import Hero from '../components/HomepageFeatures/hero';
import BlogSEO from '../components/SEO/BlogSEO';

export default function Home() {
  return (
    <Layout>
      <BlogSEO />
      <Hero />
    </Layout>
  );
}
