import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ChevronRight,
  History,
  Target
} from 'lucide-react';

const ResumePage = () => {
  const competencies = [
    "Product Strategy & Roadmap Development",
    "Cross-functional Leadership & Stakeholder Management",
    "User Research, Journey Mapping & NPS Improvement",
    "GTM Strategy, Adoption & Change Management",
    "Metrics / OKRs / KPI Definition & Data-Driven Decision Making",
    "Agile Delivery (Scrum / Kanban) & Backlog Prioritization",
    "Pricing Strategy & P&L Awareness",
    "Analytics, Dashboards & Experimentation (SQL, Tableau, Power BI)",
    "Enterprise Systems & Governance (ERP migrations, compliance)",
    "Mentorship, Team Development & PM Coaching"
  ];

  const experience = [
    {
      company: 'Chemco Engineers',
      location: 'Bengaluru India',
      period: '05/2021 - Current',
      title: 'Product Strategy & Operations Manager',
      achievements: [
        "Owned product strategy and roadmap for platforms spanning ordering, billing, and delivery workflows, aligning system improvements with business growth and operational scalability.",
        "Acted as the voice of the user (sales, finance, operations), identifying workflow gaps and translating them into structured product improvements.",
        "Led end-to-end ERP migration to Tally Prime, improving system reliability, data integrity, and cross-functional adoption.",
        "Designed and implemented a product taxonomy and categorization system, improving product discoverability and reducing ordering errors.",
        "Introduced structured financial workflows (payables & receivables), improving visibility and enabling better decision-making.",
        "Launched the Direct Deliver workflow, reducing order-to-invoice cycle time from 7 days to 3 days, accelerating revenue realization and improving customer experience.",
        "Co-developed a standardized delivery framework (\"Fast Five\"), improving execution consistency for high-value customer workflows.",
        "Improved conversion and ordering efficiency by reducing friction in product selection and fulfillment workflows.",
        "Supported repeat business by identifying high-frequency demand patterns and streamlining ordering and delivery processes.",
        "Shifted from component-level transactions to solution-oriented offerings, increasing customer value and usability.",
        "Established data-driven feedback loops using operational metrics and user insights to continuously refine workflows.",
        "Partnered with leadership and cross-functional teams to align product initiatives with revenue impact, efficiency, and scalability."
      ]
    },
    {
      company: 'Barclays',
      location: 'Las Vegas USA',
      period: '11/2019 - 04/2021',
      title: 'Product Analyst – Strategic Implementation',
      achievements: [
        "Led product analytics initiatives supporting financial platforms by analyzing transaction, reconciliation, and operational telemetry data to identify systemic issues and improvement opportunities.",
        "Owned and launched \"GL Recon,\" a data-driven reconciliation platform that identified and resolved discrepancies between general ledger data and cash receipts, closing a $17M reconciliation gap within 10 months.",
        "Worked with audit, finance, and engineering teams to design instrumentation and data pipelines to ensure reliable reconciliation and analytics insights.",
        "Defined success metrics and tracked product performance post-launch to ensure operational stability and ongoing monitoring.",
        "Delivered four co-branded credit card product launches (Wyndham, Emirates, Frontier, Carnival Cruises), coordinating discovery, analytics validation, testing, and launch.",
        "Used transaction data and performance insights to support operational improvements and inform product roadmap discussions.",
        "Oversaw delivery across 9 engineers and testers, translating analytical insights into prioritized engineering tasks and user stories.",
        "Facilitated Agile product delivery including sprint planning, backlog prioritization, and iterative feature development.",
        "Led cross-functional collaboration with risk, compliance, finance, and engineering teams to ensure analytics insights translated into scalable product improvements."
      ]
    },
    {
      company: 'Summit Electric',
      location: 'Albuquerque USA',
      period: '03/2017 - 08/2019',
      title: 'Strategic Business Analyst - Customer Insights',
      achievements: [
        "Partnered with the VP of Sales and Director of Data to design a scalable analytics platform enabling enterprise-wide insights into customer behavior, sales performance, and operational metrics.",
        "Defined and monitored key product and customer metrics, improving leadership visibility into business performance.",
        "Developed dashboards and reporting systems that reduced executive decision cycles by ~2 days.",
        "Conducted deep-dive analyses on customer and sales datasets to identify growth opportunities and operational bottlenecks.",
        "Embedded Voice of Customer (VOC) analytics into product reporting workflows, contributing to improvement in NPS from \"Good\" to \"Excellent\" (>50).",
        "Built and managed a team of three project managers, mentoring them in analytical thinking, stakeholder communication, and problem-solving.",
        "Worked with operations leadership to prioritize initiatives using data-backed impact frameworks.",
        "Delivered executive-ready analytics presentations to guide leadership decisions."
      ]
    }
  ];

  const earlierRoles = [
    { title: "Data Analytics Intern", company: "Naini Infotech", location: "Boulder USA", period: "2016-2017" },
    { title: "Big Data Intern", company: "Eagle Automation", location: "", period: "2015-2016" },
    { title: "Senior Analyst - Fixed Income Trade Analytics", company: "Goldman Sachs", location: "Bengaluru", period: "2013-2014" },
    { title: "Analyst - Global Dupe Reporting & Migration", company: "Northern Trust", location: "Bengaluru", period: "2010-2012" }
  ];

  const education = [
    {
      institution: "IIT Guwahati",
      period: "In Progress (Expected: Jul 2026)",
      degree: "Executive Program: Product Management & AI for Leaders"
    },
    {
      institution: "University of Colorado, Boulder",
      period: "May 2016",
      degree: "Master of Science in Business Analytics"
    },
    {
      institution: "Jain College - Bangalore University",
      period: "May 2010",
      degree: "Bachelor of Business Management"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Professional Journey - Swathi Chaturvedi</title>
        <meta name="description" content="Professional journey, key competencies, and work experience of Swathi Chaturvedi in Product Strategy and Operations." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-grow">
          <article className="py-20 md:py-28">
            <div className="container-custom max-w-5xl">
              
              {/* Header & Intro */}
              <motion.section 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="mb-20"
              >
                <motion.h1 
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
                >
                  Professional Journey
                </motion.h1>
                <motion.p 
                  variants={itemVariants}
                  className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
                >
                  A track record of leading product strategy, executing complex data-driven implementations, 
                  and scaling enterprise workflows. I partner with cross-functional teams to build 
                  solutions that drive efficiency, user adoption, and revenue growth.
                </motion.p>
              </motion.section>

              {/* Key Competencies */}
              <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="mb-24"
              >
                <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                  <Target className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-semibold">Key Competencies</h2>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {competencies.map((comp, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Card className="h-full bg-muted/30 border-border/50 shadow-sm hover:shadow-md hover:bg-muted/50 transition-all duration-300 group">
                        <CardContent className="p-5 flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary/60 shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                          <span className="text-sm font-medium leading-snug">{comp}</span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              <Separator className="my-16 opacity-50" />

              {/* Professional Experience */}
              <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="mb-24"
              >
                <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-semibold">Professional Experience</h2>
                </motion.div>

                <div className="resume-timeline">
                  {experience.map((role, index) => (
                    <motion.div key={index} variants={itemVariants} className="resume-timeline-item">
                      <div className="resume-timeline-dot" />
                      
                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                          {role.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm md:text-base text-muted-foreground">
                          <span className="font-semibold text-primary/90">{role.company}</span>
                          {role.location && (
                            <>
                              <span className="hidden sm:inline opacity-50">•</span>
                              <span>{role.location}</span>
                            </>
                          )}
                          <span className="opacity-50">•</span>
                          <span className="font-medium tabular-nums">{role.period}</span>
                        </div>
                      </div>

                      <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm">
                        <ul className="space-y-3">
                          {role.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <ChevronRight className="w-4 h-4 text-primary/50 shrink-0 mt-1" />
                              <span className="text-muted-foreground text-sm md:text-base leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Earlier Roles */}
              <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="mb-24"
              >
                <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                  <History className="w-6 h-6 text-primary" />
                  <h2 className="text-xl md:text-2xl font-semibold">Earlier Roles</h2>
                </motion.div>

                <Card className="shadow-sm border-border/50 overflow-hidden">
                  <div className="divide-y divide-border/50">
                    {earlierRoles.map((role, index) => (
                      <motion.div 
                        key={index} 
                        variants={itemVariants}
                        className="p-4 md:px-6 hover:bg-muted/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div>
                          <h4 className="font-medium text-foreground">{role.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <span>{role.company}</span>
                            {role.location && (
                              <>
                                <span className="opacity-50">•</span>
                                <span>{role.location}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <span className="text-sm font-medium tabular-nums text-muted-foreground sm:text-right shrink-0">
                          {role.period}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.section>

              <Separator className="my-16 opacity-50" />

              {/* Education */}
              <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
              >
                <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-semibold">Education</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {education.map((edu, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Card className="h-full shadow-sm border-border/50 hover:border-primary/30 transition-colors">
                        <CardContent className="p-6">
                          <div className="mb-4">
                            <Award className="w-8 h-8 text-primary/40 mb-3" />
                            <h3 className="font-semibold text-lg leading-snug mb-1">
                              {edu.degree}
                            </h3>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <p className="font-medium text-foreground mb-1">{edu.institution}</p>
                            <p className="tabular-nums">{edu.period}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ResumePage;