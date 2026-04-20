
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import SkillBadge from '@/components/SkillBadge.jsx';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, highlights, technologies, caseStudyUrl, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card border-border/50">
        {image && (
          <div className="w-full h-48 overflow-hidden bg-muted">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-semibold leading-tight">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow space-y-6">
          {highlights && highlights.length > 0 && (
            <ul className="space-y-3">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          )}
          
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {technologies.map((tech, index) => (
                <SkillBadge key={index} skill={tech} variant="secondary" />
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-6 mt-auto border-t border-border/50">
          {caseStudyUrl && (
            <Button asChild className="w-full transition-all duration-200 active:scale-[0.98] group">
              <a href={caseStudyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                View Full Case Study
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
