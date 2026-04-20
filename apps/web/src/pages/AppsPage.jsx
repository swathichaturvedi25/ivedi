
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeaturedBuildCard from '@/components/FeaturedBuildCard.jsx';
import { motion } from 'framer-motion';

const AppsPage = () => {
  const featuredBuilds = [
    {
      name: 'AVAHSA',
      description: 'Avahsa is a mobile-first practice tool built for Indian classical dancers to streamline their learning and rehearsal process. It combines guided practice, theory revision, and video-based learning tools into one seamless experience. From looping and slowing down choreography to revising hasta bhedas and tracking daily practice, Avahsa acts as a structured "abhyasa partner" — helping dancers practice smarter, not just longer.',
      logoUrl: 'https://horizons-cdn.hostinger.com/1f0d995d-e64d-4702-9025-28b90adaa813/9a782c43d5ed27ab9e335ef047559947.png',
      projectUrl: 'https://avahsa.ivedi.in/'
    },
    {
      name: 'Money Leak',
      description: 'Money Leak is your personal spending radar. It highlights where your money is quietly slipping away — subscriptions you forgot, apps you don\'t use, and expenses that add up over time. With a simple, intuitive interface, you can identify monthly \'leaks\' instantly, cut unnecessary subscriptions with one tap, see real-time savings grow, and turn small cuts into meaningful financial wins. Because sometimes, financial control isn\'t about earning more — it\'s about stopping the leaks.',
      logoUrl: 'https://horizons-cdn.hostinger.com/1f0d995d-e64d-4702-9025-28b90adaa813/2189c0c0bc44d1647b58fc740893d8ff.png',
      projectUrl: 'https://money-leak.ivedi.in/'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Featured Builds - Swathi Chaturvedi</title>
        <meta name="description" content="Featured builds and applications including AVAHSA and Money Leak - tools designed to solve real problems with thoughtful design." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
                  Featured Builds
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Showcasing selected projects that combine thoughtful design with practical functionality
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {featuredBuilds.map((build, index) => (
                  <FeaturedBuildCard
                    key={build.name}
                    name={build.name}
                    description={build.description}
                    logoUrl={build.logoUrl}
                    projectUrl={build.projectUrl}
                    index={index}
                  />
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

export default AppsPage;
