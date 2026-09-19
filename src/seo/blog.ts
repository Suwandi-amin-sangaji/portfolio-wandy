export const blogJsonld = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Suwandi Amin Sangaji Blog",
    "url": "https://portfolio-wandy.vercel.app/blog",
    "description": "A blog about web development, technology, and personal projects.",
    "author": {
      "@type": "Person",
      "name": "Suwandi Amin Sangaji",
      "url": "https://portfolio-wandy.vercel.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Suwandi Amin Sangaji",
      "url": "https://portfolio-wandy.vercel.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://portfolio-wandy.vercel.app/images/logo.png"
      }
    },
    "blogPost": [
      {
        "@type": "BlogPosting",
        "headline": "First Blog Post",
        "image": "https://portfolio-wandy.vercel.app/images/blog1.jpg",
        "url": "https://portfolio-wandy.vercel.app/blog/first-post",
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01",
        "author": {
          "@type": "Person",
          "name": "Suwandi Amin sangaji"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Suwandi Amin Sangaji"
        },
        "description": "This is the description of the first blog post."
      },
      {
        "@type": "BlogPosting",
        "headline": "Second Blog Post",
        "image": "https://portfolio-wandy.vercel.app/images/blog2.jpg",
        "url": "https://portfolio-wandy.vercel.app/blog/second-post",
        "datePublished": "2024-02-01",
        "dateModified": "2024-02-01",
        "author": {
          "@type": "Person",
          "name": "Suwandi Amin sangaji"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Suwandi Amin Sangaji"
        },
        "description": "This is the description of the second blog post."
      }
    ]
  };
}