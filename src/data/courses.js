export const coursesData = [
  {
    id: 'oscp',
    title: 'OSCP Preparation',
    level: 'Advanced',
    duration: '12 Weeks',
    description: 'Intensive hands-on training designed to help you crush the Offensive Security Certified Professional exam. Real-world lab environments and tailored guidance.',
    icon: '🛡️',
    color: 'var(--accent-green)',
    heroBg: 'rgba(0, 255, 102, 0.1)',
    prerequisites: [
      'Solid understanding of TCP/IP, networking, and Linux command line',
      'Basic scripting skills (Python, Bash)',
      'Familiarity with common network services and protocols'
    ],
    syllabus: [
      { week: 'Weeks 1-2', title: 'Information Gathering & Reconnaissance', topics: ['Passive & Active Recon', 'Nmap Advanced Usage', 'OSINT Frameworks', 'Directory Enumeration'] },
      { week: 'Weeks 3-4', title: 'Vulnerability Assessment & Web Applications', topics: ['SQL Injection (SQLi)', 'Cross-Site Scripting (XSS)', 'File Inclusion (LFI/RFI)', 'Command Injection'] },
      { week: 'Weeks 5-7', title: 'Exploitation & Privilege Escalation', topics: ['Exploit-DB', 'Metasploit Framework', 'Buffer Overflows', 'Windows/Linux PrivEsc'] },
      { week: 'Weeks 8-10', title: 'Active Directory Attacks', topics: ['AD Enumeration', 'Kerberoasting', 'NTLM Relay', 'Pass-the-Hash'] },
      { week: 'Weeks 11-12', title: 'Mock Exams & Reporting', topics: ['Post-Exploitation', 'Pivoting & Port Forwarding', 'Professional Reporting', '24-hour Mock Exam'] }
    ]
  },
  {
    id: 'cpts',
    title: 'CPTS (Hack The Box)',
    level: 'Advanced',
    duration: '14 Weeks',
    description: 'Master the Hack The Box Certified Penetration Testing Specialist path. Highly practical, deeply technical training focusing on modern enterprise exploitation.',
    icon: '🟩',
    color: '#9fef00',
    heroBg: 'rgba(159, 239, 0, 0.1)',
    prerequisites: [
      'Comfortable with Linux and Windows ecosystems',
      'Solid networking fundamentals',
      'Prior exposure to basic penetration testing concepts'
    ],
    syllabus: [
      { week: 'Weeks 1-3', title: 'Penetration Testing Process & Recon', topics: ['PTES Methodology', 'Advanced Nmap & Masscan', 'Subdomain Enumeration', 'Footprinting'] },
      { week: 'Weeks 4-6', title: 'Web Exploitation', topics: ['Burp Suite Mastery', 'Advanced SQLi & XSS', 'Server-Side Request Forgery (SSRF)', 'API Testing'] },
      { week: 'Weeks 7-9', title: 'Internal Network Penetration Testing', topics: ['LLMNR/NBT-NS Poisoning', 'SMB/RPC Enumeration', 'Password Cracking (Hashcat/John)', 'Pivoting and Tunneling (Chisel, Ligolo)'] },
      { week: 'Weeks 10-12', title: 'Advanced Active Directory', topics: ['BloodHound Analytics', 'DCSync & DPAPI', 'Constrained/Unconstrained Delegation', 'Forest Trusts'] },
      { week: 'Weeks 13-14', title: 'CPTS Exam Preparation', topics: ['Report Writing Standards', 'Time Management Strategies', 'Full Network Simulation'] }
    ]
  },
  {
    id: 'soc-analyst',
    title: 'SOC Analyst',
    level: 'Intermediate',
    duration: '10 Weeks',
    description: 'Step into the Blue Team. Learn to monitor, detect, and respond to cyber threats using industry-standard SIEMs and defensive tools.',
    icon: '👁️',
    color: '#0070f3',
    heroBg: 'rgba(0, 112, 243, 0.1)',
    prerequisites: [
      'Basic understanding of networking (OSI Model, TCP/IP)',
      'Familiarity with Windows and Linux logs',
      'Analytical mindset'
    ],
    syllabus: [
      { week: 'Weeks 1-2', title: 'SOC Fundamentals & Architecture', topics: ['Role of a SOC Analyst', 'Blue Team Methodologies', 'Understanding Threat Intelligence', 'MITRE ATT&CK Framework'] },
      { week: 'Weeks 3-4', title: 'Network Traffic Analysis', topics: ['Wireshark & tcpdump', 'Zeek & Suricata IDS', 'Detecting Malware Traffic', 'PCAP Analysis'] },
      { week: 'Weeks 5-7', title: 'SIEM & Log Analysis', topics: ['Splunk / Elastic Stack Setup', 'Writing Query Searches', 'Windows Event Logs', 'Sysmon Integration'] },
      { week: 'Weeks 8-9', title: 'Endpoint Security & Malware', topics: ['Introduction to EDR', 'Basic Malware Triage', 'Memory Analysis Basics', 'Phishing Email Analysis'] },
      { week: 'Week 10', title: 'Incident Response Procedures', topics: ['Triage and Containment', 'Creating Incident Reports', 'Live SOC Simulation'] }
    ]
  },
  {
    id: 'anninhmang',
    title: 'An Ninh Mang',
    level: 'Beginner to Pro',
    duration: '10 Weeks',
    description: 'Comprehensive cyber security foundation tailored for the Vietnamese market. Master the basics of network security, forensics, and incident response.',
    icon: '🔐',
    color: '#ff00ff',
    heroBg: 'rgba(255, 0, 255, 0.1)',
    prerequisites: [
      'No strict prerequisites',
      'General IT knowledge and curiosity'
    ],
    syllabus: [
      { week: 'Weeks 1-2', title: 'Foundation of Cyber Security', topics: ['CIA Triad', 'Basic Networking', 'Cryptography Basics', 'Security Policies'] },
      { week: 'Weeks 3-5', title: 'Defensive Security & Operations', topics: ['Firewalls and IDS/IPS', 'Endpoint Detection (EDR)', 'Log Analysis', 'Access Control Systems'] },
      { week: 'Weeks 6-7', title: 'Incident Response', topics: ['The Incident Response Lifecycle', 'Containment & Recovery', 'Tabletop Exercises'] },
      { week: 'Weeks 8-10', title: 'Digital Forensics Fundamentals', topics: ['Chain of Custody', 'Disk Imaging', 'Memory Forensics', 'Network Forensics'] }
    ]
  },
  {
    id: 'pentest',
    title: 'Penetration Testing',
    level: 'Intermediate',
    duration: '8 Weeks',
    description: 'Learn the methodology of modern penetration testing. From reconnaissance and scanning to exploitation and post-exploitation reporting.',
    icon: '🎯',
    color: 'var(--accent-cyan)',
    heroBg: 'rgba(0, 240, 255, 0.1)',
    prerequisites: [
      'Basic networking knowledge',
      'Comfortable navigating Linux and Windows',
      'Familiarity with web technologies (HTTP, HTML)'
    ],
    syllabus: [
      { week: 'Weeks 1-2', title: 'Introduction & Methodology', topics: ['PTES Standard', 'Ethics & RoE', 'Attacking Environment Setup', 'OSINT'] },
      { week: 'Weeks 3-4', title: 'Network Scanning', topics: ['Nmap', 'Service Enumeration', 'Vulnerability Scanning', 'Traffic Analysis'] },
      { week: 'Weeks 5-6', title: 'Client-Side Attacks', topics: ['Phishing', 'Malicious Documents', 'Browser Exploitation', 'AV Evasion Basics'] },
      { week: 'Weeks 7-8', title: 'Post-Exploitation', topics: ['Maintaining Access', 'Data Exfiltration', 'Executive Summaries', 'Remediation'] }
    ]
  },
  {
    id: 'admin',
    title: 'Systems Administration',
    level: 'Beginner to Intermediate',
    duration: '8 Weeks',
    description: 'Build the backbone of enterprise IT. Master Linux and Windows Server administration, virtualization, and infrastructure management.',
    icon: '🖥️',
    color: '#ff9900',
    heroBg: 'rgba(255, 153, 0, 0.1)',
    prerequisites: [
      'Basic computer literacy',
      'Desire to understand how operating systems work under the hood'
    ],
    syllabus: [
      { week: 'Weeks 1-2', title: 'Linux Fundamentals', topics: ['Command Line Interface (CLI)', 'File Permissions & Ownership', 'Package Management', 'Bash Scripting Basics'] },
      { week: 'Weeks 3-4', title: 'Linux Server Services', topics: ['SSH Configuration', 'Apache/Nginx Web Servers', 'Systemd & Cron Jobs', 'Basic iptables/ufw'] },
      { week: 'Weeks 5-6', title: 'Windows Server & AD', topics: ['Windows Server Installation', 'Active Directory Domain Services (AD DS)', 'Group Policy Objects (GPO)', 'DNS & DHCP Setup'] },
      { week: 'Weeks 7-8', title: 'Virtualization & Cloud Basics', topics: ['Hyper-V & VMware', 'Docker Fundamentals', 'Basic AWS/Azure Concepts', 'Backup & Restore Strategies'] }
    ]
  },
  {
    id: 'ccna',
    title: 'CCNA Preparation',
    level: 'Beginner to Intermediate',
    duration: '10 Weeks',
    description: 'Get ready for the Cisco Certified Network Associate (200-301) exam. Gain the knowledge to navigate and configure modern enterprise networks.',
    icon: '🌐',
    color: '#00bceb',
    heroBg: 'rgba(0, 188, 235, 0.1)',
    prerequisites: [
      'General IT knowledge',
      'No prior networking experience required'
    ],
    syllabus: [
      { week: 'Weeks 1-2', title: 'Network Fundamentals', topics: ['OSI & TCP/IP Models', 'IPv4 & IPv6 Addressing', 'Subnetting Mastery', 'Cabling and Hardware'] },
      { week: 'Weeks 3-4', title: 'Switching Technologies', topics: ['Cisco IOS Basics', 'VLANs & Inter-VLAN Routing', 'Spanning Tree Protocol (STP)', 'EtherChannel'] },
      { week: 'Weeks 5-6', title: 'Routing Technologies', topics: ['Routing Concepts', 'Static Routing', 'OSPF (Open Shortest Path First)', 'First Hop Redundancy (HSRP)'] },
      { week: 'Weeks 7-8', title: 'IP Services & Security', topics: ['NAT & PAT', 'NTP, DNS, DHCP', 'Access Control Lists (ACLs)', 'Port Security & Dynamic ARP Inspection'] },
      { week: 'Weeks 9-10', title: 'Automation & Exam Prep', topics: ['SDN Concepts', 'REST APIs & JSON', 'Network Management (SNMP, Syslog)', 'Practice Exams'] }
    ]
  },
  {
    id: 'networking',
    title: 'Networking Fundamentals',
    level: 'Beginner',
    duration: '6 Weeks',
    description: 'The perfect starting point for any IT or Cyber Security career. Learn how computers communicate across the globe from the ground up.',
    icon: '📡',
    color: '#a855f7',
    heroBg: 'rgba(168, 85, 247, 0.1)',
    prerequisites: [
      'Absolute beginners welcome'
    ],
    syllabus: [
      { week: 'Weeks 1-2', title: 'The Basics of Communication', topics: ['What is a Network?', 'LAN vs WAN', 'The OSI Reference Model', 'Cables & Connectors'] },
      { week: 'Weeks 3-4', title: 'Addressing & Protocols', topics: ['MAC Addresses vs IP Addresses', 'Intro to TCP and UDP', 'How DNS works', 'The role of DHCP'] },
      { week: 'Weeks 5-6', title: 'Hardware & Troubleshooting', topics: ['Routers vs Switches vs Hubs', 'Basic Wireless Concepts', 'Command line tools (ping, tracert, netstat)', 'Troubleshooting Methodology'] }
    ]
  },
  {
    id: 'firewall',
    title: 'Firewall Administration',
    level: 'Intermediate to Advanced',
    duration: '8 Weeks',
    description: 'Defend the perimeter. Deep dive into next-generation firewalls (NGFW) including Palo Alto, Fortinet, and pfSense configurations.',
    icon: '🧱',
    color: '#ef4444',
    heroBg: 'rgba(239, 68, 68, 0.1)',
    prerequisites: [
      'Solid networking fundamentals (equivalent to CCNA)',
      'Understanding of TCP/UDP ports and protocols'
    ],
    syllabus: [
      { week: 'Weeks 1-2', title: 'Firewall Concepts & Architecture', topics: ['Stateful vs Stateless Firewalls', 'Next-Generation Firewalls (NGFW)', 'Network Zones & Interfaces', 'Deployment Modes (Transparent/Routed)'] },
      { week: 'Weeks 3-4', title: 'Policies & Routing', topics: ['Creating Security Policies', 'Network Address Translation (NAT)', 'Policy-Based Routing (PBR)', 'High Availability (Active/Passive)'] },
      { week: 'Weeks 5-6', title: 'Advanced Threat Protection', topics: ['Intrusion Prevention Systems (IPS)', 'Web Filtering & Application Control', 'SSL/TLS Decryption', 'Antivirus & Sandboxing'] },
      { week: 'Weeks 7-8', title: 'VPNs & Troubleshooting', topics: ['Site-to-Site IPsec VPNs', 'Remote Access VPNs (SSL VPN)', 'Traffic Captures & Packet Logging', 'Log Analysis & Reporting'] }
    ]
  }
];
