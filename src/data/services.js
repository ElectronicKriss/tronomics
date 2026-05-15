export const services = {
  riskAssessment: {
    title: "Risk Assessment",
    description: "Operational Risk, HSE Audits, Structural/Technical Assessment, Compliance & Safety, Business Continuity",
    icon: "shield-alert",
    subsections: [
      { title: "Enterprise Risk", description: "Comprehensive enterprise-wide risk evaluation" },
      { title: "Site Inspection", description: "On-site safety and compliance inspections" },
      { title: "Construction Risk", description: "Construction project risk assessment" },
      { title: "HSE Compliance", description: "Health, Safety & Environment compliance audits" },
      { title: "Vendor Risk", description: "Third-party vendor risk assessment" },
      { title: "Cyber Risk", description: "Cybersecurity and data protection assessment" },
      { title: "Risk Reporting", description: "Detailed risk analysis reports" }
    ]
  },
  talentSolutions: {
    title: "Talent Solutions",
    description: "Recruitment, Technical Staffing, Outsourcing, Executive Search, Contractor Management",
    icon: "users",
    subsections: [
      { title: "Recruitment", description: "Full-cycle recruitment services" },
      { title: "Technical Staffing", description: "Tech talent acquisition and placement" },
      { title: "Outsourcing", description: "Team outsourcing and management" },
      { title: "Executive Search", description: "C-level and senior leadership search" },
      { title: "Contractor Management", description: "Independent contractor solutions" }
    ]
  },
  itServices: {
    title: "IT Services",
    description: "Website & App Development, IT Infrastructure, Cybersecurity, Automation, Cloud & Support",
    icon: "code",
    subsections: [
      { title: "Web Development", description: "Custom website and web application development" },
      { title: "Mobile Apps", description: "iOS and Android application development" },
      { title: "Cloud Setup", description: "Cloud infrastructure and migration services" },
      { title: "Cybersecurity", description: "Security solutions and penetration testing" },
      { title: "ERP/CRM", description: "Enterprise resource planning and CRM solutions" },
      { title: "Maintenance", description: "Ongoing IT support and maintenance plans" }
    ]
  }
};

export const coreServices = [
  {
    id: "risk",
    name: "Risk Assessment",
    description: "Operational Risk, HSE Audits, Structural/Technical Assessment, Compliance & Safety, Business Continuity",
    icon: "shield-alert",
    color: "from-red-50 to-red-100",
    borderColor: "border-red-200"
  },
  {
    id: "talent",
    name: "Talent Solutions",
    description: "Recruitment, Technical Staffing, Outsourcing, Executive Search, Contractor Management",
    icon: "users",
    color: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200"
  },
  {
    id: "it",
    name: "IT Services",
    description: "Website & App Development, IT Infrastructure, Cybersecurity, Automation, Cloud & Support",
    icon: "code",
    color: "from-emerald-50 to-emerald-100",
    borderColor: "border-emerald-200"
  }
];

export const caseStudies = [
  {
    id: 1,
    title: "Reduced Downtime by 40%",
    client: "Energy Sector Company",
    industry: "Oil & Gas",
    problem: "Frequent operational disruptions causing revenue loss",
    solution: "Implemented comprehensive risk assessment and mitigation protocols",
    result: "40% reduction in unplanned downtime",
    metrics: ["40% downtime reduction", "3 months to implementation", "N50M+ saved annually"]
  },
  {
    id: 2,
    title: "Rapid Tech Team Assembly",
    client: "Fintech Startup",
    industry: "Finance",
    problem: "Need to hire 12 engineers within 3 weeks",
    solution: "Leveraged talent pipeline and accelerated recruitment process",
    result: "Successfully hired 12 engineers in 3 weeks",
    metrics: ["12 engineers hired", "3 weeks delivery", "95% retention after 1 year"]
  },
  {
    id: 3,
    title: "Identified Critical Compliance Gaps",
    client: "Manufacturing Company",
    industry: "Manufacturing",
    problem: "Unaware of regulatory compliance violations",
    solution: "Deep compliance audit and risk assessment",
    result: "Identified and resolved 23 compliance issues",
    metrics: ["23 issues identified", "100% remediation", "Zero penalties"]
  }
];

export const industries = [
  { name: "Construction", description: "Safety audits, risk assessment, compliance" },
  { name: "Oil & Gas", description: "HSE compliance, operational risk, vendor management" },
  { name: "Healthcare", description: "Compliance, staffing, cybersecurity" },
  { name: "Real Estate", description: "Property risk assessment, compliance audits" },
  { name: "Manufacturing", description: "Site inspection, HSE, operational risk" },
  { name: "Finance", description: "Cybersecurity, compliance, talent acquisition" }
];

export const whyChooseUs = [
  {
    title: "Fast Response",
    description: "Quick turnaround on consultations and assessments",
    icon: "zap"
  },
  {
    title: "Cross-Industry Expertise",
    description: "20+ years serving multiple sectors",
    icon: "globe"
  },
  {
    title: "End-to-End Solutions",
    description: "From assessment to implementation and ongoing support",
    icon: "layers"
  },
  {
    title: "Data-Driven Decisions",
    description: "Evidence-based recommendations and analytics",
    icon: "bar-chart-3"
  },
  {
    title: "Reliable Support",
    description: "Dedicated account managers and 24/7 support",
    icon: "headset"
  }
];

export const trustIndicators = {
  projectsCompleted: "500+",
  clientsServed: "150+",
  industryServed: "6+",
  certifications: ["ISO 9001", "HSE Certified", "ISO 27001", "ITIL"],
  yearsInBusiness: 15
};
