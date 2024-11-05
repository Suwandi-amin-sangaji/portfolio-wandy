export const aboutMejsonld = () => {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Suwandi Amin Sangaji",
        "url": "https://www.galihroswandi.com/about",
        // "image": "https://www.galihroswandi.com/img/me.png",
        "sameAs": [
          "https://instagram.com/galih_roswandi",
          "https://github.com/galihroswandi",
          "https://www.linkedin.com/in/suwandi-amin-sangaji-1762941b2/"
        ],
        "description": "Enthusiastic to continue working in the field of technology, especially websites. Experienced in creating websites that focus on frontend development.",
        "jobTitle": "Fullstack Developer",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Universitas Muhammadiyah Sorong",
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sorong Papua Barat Daya",
          "addressCountry": "ID"
        },
        "knowsAbout": [
          "Software Development",
          "Frontend Development",
          "Backend Development",
          "Web Development",
          "Javascript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "Bootstrap",
          "Figma",
          "GitHub"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "GR Digital",
          "url": "https://www.galihroswandi.com"
        },
        "makesOffer": [
          {
            "@type": "Offer",
            "name": "Website Development Service",
            "description": "Professional website development service focused on creating high-quality, responsive websites tailored to your needs.",
            "priceCurrency": "IDR",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "url": "https://www.galihroswandi.com/services"
          },
          {
            "@type": "Offer",
            "name": "Website Maintenance Service",
            "description": "Professional website maintenance service to ensure your website is always up-to-date and secure.",
            "priceCurrency": "IDR",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "url": "https://www.galihroswandi.com/contacts"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "5"
        }
    }
}