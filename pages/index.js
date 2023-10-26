import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Skills from '../components/Skills';

export default function Home() {
  const jsonLdData = `
    {
      "@context": "http://schema.org",
      "@type": "Person",
      "name": "Thierry Jones",
      "logo": "https://www.thierryjones.ca/Logo.png",
      "url": "https://www.thierryjones.ca",
      "sameAs": [
        "https://www.linkedin.com/in/thierry-jones-5106a6172/",
        "https://github.com/ThierryJones21"
      ]
    }
  `;

  return (
    <div>
      <Head>
        <title>Thierry Jones</title>
        <link rel="icon" href="/Logo.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdData }} />
      </Head>
      <Main />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}
