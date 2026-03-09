import React from 'react';
import { useParams } from 'react-router-dom';
import CaseStudyDetail from './CaseStudyDetail';
import { caseStudies } from './caseStudiesData';

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find(s => s.slug === slug);

  return <CaseStudyDetail study={study || null} />;
};

export default CaseStudyPage;
