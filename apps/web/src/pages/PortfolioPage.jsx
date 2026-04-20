
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CaseStudyCard from '@/components/CaseStudyCard.jsx';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  const caseStudies = [
    {
      logo: 'https://horizons-cdn.hostinger.com/1f0d995d-e64d-4702-9025-28b90adaa813/66c1ca6041294c7a8919f34ae9da62b2.png',
      productName: 'LokFlow AI',
      tagline: 'Smart Crowd Solutions',
      highlights: [
        'Real-time crowd monitoring and density tracking across railway stations',
        'Predictive analytics to forecast passenger surges and identify bottlenecks',
        'Passenger guidance through digital displays and integrated mobility systems',
        'Inclusive design that doesn\'t require smartphone or digital tool dependency'
      ],
      caseStudyLink: '/case-study/lokflow-ai',
    },
    {
      logo: 'https://horizons-cdn.hostinger.com/1f0d995d-e64d-4702-9025-28b90adaa813/4af717c0ba5b9460b557cf7a0cd331cb.png',
      productName: 'ProdVault',
      tagline: 'A Repository for Product Thinking',
      highlights: [
        'Centralized workspace for product artifacts (PRDs, research, decision logs)',
        'Structured documentation and organization of product work',
        'Convert projects into portfolio-ready case studies',
        'Store, structure, and showcase product thinking'
      ],
      caseStudyLink: '/case-study/prodvault',
    }
  ];

  return (
    <>
      <Helmet>
        <title>Product Strategy Lab - Swathi Chaturvedi</title>
        <meta name="description" content="Explore my product strategy case studies showcasing end-to-end product thinking, market analysis, and cross-functional leadership." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow bg-background">
          <section className="py-20 md:py-28">
            <div className="container-custom max-w-6xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }} 
                className="text-center mb-16 md:mb-24"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-foreground" style={{ letterSpacing: '-0.02em' }}>
                  Case Studies: From Concept to Launch
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Deep dives into how I tackle complex product challenges. Spanning diverse user needs, these case studies showcase strategic thinking, structured execution, and measurable business impact.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                {caseStudies.map((study, index) => (
                  <CaseStudyCard key={index} {...study} />
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;
