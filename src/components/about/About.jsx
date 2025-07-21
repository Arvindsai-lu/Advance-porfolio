import React from 'react';
import './about.css';
import ME from '../../assets/me-about.png';
import { FaAward } from 'react-icons/fa';
import { TbCertificate } from 'react-icons/tb';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>Who Am I</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Professional</small>
            </article>

            <article className="about__card">
              <TbCertificate className="about__icon" />
              <h5>Certifications</h5>
              <small>Security+ & 8+ Active</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ AI & Security</small>
            </article>
          </div>

          <p>
            Hi! I'm Arvind Sai Dooda — a <strong>cybersecurity professional</strong> and <strong>AI-driven developer</strong> with hands-on experience in enterprise security operations and cutting-edge AI development.
          </p>
          
          <p>
            <strong>Master's graduate in Cybersecurity Engineering</strong> from Illinois Institute of Technology (2025), I bring <strong>4+ years of industry experience</strong> from companies like <strong>Renault Nissan</strong> and <strong>Excelerate</strong>, where I've mastered <strong>SIEM platforms (Splunk, QRadar, Chronicle)</strong>, <strong>cloud security (GCP, AWS, Azure)</strong>, and <strong>enterprise threat detection</strong>.
          </p>
          
          <p>
            My recent achievements include <strong>ranking 228th globally in Reply CTF 2025</strong> against 10,000+ participants, <strong>national winner of Flipkart Grid 3.0</strong>, and developing AI-powered solutions like <strong>RecruitIntel with 98% scam detection accuracy</strong> and advanced healthcare AI systems using <strong>LangChain and RAG</strong>.
          </p>
          
          <p>
            Currently holding <strong>Security+, Cisco CyberOps, Google Cybersecurity</strong>, and <strong>CCNA certifications</strong>, I specialize in combining <strong>cybersecurity expertise with AI innovation</strong> to build secure, intelligent systems. Whether it's <strong>threat hunting, incident response, penetration testing, or AI-powered security automation</strong> — I'm ready to drive your security initiatives forward.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>

      {/* === Education Section === */}
      <div className="education__section">
        <h5>Academic Background</h5>
        <h2>Education</h2>

        <div className="education__container">
          <div className="education__item">
            <h3>Master's in Cybersecurity Engineering</h3>
            <p><strong>Aug 2023 – May 2025 (Graduated)</strong><br />Illinois Institute of Technology<br />GPA: 3.40/4.0</p>
          </div>

          <div className="education__item">
            <h3>Bachelor of Engineering in Computer Science</h3>
            <p><strong>May 2019 – May 2023</strong><br />Anna University<br />GPA: 8.7/10</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;