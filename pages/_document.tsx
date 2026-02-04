import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import * as React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="google-site-verification" content="BJ_K97Y5ffOXaarlK8J6q2SZ-L7osn8-8G96yPSAXPE" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;900&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/logo.png" />
          <link rel="apple-touch-icon" href="/logo.png" />
          <link rel="manifest" href="/app.webmanifest" />

          <meta property="og:title" content="Om Singh" />
          <meta name="author" content="Om Singh" />
          <meta property="og:locale" content="en_US" />
          <meta
            name="description"
            content="Om Singh | Full-stack Web Developer | Portfolio"
          />
          <meta
            property="og:description"
            content="Om Singh | Full-stack Web Developer | Portfolio"
          />

          <meta property="og:url" content="https://om07.in/" />
          <meta property="og:site_name" content="Om Singh Portfolio" />
          
          {/* Structured Data for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Person",
                    "@id": "https://om07.in/#person",
                    "name": "Om Singh",
                    "alternateName": ["om07", "Om", "Singh"],
                    "description": "Full-stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies. Portfolio showcasing innovative projects and professional development skills.",
                    "jobTitle": "Full-stack Web Developer",
                    "worksFor": {
                      "@type": "Organization",
                      "name": "Freelance Developer"
                    },
                    "url": "https://om07.in/",
                    "sameAs": [
                      "https://github.com/om07",
                      "https://linkedin.com/in/om-singh"
                    ],
                    "knowsAbout": [
                      "React", "Next.js", "Node.js", "JavaScript", "TypeScript",
                      "Full-stack Development", "Web Development", "Frontend Development",
                      "Backend Development", "Portfolio Development", "Modern Web Technologies"
                    ],
                    "hasOccupation": {
                      "@type": "Occupation",
                      "name": "Full-stack Web Developer",
                      "description": "Develops modern web applications using React, Next.js, and Node.js"
                    }
                  },
                  {
                    "@type": "WebSite",
                    "@id": "https://om07.in/#website",
                    "url": "https://om07.in/",
                    "name": "Om Singh Portfolio | Full-stack Web Developer",
                    "alternateName": ["om07 portfolio", "Om Singh developer portfolio", "om portfolio"],
                    "description": "Professional portfolio of Om Singh (om07), showcasing full-stack web development projects, skills in React, Next.js, Node.js, and modern web technologies.",
                    "author": {
                      "@id": "https://om07.in/#person"
                    },
                    "publisher": {
                      "@id": "https://om07.in/#person"
                    },
                    "inLanguage": "en-US",
                    "copyrightHolder": {
                      "@id": "https://om07.in/#person"
                    },
                    "potentialAction": {
                      "@type": "SearchAction",
                      "target": "https://om07.in/?s={search_term_string}",
                      "query-input": "required name=search_term_string"
                    }
                  },
                  {
                    "@type": "ProfilePage",
                    "@id": "https://om07.in/portfolio/#profilepage",
                    "url": "https://om07.in/portfolio",
                    "name": "Om Singh Developer Portfolio",
                    "description": "Professional portfolio showcasing Om Singh's full-stack development projects and technical expertise",
                    "mainEntity": {
                      "@id": "https://om07.in/#person"
                    }
                  },
                  {
                    "@type": "Organization",
                    "@id": "https://om07.in/#organization",
                    "name": "Om Singh Development",
                    "alternateName": "om07 development",
                    "url": "https://om07.in/",
                    "description": "Professional web development services by Om Singh, specializing in full-stack applications",
                    "founder": {
                      "@id": "https://om07.in/#person"
                    },
                    "sameAs": [
                      "https://om07.in/portfolio"
                    ]
                  }
                ]
              })
            }}
          />
          
          <script src="/init-sw.js" defer></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

