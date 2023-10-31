import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Skills from '../components/Skills';

export default function Home() {
  const jsonLdData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Thierry Jones",
    "url": "https://www.thierryjones.ca",
    "sameAs": [
      "https://www.linkedin.com/in/thierry-jones-5106a6172/",
      "https://github.com/ThierryJones21"
    ],
    "founder": {
      "@type": "Person",
      "name": "Thierry Jones"
    },
    "logo": "https://www.thierryjones.ca/public/Logo.png" 
  
  };

  return (
    <div>
      <Head>
        <title>Thierry Jones</title>
        <link rel="icon" href="./public/Logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </Head>
      <Main />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}
