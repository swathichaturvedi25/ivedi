
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturedBuildCard = ({ name, description, logoUrl, projectUrl, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="overflow-hidden bg-card transition-all duration-300 hover:shadow-lg h-full flex flex-col">
        <CardContent className="p-8 flex flex-col h-full">
          {/* Logo Section with Fixed Height Container */}
          <div className="mb-6">
            <div className="featured-card-image-container">
              <img
                src={logoUrl}
                alt={`${name} logo`}
              />
            </div>
          </div>

          {/* Header with Title and Badge */}
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-2xl md:text-3xl font-bold" style={{ letterSpacing: '-0.02em' }}>
              {name}
            </h3>
            <Badge className="bg-primary text-primary-foreground px-3 py-1">
              Live
            </Badge>
          </div>

          {/* Description */}
          <p className="text-base leading-relaxed mb-6 flex-grow">
            {description}
          </p>

          {/* CTA Button */}
          <div className="mt-auto">
            <Button
              size="lg"
              asChild
              className="w-full transition-all duration-200 active:scale-[0.98]"
            >
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Visit {name}
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeaturedBuildCard;
