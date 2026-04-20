
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const CaseStudyCard = ({ logo, productName, tagline, highlights, caseStudyLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card border-border/50 rounded-2xl">
        <div className="w-full h-48 bg-muted flex items-center justify-center p-6 border-b border-border/50 relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img 
            src={logo} 
            alt={`${productName} logo`}
            className="w-auto h-full max-h-24 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <CardHeader className="pb-4 pt-6">
          <h3 className="text-2xl font-bold leading-tight text-foreground">{productName}</h3>
          {tagline && (
            <p className="text-lg font-medium text-primary mt-1">{tagline}</p>
          )}
        </CardHeader>
        
        <CardContent className="flex-grow space-y-6">
          {highlights && highlights.length > 0 && (
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 opacity-80" />
                  <span className="text-base text-muted-foreground leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        
        <CardFooter className="pt-6 mt-auto border-t border-border/30 bg-muted/20">
          <Button asChild className="w-full transition-all duration-200 active:scale-[0.98] group" size="lg">
            <Link to={caseStudyLink} className="flex items-center justify-center gap-2">
              View Full Case Study
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CaseStudyCard;
