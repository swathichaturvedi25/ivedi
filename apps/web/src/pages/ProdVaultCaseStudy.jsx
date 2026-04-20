
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ProdVaultCaseStudy = () => {
  return (
    <>
      <Helmet>
        <title>ProdVault Case Study - Swathi Chaturvedi</title>
        <meta name="description" content="Read the full case study on ProdVault: A Repository for Product Thinking." />
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
                    src="https://horizons-cdn.hostinger.com/1f0d995d-e64d-4702-9025-28b90adaa813/4af717c0ba5b9460b557cf7a0cd331cb.png" 
                    alt="ProdVault Logo" 
                    className="w-auto h-full max-h-32 object-contain"
                  />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground" style={{ letterSpacing: '-0.02em' }}>
                  ProdVault
                </h1>
                <p className="text-2xl text-primary font-medium">
                  A Repository for Product Thinking
                </p>
                <p className="mt-4 text-xl text-muted-foreground font-medium">
                  Store, structure, and showcase product thinking.
                </p>
              </motion.header>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="case-study-content bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border/40"
              >
                <h2>The Problem Space</h2>
                <p>
                  Product managers and strategists constantly generate high-value artifacts—PRDs, user research summaries, strategic roadmaps, and decision logs. Yet, this wealth of intellectual property often becomes scattered across various tools, buried in fragmented Google Docs, Jira tickets, or lost in Slack threads. When it comes time to review past decisions or build a portfolio, extracting the narrative requires starting from scratch.
                </p>

                <h2>The Solution: Store, Structure, and Showcase</h2>
                <p>
                  ProdVault was created as a dedicated, centralized workspace specifically designed for the lifecycle of product artifacts. It bridges the gap between daily execution and long-term knowledge management.
                </p>
                <ul>
                  <li><strong>Centralized workspace:</strong> A single source of truth for all product documentation, ensuring that PRDs, competitive analyses, and research findings are linked and accessible.</li>
                  <li><strong>Structured documentation:</strong> Purpose-built templates that encourage consistent formatting and logic, making it easier to parse complex decisions months after they were made.</li>
                  <li><strong>Portfolio generation:</strong> Seamlessly convert raw project execution data and documents into polished, narrative-driven case studies ready for external presentation.</li>
                  <li><strong>Knowledge retention:</strong> Built an ecosystem where product thinking is not just stored, but organized in a way that compounds its value over time for the entire team.</li>
                </ul>

                <h2>The Impact</h2>
                <p>
                  ProdVault eliminated the friction of retrospective documentation. By capturing product thinking as it happens, strategists could instantly spin up comprehensive case studies and onboard new team members with complete context, effectively turning daily operational work into an evergreen library of product knowledge.
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

export default ProdVaultCaseStudy;
