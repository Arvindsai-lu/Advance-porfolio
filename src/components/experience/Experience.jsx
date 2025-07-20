import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import RadarChartComponent from './RadarChartComponent';

const Experience = () => {
  return (
    <section id="experience">
      {/* === SKILLS MATRIX === */}
      <div style={{ marginBottom: '3rem', paddingBottom: '1.5rem' }}>
        <section id="skills-matrix">
          <h5>My Technical Skills</h5>
          <h2>Skills Matrix</h2>
          <RadarChartComponent />
        </section>
      </div>

      {/* === TECHNICAL SKILL CARDS === */}
      <div className="container experience__container">
        
        {/* === PROGRAMMING LANGUAGES === */}
        <div className="experience__frontend">
          <h3>Programming Languages</h3>
          <div className="experience__content experience__content--grid">
            {[
              'Python',
              'SQL',
              'JavaScript',
              'Java',
              'C',
              'Bash',
              'Node.js',
              'HTML/CSS'
            ].map((skill) => (
              <article className="experience__details" key={skill}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>{skill}</h4></div>
              </article>
            ))}
          </div>
        </div>

        {/* === SECURITY TOOLS & PLATFORMS === */}
        <div className="experience__backend">
          <h3>Security Tools & SIEM Platforms</h3>
          <div className="experience__content experience__content--grid">
            {[
              'Splunk',
              'QRadar', 
              'Chronicle SIEM',
              'Azure Sentinel',
              'CrowdStrike',
              'Wireshark',
              'Burp Suite',
              'Metasploit',
              'OpenVAS',
              'Nmap',
              'Hashcat',
              'John the Ripper',
              'Autopsy',
              'Volatility'
            ].map((skill) => (
              <article className="experience__details" key={skill}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>{skill}</h4></div>
              </article>
            ))}
          </div>
        </div>

        {/* === CLOUD & DEVOPS === */}
        <div className="experience__frontend">
          <h3>Cloud & DevOps</h3>
          <div className="experience__content experience__content--grid">
            {[
              'AWS',
              'Google Cloud Platform (GCP)',
              'Azure',
              'Docker',
              'Kubernetes',
              'Terraform',
              'CI/CD',
              'CloudTrail',
              'GuardDuty',
              'Git/GitHub',
              'Jenkins',
              'DevSecOps'
            ].map((skill) => (
              <article className="experience__details" key={skill}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>{skill}</h4></div>
              </article>
            ))}
          </div>
        </div>

        {/* === CYBERSECURITY SPECIALIZATIONS === */}
        <div className="experience__backend">
          <h3>Cybersecurity Specializations</h3>
          <div className="experience__content experience__content--grid">
            {[
              'Penetration Testing',
              'Vulnerability Assessment', 
              'Threat Intelligence',
              'Incident Response',
              'Digital Forensics',
              'Zero Trust Architecture',
              'API Security',
              'Network Security',
              'Malware Analysis',
              'Red Teaming',
              'OSINT (Open Source Intelligence)'
            ].map((skill) => (
              <article className="experience__details" key={skill}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>{skill}</h4></div>
              </article>
            ))}
          </div>
        </div>

        {/* === IDENTITY & ACCESS MANAGEMENT === */}
        <div className="experience__frontend">
          <h3>Identity & Access Management</h3>
          <div className="experience__content experience__content--grid">
            {[
              'Active Directory',
              'RBAC (Role-Based Access Control)',
              'IAM (Identity & Access Management)',
              'Okta',
              'CyberArk',
              'Zscaler',
              'SASE',
              'Multi-Factor Authentication (MFA)'
            ].map((skill) => (
              <article className="experience__details" key={skill}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>{skill}</h4></div>
              </article>
            ))}
          </div>
        </div>

        {/* === FRAMEWORKS & COMPLIANCE === */}
        <div className="experience__backend">
          <h3>Security Frameworks & Compliance</h3>
          <div className="experience__content experience__content--grid">
            {[
              'NIST 800-53',
              'ISO 27001',
              'HIPAA',
              'PCI-DSS',
              'MITRE ATT&CK',
              'OWASP Top 10',
              'SOC 2',
              'GDPR Compliance'
            ].map((skill) => (
              <article className="experience__details" key={skill}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>{skill}</h4></div>
              </article>
            ))}
          </div>
        </div>

        {/* === AI/ML & DATA ANALYTICS === */}
        <div className="experience__frontend">
          <h3>AI/ML & Data Analytics</h3>
          <div className="experience__content experience__content--grid">
            {[
              'Machine Learning',
              'Deep Learning',
              'Neural Networks',
              'LangChain/RAG',
              'GPT-4 Integration',
              'Scikit-learn',
              'XGBoost',
              'SMOTE',
              'TIBCO Spotfire',
              'Data Visualization',
              'Vector Databases (Pinecone)',
              'Natural Language Processing',
              'Text-to-Speech (TTS)',
              'Voice Synthesis',
              'Audio Signal Processing'
            ].map((skill) => (
              <article className="experience__details" key={skill}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>{skill}</h4></div>
              </article>
            ))}
          </div>
        </div>

        {/* === WEB DEVELOPMENT === */}
        <div className="experience__backend">
          <h3>Web Development</h3>
          <div className="experience__content experience__content--grid">
            {[
              'React.js',
              'Node.js',
              'REST APIs',
              'JavaScript ES6+',
              'HTML5/CSS3',
              'Responsive Design',
              'Firebase',
              'Netlify',
              'Chrome Extensions',
              'Full-Stack Development'
            ].map((skill) => (
              <article className="experience__details" key={skill}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div><h4>{skill}</h4></div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* === WORK EXPERIENCE SECTION === */}
      <section id="work-experience" style={{ marginTop: '4rem' }}>
        <h5>Where I've Worked</h5>
        <h2>Work Experience</h2>

        <div className="experience__container">
          {[
            // 1. CURRENT/ONGOING WORK FIRST
            {
              title: 'Freelance Developer',
              company: 'Self-Employed', 
              date: '2022 - Present',
              points: [
                'Built AI-powered applications for recruitment security and healthcare automation.',
                'Developed full-stack web apps and Chrome extensions using React, Node.js, Python.',
                'Created machine learning solutions for cybersecurity and data analysis.',
                'Delivered 10+ software solutions from websites to AI tools for clients.',
                'Published research on neural voice synthesis and open-source contributions.'
              ]
            },
            
            // 2. MOST RECENT INTERNSHIP
            {
              title: 'Cybersecurity Analyst Intern',
              company: 'TCS Forage',
              date: 'Jul 2024 – Aug 2024',
              points: [
                'Built Splunk dashboards simulating threat response.',
                'Designed IAM plans for onboarding/offboarding.',
                'Audited cryptographic protocols.'
              ]
            },
            
            // 3. PREVIOUS INTERNSHIP
            {
              title: 'Cybersecurity Intern',
              company: 'Excelerate',
              date: 'May 2023 – Jul 2023',
              points: [
                'Investigated and triaged security events using Splunk and QRadar, improving threat detection and response time.',
                'Built and tuned detection rules, correlation queries, and dashboards to monitor brute force and unauthorized access.',
                'Onboarded and enriched log data from various sources, enhancing SIEM visibility and forensic traceability.'
              ]
            },
            
            // 4. MAJOR 1-YEAR INTERNSHIP
            {
              title: 'Software Engineer Intern (Data Security Analyst)',
              company: 'Renault Nissan Technology Business Centre India',
              date: 'July 2022 – June 2023',
              points: [
                'Achieved 100% accuracy in secure SQL data extraction with monitoring dashboards.',
                'Built data protection dashboards during GCP migrations for automotive data security.',
                'Reduced vulnerabilities by 25% using TIBCO Spotfire dashboards and Python automation.',
                'Created compliance dashboards for European clients (Italy, France) data protection.'
              ]
            },
            
            // 5. TECHNICAL SUPPORT ROLE (1 YEAR)
            {
              title: 'Technical Support Assistant',
              company: 'S4 INTERIORS & ARCHITECTS',
              date: 'Jul 2021 – June 2022',
              points: [
                'Configured TCP/IP networks, Active Directory, and managed Windows domain environments across offices.',
                'Delivered Tier 1-2 support to 15+ users, implementing MFA and endpoint protection.',
                'Administered Google Workspace with secure file-sharing policies for confidential architectural data.',
                'Managed complete device lifecycle and maintained compliance through asset tracking audits.'
              ]
            },
            
            // 6. EARLIER POSITIONS
            {
              title: 'IT Security Analyst',
              company: 'Gurugram Cyber Cell',
              date: 'Jun 2021 – Jul 2021',
              points: [
                'Monitored network performance and implemented Veeam backup procedures for data integrity.',
                'Developed IT security policies and documented incidents to strengthen security posture.',
                'Implemented RBAC for virtualization environments and user account management.',
                'Automated administrative tasks using scripting to enhance system performance efficiency.'
              ]
            },
            
            {
              title: 'Open Source Contributor',
              company: 'GSSoC (GirlScript)',
              date: 'Mar 2021 – Jun 2021',
              points: [
                'Contributed to web dev and automation projects on GitHub.',
                'Fixed bugs, implemented features, and reviewed PRs.',
                'Strengthened skills in HTML, JS, React, Git, REST APIs.'
              ]
            },
            
            {
              title: 'Cybersecurity Engineer Intern',
              company: 'Virtual Testing Foundation',
              date: 'Jan 2021 – May 2021',
              points: [
                'Collaborated on cloud feature development and bug fixes.',
                'Performed vulnerability assessments and penetration testing.',
                'Automated compliance auditing with Azure Functions.',
                'Developed internal tools using C#/.NET.'
              ]
            }
          ].map(({ title, company, date, points }, i) => (
            <div className="experience__backend" key={i}>
              <h3>{title}</h3>
              {company && <h4 className="company-name">{company}</h4>}
              <small>{date}</small>
              <div className="experience__content">
                {points.map((pt, idx) => (
                  <article className="experience__details" key={idx}>
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>{pt}</div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Experience;