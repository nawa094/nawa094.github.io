import React from 'react';
import Head from '@docusaurus/Head';

interface BlogSEOProps {
  title?: string;
  description?: string;
  author?: string;
  publishDate?: string;
  tags?: string[];
  image?: string;
  url?: string;
}

const BlogSEO: React.FC<BlogSEOProps> = ({
  title = 'Nawa Mumbwe - Software Engineer Blog',
  description = 'Insights, tutorials, and stories about coding, technology, and software craftsmanship from a South African software engineer.',
  author = 'Nawa Mumbwe',
  publishDate,
  tags = [],
  image = '/img/social_card_preview.png',
  url = 'https://nawa094.github.io',
}) => {
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={tags.join(', ')} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Nawa Mumbwe Blog" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@nawa094" />

      {/* Article specific */}
      {publishDate && (
        <>
          <meta property="article:published_time" content={publishDate} />
          <meta property="article:author" content={author} />
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: title,
          description: description,
          author: {
            '@type': 'Person',
            name: author,
            url: 'https://www.linkedin.com/in/nawam/',
          },
          datePublished: publishDate,
          image: fullImageUrl,
          url: url,
        })}
      </script>
    </Head>
  );
};

export default BlogSEO;
