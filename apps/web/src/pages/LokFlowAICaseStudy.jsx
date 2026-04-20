
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const LokFlowAICaseStudy = () => {
  return (
    <>
      <Helmet>
        <title>LokFlow AI Case Study - Swathi Chaturvedi</title>
        <meta name="description" content="Read the full case study on LokFlow AI: Smart Crowd Solutions for railway stations." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow bg-background">
          <article className="py-16 md:py-24">
            <div className="container-custom max-w-4xl">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
                  <Link to="/portfolio" className="inline-flex items-center gap-2 text-muted-foreground">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Case Studies
                  </Link>
                </Button>
              </motion.div>

              <motion.header 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-16 text-center"
              >
                <div className="w-full max-w-md mx-auto h-48 bg-muted/30 rounded-2xl flex items-center justify-center p-8 mb-10 border border-border/50 shadow-sm">
                  <img 
                    src="https://horizons-cdn.hostinger.com/1f0d995d-e64d-4702-9025-28b90adaa813/66c1ca6041294c7a8919f34ae9da62b2.png" 
                    alt="LokFlow AI Logo" 
                    className="w-auto h-full max-h-32 object-contain"
                  />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground" style={{ letterSpacing: '-0.02em' }}>
                  LokFlow AI
                </h1>
                <p className="text-2xl text-primary font-medium">
                  Smart Crowd Solutions
                </p>
              </motion.header>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="case-study-content bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border/40"
              >
                <h2>The Challenge</h2>
                <p>
                  Railway stations regularly face unprecedented passenger volumes, leading to bottlenecks, safety hazards, and poor passenger experiences. Traditional crowd management relies heavily on manual observation and reactive measures, which are often too late to prevent severe congestion. The core challenge was to build a system that could predict and manage crowd flow without requiring passengers to actively engage with a digital application.
                </p>

                <h2>Our Approach</h2>
                <p>
                  LokFlow AI was conceptualized as a passive, high-impact intelligence layer. Rather than building a consumer-facing app that passengers might not download or use in a rush, we focused on infrastructural integration.
                </p>
                <ul>
                  <li><strong>Real-time crowd monitoring:</strong> Deployed privacy-preserving spatial sensors to track density across platforms, concourses, and ticketing areas.</li>
                  <li><strong>Predictive analytics:</strong> Leveraged historical data and real-time inputs to forecast passenger surges up to 45 minutes in advance, allowing station staff to deploy resources proactively.</li>
                  <li><strong>Passenger guidance:</strong> Integrated with existing digital displays and physical wayfinding systems to reroute foot traffic away from congested zones.</li>
                  <li><strong>Inclusive design:</strong> Ensured the solution was entirely infrastructural, meaning it required zero smartphone dependency or digital literacy from the end-user.</li>
                </ul>

                <h2>The Outcome</h2>
                <p>
                  By transforming reactive crowd control into proactive crowd management, LokFlow AI significantly reduced platform congestion during peak hours. The predictive analytics engine provided station management with actionable insights, improving both operational efficiency and passenger safety across transit hubs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16 md:mt-24 bg-muted/40 rounded-3xl p-10 md:p-16 text-center border border-border/50"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground" style={{ letterSpacing: '-0.01em' }}>
                  Keen on a deep dive? Let's chat...
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  I'd love to share more about the research, strategic decisions, and technical trade-offs that shaped this product.
                </p>
                <Button asChild size="lg" className="text-base px-8 h-14 rounded-xl transition-all duration-200 active:scale-[0.98]">
                  <Link to="/contact" className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Get in Touch
                  </Link>
                </Button>
              </motion.div>

            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LokFlowAICaseStudy;
