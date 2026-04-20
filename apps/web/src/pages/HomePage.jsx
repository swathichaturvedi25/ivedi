
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Swathi Chaturvedi - Product & Strategy</title>
        <meta name="description" content="Portfolio of Swathi Chaturvedi, a passionate software developer specializing in full-stack development, UI/UX design, and performance optimization." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1587637721784-024d2b51e1dd)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85"></div>
            </div>

            <div className="container-custom relative z-10 py-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl"
              >
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Namasthe! I'm Swathi Chaturvedi
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  I'm a Product Manager who enjoys solving messy, real-world problems and turning them into structured, scalable solutions. I've built systems that improve how people work, decide, and operate. I'm especially interested in products that combine data, behaviour, and usability.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild className="transition-all duration-200 active:scale-[0.98]">
                    <Link to="/portfolio" className="flex items-center gap-2">
                      View my work
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="transition-all duration-200 active:scale-[0.98]">
                    <Link to="/contact">Get in touch</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-20">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to start a project?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  I'm always open to discussing new opportunities and collaborations. Let's create something amazing together.
                </p>
                <Button size="lg" asChild className="transition-all duration-200 active:scale-[0.98]">
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact me
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
