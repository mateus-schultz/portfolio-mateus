"use client";

import { motion } from "framer-motion";

import { ExperienceCard, type ExperienceType } from "../ExperienceCard";

export const WorkExperience = () => {
  const experiences: ExperienceType[] = [
    {
      id: 1,
      url: "/pitang.png",
      title: "Full Stack Engineer",
      company: "Pitang",
      date: "SEP 2022 - CURRENT",
      summaryPoints: [
        "Lucree (Portal) - Payment and sales solutions for the following segments: automotive, workshops and auto parts, construction materials, and doctors and dentists.",
        "Lucree (Onboarding) - Company accreditation to enable commission and percentage on customer sales.",
        "Lucree (Online Checkout) - Payment link generator.",
        "P2F - Document management and process automation.",
        "Propig - Financial management and benefits platform.",
        "AeC (Admin)​ - Customer relationship, service consultancy.",
        "IDI-Bpm - Process management.",
        "B3 Digitas - B2B and B2B2C infrastructure and solutions for the cryptoasset ecosystem, covering tokenization, trading, settlement and custody of digital assets.",
        "Stanley's veins - Marketplace for trading medical products.",
        "Fabulista - Creation of personalized and illustrated stories with AI.",
        "Prefeitura Jaboatão - Appointments and services.",
        "Many others.",
      ],
    },
    {
      id: 2,
      url: "/bbchain.png",
      title: "Frontend Developer",
      company: "BBChain",
      date: "OCT 2020 - SEP 2022",
      summaryPoints: [
        "Valluri - Commodity negotiations, financial contracts between banks and companies.",
        "Bvm12 (App and web) - Buying and selling on the stock exchange.",
        "OTC - Trading of digital assets on the over-the-counter market based on blockchain.",
        "BlockchainLab - SaaS platform for creating and managing Blockchain networks.",
        "BBChain - Website of the company that specializes in corporate Blockchain technology.",
      ],
    },
    {
      id: 3,
      url: "/atelie.png",
      title: "Full Stack Developer",
      company: "Ateliê de Software",
      date: "FEB 2019 - OCT 2020",
      summaryPoints: [
        "I've worked on different projects, implementing new solutions for medium and large companies, always using agile techniques for better project management.",
        "Vagas.com - Implementation of an internal chat between contractor and participants.",
        "Granatum - Implementation of an app (Android and iOS) for financial management of companies.",
        "Ateliê de software - Implementation of the company's initial website.",
        "Webgoal - Implementation of the company's initial website.",
        "W1 consultoria - Financial planning and consulting",
      ],
    },
    {
      id: 4,
      url: "/deal.png",
      title: "Frontend Developer",
      company: "Deal",
      date: "JAN 2020 - JUN 2020",
      summaryPoints: [
        "I've worked on different projects using agile methods to transform the client's business into technological solutions.",
        "Compra agora Unilever (Online store with exclusive discounts for retailers)",
        "Vamo junto HDI seguros (A rewards catalog where a hiring manager from the LTM Group can exchange points for prizes)",
      ],
    },
    {
      id: 5,
      url: "/soitic.png",
      title: "Full Stack Developer",
      company: "Soitic",
      date: "NOV 2015 - APR 2017",
      summaryPoints: [
        "My goal in this company was to transform the legacy software into a modern solution using new web technologies, analyzing technical feasibility and the market with stakeholders. This new solution impacted more than 30,000 doctors.",
        "Experience in web development with continuous integration using Single Page Applications (SPAs) with databases (SQL Server) and object-relational mapping (Linq, Entity, EDM) using AngularJs and WebApi, .NET Framework (ASP.NET MVC and Entity Framework), Domain Driven Design (DDD), N-tier Architecture, Test Driven Development (TDD), HTML, Javascript, CSS, Jquery, among others.",
      ],
    },
  ];

  return (
    <motion.div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full max-h-160 md:max-h-200 flex space-x-5 overflow-x-auto p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};
