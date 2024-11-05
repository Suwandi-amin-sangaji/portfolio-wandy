export const blogJsonld = () => {
    return {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Suwandi Amin Sangaji Blog",
        "url": "https://www.wandy.jedev.tech/blog",
        "description": "A blog about web development, technology, and personal projects.",
        "author": {
          "@type": "Person",
          "name": "Suwandi Amin Sangaji",
          "url": "https://www.wandy.jedev.tech"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GR Digital",
          "url": "https://www.wandy.jedev.tech",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.wandy.jedev.tech/images/logo.png"
          }
        },
        "blogPost": [
          {
            "@type": "BlogPosting",
            "headline": "First Blog Post",
            "image": "https://www.wandy.jedev.tech/images/blog1.jpg",  
            "url": "https://www.wandy.jedev.tech/blog/first-post",
            "datePublished": "2024-01-01",
            "dateModified": "2024-01-01",
            "author": {
              "@type": "Person",
              "name": "Suwandi Amin sangaji"
            },
            "publisher": {
              "@type": "Organization",
              "name": "GR Digital"
            },
            "description": "This is the description of the first blog post."
          },
          {
            "@type": "BlogPosting",
            "headline": "Second Blog Post",
            "image": "https://www.wandy.jedev.tech/images/blog2.jpg", 
            "url": "https://www.wandy.jedev.tech/blog/second-post",
            "datePublished": "2024-02-01",
            "dateModified": "2024-02-01",
            "author": {
              "@type": "Person",
              "name": "Suwandi Amin sangaji"
            },
            "publisher": {
              "@type": "Organization",
              "name": "GR Digital"
            },
            "description": "This is the description of the second blog post."
          }
        ]
    };
}