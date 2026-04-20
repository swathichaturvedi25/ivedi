import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success('Message sent successfully');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'swathichaturvedi25@gmail.com',
      href: 'mailto:swathichaturvedi25@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98808 81010',
      href: 'tel:+919880881010',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, KA, India',
      href: null,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact - Swathi Chaturvedi</title>
        <meta name="description" content="Get in touch with Swathi Chaturvedi for project inquiries, collaborations, or just to say hello. I'm always open to new opportunities." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20">
            <div className="container-custom max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
                  Get in touch
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Have a project in mind or just want to chat? I'd love to hear from you
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="lg:col-span-1"
                >
                  {/* Contact Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact information</CardTitle>
                      <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-1">{info.label}</p>
                            {info.href ? (
                              <a
                                href={info.href}
                                className="text-sm hover:text-primary transition-colors duration-200"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-sm">{info.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-2"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Send a message</CardTitle>
                      <CardDescription>Fill out the form below and I'll get back to you soon</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Your name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="text-foreground placeholder:text-muted-foreground"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="your.email@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="text-foreground placeholder:text-muted-foreground"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="What's this about?"
                            value={formData.subject}
                            onChange={handleChange}
                            className="text-foreground placeholder:text-muted-foreground"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell me about your project or inquiry..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="text-foreground placeholder:text-muted-foreground resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto transition-all duration-200 active:scale-[0.98]"
                        >
                          {isSubmitting ? 'Sending...' : 'Send message'}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;