import React, { useState, /* useEffect */ } from 'react';
import './styles/CaseStudies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      slug: "omnichannel-chatbot",
      title: "Omni-Channel Chatbot System for Scalable Customer Engagement",
      overview: "Jungroo built an omni-channel chatbot system for SMS, WhatsApp, Telegram, and web, supporting complex workflows and delivering hyper-personalized, real-time responses through advanced architecture.",
      link: "/case-studies/omnichannel-chatbot",
      category: "Chatbot Systems",
      categoryClass: "remote",
      categoryIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          <path d="M8 9h8"></path>
          <path d="M8 13h6"></path>
        </svg>
      ),
      partner: "Multiple Clients"
    },
    {
      slug: "cms-infinity-learn",
      title: "Building a Scalable, Multi-Tenant Content Management System for Infinity Learn",
      overview: "Infinity Learn partnered with Jungroo to develop a centralized and secure CMS supporting multiple customer-facing apps under B2C and B2B models, enabling seamless content delivery and strict governance.",
      link: "/case-studies/cms-infinity-learn",
      category: "Content Management",
      categoryClass: "content-management",
      categoryIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-3.08"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <circle cx="16" cy="16" r="6"></circle>
          <path d="M16 14v4"></path>
          <path d="M16 14h-3"></path>
        </svg>
      ),
      partner: "Infinity Learn"
    },{
      slug: "admission-system-lead",
      title: "School Admission Management System",
      overview: "Jungroo developed a digital admission platform for LEAD School, integrating lead tracking, evaluations, verification, and analytics to create a seamless and efficient admission experience.",
      link: "/case-studies/admission-system-lead",
      category: "Admission Systems",
      categoryClass: "content-management",
      categoryIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-4-4h-2"></path>
          <circle cx="16" cy="11" r="4"></circle>
        </svg>
      ),
      partner: "LEAD School"
    },
    {
      slug: "gst-adjudication-ai",
      title: "AI Powered GST Adjudication Order Generation",
      overview: "In collaboration with Zen Tax Clinic, Jungroo developed an AI system for the Government of India to automate GST order generation, reducing processing time from days to minutes and minimizing human error.",
      link: "/case-studies/gst-adjudication-ai",
      category: "AI Solutions",
      categoryClass: "educational",
      categoryIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v6.5l5-3v6.5l5-3v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2"></path>
          <path d="M6 12h12"></path>
          <path d="M6 20v-8"></path>
          <path d="M18 20v-8"></path>
        </svg>
      ),
      partner: "Zen Tax Clinic"
    },
    {
      slug: "climate-tech-data-ingestion",
      title: "Building a Data Ingestion Pipeline for a Climate Tech Company",
      overview: "A leading climate tech company required a system to manage carbon emissions data from multiple tenants and organizations. Jungroo developed a multi-zone data ingestion pipeline leveraging AWS services to ingest, standardize, enrich, and validate data for analytics and reporting — ensuring data quality, tenant isolation, and integrity across Raw, Bronze, Silver, and Gold zones.",
      link: "/case-studies/climate-tech-data-ingestion",
      category: "Data Engineering",
      categoryClass: "remote",
      categoryIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v6.5l5-3v6.5l5-3v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2"></path>
          <path d="M6 12h12"></path>
          <path d="M6 20v-8"></path>
          <path d="M18 20v-8"></path>
        </svg>
      ),
      partner: "Climate Tech Company"
    },  
      
    {
      slug: "report-designer",
      title: "Dynamic Report Designer",
      overview: "Jungroo built a dynamic report designer for a leading Data Management company in the United States to help educational institutions extract actionable insights from complex datasets for operations, compliance, and decision-making.",
      link: "/case-studies/report-designer",
      category: "Data Reporting",
      categoryClass: "content-management",
      categoryIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <path d="M14 2v6h6"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path>
          <path d="M10 9H8"></path>
        </svg>
      ),
      partner: "Blumen"
    },
     
    {
      slug: "order-management-infinity",
      title: "Building a Scalable, API-First Order Management System for Infinity Learn",
      overview: "Jungroo developed a modular, cloud-native OMS to manage Infinity Learn's educational product orders, integrating with existing systems and supporting flexible payments across B2C/B2B models.",
      link: "/case-studies/order-management-infinity",
      category: "Order Management",
      categoryClass: "content-management",
      categoryIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="16" x="4" y="4" rx="2"></rect>
          <path d="M9 9h6"></path>
          <path d="M9 13h6"></path>
          <path d="M9 17h6"></path>
        </svg>
      ),
      partner: "Infinity Learn"
    }, 
    
    {
      slug: "educational-diagnostics-ai",
      title: "Enhancing Educational Diagnostics Through AI-Driven Adaptive Assessments",
      overview: "Jungroo collaborated with Bhumi, a leading NGO in Chennai, to streamline their manual diagnostic evaluations into a single AI-driven adaptive assessment. This enabled precise learning-level identification and personalized instruction for each student.",
      link: "/case-studies/educational-diagnostics-ai",
      category: "Educational Diagnostics",
      categoryClass: "educational",
      categoryIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      partner: "Bhumi NGO"
    },
   
    {
      slug: "nrlm-digitization",
      title: "Digitizing NRLM for Enhanced Rural Livelihoods",
      overview: "Jungroo and Finakon Technologies digitized the NRLM program to enhance financial inclusion and access to credit for rural women via SHGs, supporting self-employment and skilled wage opportunities.",
      link: "/case-studies/nrlm-digitization",
      category: "Digital Transformation",
      categoryClass: "content-management",
      categoryIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      partner: "Finakon Technologies"
    },
        
    {
      slug: "math-practice-buddy",
      title: "AI Math Practice Buddy",
      overview: "Jungroo and Vedantu piloted an AI-based math homework system for Grades 6-8, offering adaptive practice and tracking progress to accommodate diverse learning levels and improve outcomes.",
      link: "/case-studies/math-practice-buddy",
      category: "Educational Technology",
      categoryClass: "educational",
      categoryIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <path d="M12 17h.01"></path>
        </svg>
      ),
      partner: "Vedantu"
    },
   
    
    {
      slug: "subjective-evaluation-tool",
      title: "Subjective Evaluation Tool",
      overview: "During the pandemic, Jungroo enabled digital subjective assessments to support step-by-step problem-solving and critical thinking, providing a practical alternative to traditional exams in remote learning environments.",
      link: "/case-studies/subjective-evaluation-tool",
      category: "Remote Assessment",
      categoryClass: "remote",
      categoryIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      ),
      partner: "Pandemic Response"
    },
    {
      slug: "assessment-system-lead",
      title: "Assessment Management System",
      overview: "Jungroo rapidly built an assessment platform for LEAD School to support 100,000+ students with features like low-bandwidth optimization, automated grading, and integrated reporting.",
      link: "/case-studies/assessment-system-lead",
      category: "Assessment Systems",
      categoryClass: "educational",
      categoryIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      ),
      partner: "LEAD School"
    },
    
    {
      slug: "data-migration-tool",
      title: "Data Migration Tool",
      overview: "Jungroo developed a powerful Data Migration Tool for a leading Data Management Company in the United States to simplify onboarding of educational institutions by enabling seamless transfer of structured data and digital assets. It tackles challenges like data heterogeneity, concurrency, and error handling through automated, validated, and optimized data workflows.",
      link: "/case-studies/data-migration-tool",
      category: "Data Migration",
      categoryClass: "remote",
      categoryIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
          <path d="M12 3v6"></path>
        </svg>
      ),
      partner: "Blumen"
    }
   
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const studiesPerPage = 5; 
  const totalPages = Math.ceil(caseStudies.length / studiesPerPage);

  // Get current case studies
  const indexOfLastStudy = currentPage * studiesPerPage;
  const indexOfFirstStudy = indexOfLastStudy - studiesPerPage;
  const currentStudies = caseStudies.slice(indexOfFirstStudy, indexOfLastStudy);

  const handlePageChange = (pageNumber:number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  
  const navigate = useNavigate();
  
  return (
    <>
    <Header/>
      <div className="aurora-container">
        <div className="aurora-effect"></div>
      </div>
      
      <div className="container">
        <div className="section-head">
          <div className="title-container">
            <button 
              className="back-button" 
              onClick={() => navigate('/', { state: { scrollToId: 'case-studies' } })}
              aria-label="Go back to homepage"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <h1 className="title">Case Studies</h1>
          </div>
          <p className="description">
          Each of our case study is a <strong>real-world example</strong> of complex challenges solved with <strong>care, creativity, and code</strong>. We don’t just deliver software—we <strong>engineer outcomes</strong>. We have worked across industries like education, fintech, enterprise tech to build robust, future-ready products using cutting-edge tools in AI/ML, data engineering, ETL pipelines, cloud platforms and full-stack development. Explore how we <strong>turn vision into value</strong>—across domains, disciplines, and technologies.

          </p>
          <div className="divider"></div>
        </div>
        
        <div className="case-studies">
          {currentStudies.map((study, index) => (
            <div className="case-study" key={study.slug}>
              <div className="case-header">
                <div className={`category-icon ${study.categoryClass}`}>
                  {study.categoryIcon}
                </div>
                <div className="category-text">{study.category}</div>
              </div>
              <div className="case-content">
                <h2 className="case-title">{study.title}</h2>
                <p className="case-description">{study.overview}</p>
              </div>
              <div className="case-footer">
                <div className="partner">
                  
                </div>
                <a href={study.link} className="read-more">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pagination">
          <button 
            className={`page-control ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button 
              key={index + 1}
              className={`page-control ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          
          <button 
            className={`page-control ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CaseStudies;