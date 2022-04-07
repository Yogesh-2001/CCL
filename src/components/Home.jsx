import React from "react";
import Header from './Header';
import Navbarsection from './Navbarsection';
import TeamSection from './TeamSection';
import ResumeFooter from './ResumeFooter'
const Home = () => {
  return (
    <>
      <Navbarsection />
      <Header /> 
      <TeamSection />
      <ResumeFooter /> 
    </>
  );
};

export default Home;
