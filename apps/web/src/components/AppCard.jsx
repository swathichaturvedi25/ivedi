import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const AppCard = ({ name, description, features, downloadUrl, demoUrl, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col bg-card transition-all duration-300 hover:shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-4 mb-2">
            {icon ? (
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
            )}
            <CardTitle className="text-2xl font-semibold">{name}</CardTitle>
          </div>
          <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Key features:</p>
            <ul className="space-y-1.5">
              {features.map((feature, index) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex gap-3 mt-auto">
          {downloadUrl && (
            <Button size="sm" asChild className="transition-all duration-200 active:scale-[0.98]">
              <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download
              </a>
            </Button>
          )}
          {demoUrl && (
            <Button variant="outline" size="sm" asChild className="transition-all duration-200 active:scale-[0.98]">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Try demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default AppCard;