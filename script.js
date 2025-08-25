// Global variables
let currentLanguage = 'en';
let currentTheme = 'light';

// Language and theme management
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    updateLanguage();
    updateDirection();
    savePreferences();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    updateTheme();
    savePreferences();
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en], [data-ar]');
    elements.forEach(element => {
        if (element.hasAttribute(`data-${currentLanguage}`)) {
            element.textContent = element.getAttribute(`data-${currentLanguage}`);
        }
    });
    
    // Update placeholders
    const inputs = document.querySelectorAll('[data-ar-placeholder]');
    inputs.forEach(input => {
        if (currentLanguage === 'ar') {
            input.placeholder = input.getAttribute('data-ar-placeholder');
        } else {
            input.placeholder = input.getAttribute('placeholder') || 'Enter your email';
        }
    });
    
    // Update language toggle button
    const langToggle = document.querySelector('.language-toggle span');
    if (langToggle) {
        langToggle.textContent = currentLanguage === 'en' ? 'العربية' : 'English';
    }
}

function updateDirection() {
    if (currentLanguage === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.body.classList.add('rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.body.classList.remove('rtl');
    }
}

function updateTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update theme toggle icon
    const themeToggle = document.querySelector('.theme-toggle i');
    if (themeToggle) {
        themeToggle.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

function savePreferences() {
    localStorage.setItem('cybersecurity-roadmap-language', currentLanguage);
    localStorage.setItem('cybersecurity-roadmap-theme', currentTheme);
}

function loadPreferences() {
    const savedLanguage = localStorage.getItem('cybersecurity-roadmap-language');
    const savedTheme = localStorage.getItem('cybersecurity-roadmap-theme');
    
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    if (savedTheme) {
        currentTheme = savedTheme;
    }
    
    updateLanguage();
    updateDirection();
    updateTheme();
}

// Modal functionality
function showPathDetails(pathType) {
    const modal = document.getElementById('pathModal');
    const modalContent = document.getElementById('modalContent');
    
    const pathData = getPathData(pathType);
    modalContent.innerHTML = pathData;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add fade-in animation
    modalContent.classList.add('fade-in');
}

function closePathModal() {
    const modal = document.getElementById('pathModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('pathModal');
    if (event.target === modal) {
        closePathModal();
    }
}

// Path data for each cybersecurity specialization
function getPathData(pathType) {
    const paths = {
        pentest: {
            en: {
                title: "Penetration Testing Career Path",
                overview: "Penetration testing is the practice of testing a computer system, network, or web application to find security vulnerabilities that an attacker could exploit.",
                skills: [
                    { name: "Network Fundamentals", level: "beginner" },
                    { name: "Linux Administration", level: "beginner" },
                    { name: "Web Technologies", level: "beginner" },
                    { name: "Scripting (Python/Bash)", level: "intermediate" },
                    { name: "Vulnerability Assessment", level: "intermediate" },
                    { name: "Exploitation Techniques", level: "intermediate" },
                    { name: "Social Engineering", level: "intermediate" },
                    { name: "Advanced Exploitation", level: "advanced" },
                    { name: "Custom Tool Development", level: "advanced" },
                    { name: "Red Team Operations", level: "advanced" }
                ],
                certifications: [
                    "CompTIA Security+",
                    "CEH (Certified Ethical Hacker)",
                    "OSCP (Offensive Security Certified Professional)",
                    "OSCE (Offensive Security Certified Expert)",
                    "GPEN (GIAC Penetration Tester)"
                ],
                tools: [
                    "Nmap - Network scanning",
                    "Metasploit - Exploitation framework",
                    "Burp Suite - Web application testing",
                    "Wireshark - Network analysis",
                    "Kali Linux - Penetration testing OS",
                    "Hashcat - Password cracking",
                    "John the Ripper - Password cracking",
                    "Aircrack-ng - Wireless security"
                ],
                learningPath: [
                    "Start with networking basics and Linux fundamentals",
                    "Learn web technologies (HTML, CSS, JavaScript, databases)",
                    "Study common vulnerabilities (OWASP Top 10)",
                    "Practice on vulnerable machines (TryHackMe, HackTheBox)",
                    "Learn scripting and automation",
                    "Study advanced exploitation techniques",
                    "Practice social engineering and physical security",
                    "Develop custom tools and exploits",
                    "Participate in bug bounty programs",
                    "Join red team operations"
                ]
            },
            ar: {
                title: "مسار مهنة اختبار الاختراق",
                overview: "اختبار الاختراق هو ممارسة اختبار نظام كمبيوتر أو شبكة أو تطبيق ويب للعثور على الثغرات الأمنية التي يمكن للمهاجم استغلالها.",
                skills: [
                    { name: "أساسيات الشبكات", level: "beginner" },
                    { name: "إدارة لينكس", level: "beginner" },
                    { name: "تقنيات الويب", level: "beginner" },
                    { name: "البرمجة النصية (Python/Bash)", level: "intermediate" },
                    { name: "تقييم الثغرات", level: "intermediate" },
                    { name: "تقنيات الاستغلال", level: "intermediate" },
                    { name: "الهندسة الاجتماعية", level: "intermediate" },
                    { name: "الاستغلال المتقدم", level: "advanced" },
                    { name: "تطوير الأدوات المخصصة", level: "advanced" },
                    { name: "عمليات الفريق الأحمر", level: "advanced" }
                ],
                certifications: [
                    "CompTIA Security+",
                    "CEH (محترف اختبار الاختراق المعتمد)",
                    "OSCP (محترف الأمن الهجومي المعتمد)",
                    "OSCE (خبير الأمن الهجومي المعتمد)",
                    "GPEN (اختبار الاختراق المعتمد من GIAC)"
                ],
                tools: [
                    "Nmap - فحص الشبكات",
                    "Metasploit - إطار الاستغلال",
                    "Burp Suite - اختبار تطبيقات الويب",
                    "Wireshark - تحليل الشبكات",
                    "Kali Linux - نظام تشغيل اختبار الاختراق",
                    "Hashcat - كسر كلمات المرور",
                    "John the Ripper - كسر كلمات المرور",
                    "Aircrack-ng - أمان الشبكات اللاسلكية"
                ],
                learningPath: [
                    "ابدأ بأساسيات الشبكات وأساسيات لينكس",
                    "تعلم تقنيات الويب (HTML, CSS, JavaScript, قواعد البيانات)",
                    "ادرس الثغرات الشائعة (OWASP Top 10)",
                    "تدرب على الأجهزة الضعيفة (TryHackMe, HackTheBox)",
                    "تعلم البرمجة النصية والأتمتة",
                    "ادرس تقنيات الاستغلال المتقدمة",
                    "تدرب على الهندسة الاجتماعية والأمان المادي",
                    "طور أدوات واستغلالات مخصصة",
                    "شارك في برامج مكافآت الأخطاء",
                    "انضم إلى عمليات الفريق الأحمر"
                ]
            }
        },
        analysis: {
            en: {
                title: "Security Analysis Career Path",
                overview: "Security analysts monitor and analyze security threats, investigate incidents, and develop strategies to protect organizations from cyber attacks.",
                skills: [
                    { name: "Security Fundamentals", level: "beginner" },
                    { name: "Network Security", level: "beginner" },
                    { name: "SIEM Tools", level: "intermediate" },
                    { name: "Threat Intelligence", level: "intermediate" },
                    { name: "Incident Analysis", level: "intermediate" },
                    { name: "Vulnerability Management", level: "intermediate" },
                    { name: "Risk Assessment", level: "advanced" },
                    { name: "Security Architecture", level: "advanced" },
                    { name: "Compliance Frameworks", level: "advanced" }
                ],
                certifications: [
                    "CompTIA Security+",
                    "GSEC (GIAC Security Essentials)",
                    "CISSP (Certified Information Systems Security Professional)",
                    "CISM (Certified Information Security Manager)"
                ],
                tools: [
                    "Splunk - SIEM platform",
                    "QRadar - Security analytics",
                    "ELK Stack - Log analysis",
                    "Nessus - Vulnerability scanner",
                    "OpenVAS - Open source vulnerability scanner",
                    "Wireshark - Network protocol analyzer"
                ],
                learningPath: [
                    "Build foundation in cybersecurity concepts",
                    "Learn network security and protocols",
                    "Master SIEM tools and log analysis",
                    "Study threat intelligence and indicators",
                    "Practice incident analysis and response",
                    "Learn vulnerability assessment and management",
                    "Understand risk assessment methodologies",
                    "Study security architecture and design",
                    "Learn compliance frameworks (ISO 27001, NIST, GDPR)"
                ]
            },
            ar: {
                title: "مسار مهنة تحليل الأمان",
                overview: "محللو الأمان يراقبون ويحللون التهديدات الأمنية، ويحققون في الحوادث، ويطورون استراتيجيات لحماية المؤسسات من الهجمات السيبرانية.",
                skills: [
                    { name: "أساسيات الأمان", level: "beginner" },
                    { name: "أمان الشبكات", level: "beginner" },
                    { name: "أدوات SIEM", level: "intermediate" },
                    { name: "استخبارات التهديدات", level: "intermediate" },
                    { name: "تحليل الحوادث", level: "intermediate" },
                    { name: "إدارة الثغرات", level: "intermediate" },
                    { name: "تقييم المخاطر", level: "advanced" },
                    { name: "الهندسة المعمارية الأمنية", level: "advanced" },
                    { name: "أطر الامتثال", level: "advanced" }
                ],
                certifications: [
                    "CompTIA Security+",
                    "GSEC (أساسيات الأمان من GIAC)",
                    "CISSP (محترف أمن نظم المعلومات المعتمد)",
                    "CISM (مدير أمن المعلومات المعتمد)"
                ],
                tools: [
                    "Splunk - منصة SIEM",
                    "QRadar - التحليلات الأمنية",
                    "ELK Stack - تحليل السجلات",
                    "Nessus - ماسح الثغرات",
                    "OpenVAS - ماسح الثغرات مفتوح المصدر",
                    "Wireshark - محلل بروتوكولات الشبكة"
                ],
                learningPath: [
                    "ابن أساسيات مفاهيم الأمن السيبراني",
                    "تعلم أمان الشبكات والبروتوكولات",
                    "أتقن أدوات SIEM وتحليل السجلات",
                    "ادرس استخبارات التهديدات والمؤشرات",
                    "تدرب على تحليل الحوادث والاستجابة",
                    "تعلم تقييم الثغرات وإدارتها",
                    "افهم منهجيات تقييم المخاطر",
                    "ادرس الهندسة المعمارية الأمنية والتصميم",
                    "تعلم أطر الامتثال (ISO 27001, NIST, GDPR)"
                ]
            }
        },
        incident: {
            en: {
                title: "Incident Response Career Path",
                overview: "Incident responders are cybersecurity professionals who handle security breaches and cyber attacks, working to contain threats and restore normal operations.",
                skills: [
                    { name: "Security Fundamentals", level: "beginner" },
                    { name: "Network Forensics", level: "intermediate" },
                    { name: "Malware Analysis", level: "intermediate" },
                    { name: "Incident Triage", level: "intermediate" },
                    { name: "Threat Containment", level: "intermediate" },
                    { name: "Recovery Procedures", level: "intermediate" },
                    { name: "Crisis Management", level: "advanced" },
                    { name: "Team Leadership", level: "advanced" }
                ],
                certifications: [
                    "GCIH (GIAC Certified Incident Handler)",
                    "GCFE (GIAC Certified Forensic Examiner)",
                    "CISSP (Certified Information Systems Security Professional)",
                    "SANS FOR508 (Advanced Incident Response)"
                ],
                tools: [
                    "Volatility - Memory forensics",
                    "Autopsy - Digital forensics platform",
                    "Sleuth Kit - File system analysis",
                    "EnCase - Commercial forensics tool",
                    "FTK Imager - Forensic imaging",
                    "LogRhythm - SIEM and response"
                ],
                learningPath: [
                    "Build strong security foundation",
                    "Learn network protocols and traffic analysis",
                    "Study malware analysis and reverse engineering",
                    "Practice incident triage and classification",
                    "Learn containment and eradication techniques",
                    "Master recovery and restoration procedures",
                    "Develop crisis management skills",
                    "Build team leadership capabilities"
                ]
            },
            ar: {
                title: "مسار مهنة الاستجابة للحوادث",
                overview: "المستجيبون للحوادث هم محترفون في الأمن السيبراني يتعاملون مع خروقات الأمان والهجمات السيبرانية، ويعملون على احتواء التهديدات واستعادة العمليات الطبيعية.",
                skills: [
                    { name: "أساسيات الأمان", level: "beginner" },
                    { name: "التحليل الجنائي للشبكات", level: "intermediate" },
                    { name: "تحليل البرمجيات الخبيثة", level: "intermediate" },
                    { name: "تصنيف الحوادث", level: "intermediate" },
                    { name: "احتواء التهديدات", level: "intermediate" },
                    { name: "إجراءات الاسترداد", level: "intermediate" },
                    { name: "إدارة الأزمات", level: "advanced" },
                    { name: "قيادة الفريق", level: "advanced" }
                ],
                certifications: [
                    "GCIH (معالج الحوادث المعتمد من GIAC)",
                    "GCFE (المحلل الجنائي المعتمد من GIAC)",
                    "CISSP (محترف أمن نظم المعلومات المعتمد)",
                    "SANS FOR508 (الاستجابة المتقدمة للحوادث)"
                ],
                tools: [
                    "Volatility - التحليل الجنائي للذاكرة",
                    "Autopsy - منصة التحليل الجنائي الرقمي",
                    "Sleuth Kit - تحليل نظام الملفات",
                    "EnCase - أداة التحليل الجنائي التجارية",
                    "FTK Imager - التصوير الجنائي",
                    "LogRhythm - SIEM والاستجابة"
                ],
                learningPath: [
                    "ابن أساسيات أمنية قوية",
                    "تعلم بروتوكولات الشبكات وتحليل حركة المرور",
                    "ادرس تحليل البرمجيات الخبيثة والهندسة العكسية",
                    "تدرب على تصنيف وتصنيف الحوادث",
                    "تعلم تقنيات الاحتواء والقضاء",
                    "أتقن إجراءات الاسترداد والاستعادة",
                    "طور مهارات إدارة الأزمات",
                    "ابن قدرات قيادة الفريق"
                ]
            }
        },
        forensics: {
            en: {
                title: "Digital Forensics Career Path",
                overview: "Digital forensics experts investigate cyber crimes, analyze digital evidence, and provide expert testimony in legal proceedings.",
                skills: [
                    { name: "Computer Science Fundamentals", level: "beginner" },
                    { name: "Operating Systems", level: "beginner" },
                    { name: "File Systems", level: "intermediate" },
                    { name: "Memory Analysis", level: "intermediate" },
                    { name: "Network Forensics", level: "intermediate" },
                    { name: "Mobile Forensics", level: "intermediate" },
                    { name: "Cloud Forensics", level: "advanced" },
                    { name: "IoT Forensics", level: "advanced" }
                ],
                certifications: [
                    "GCFE (GIAC Certified Forensic Examiner)",
                    "GCFA (GIAC Certified Forensic Analyst)",
                    "CFCE (Certified Forensic Computer Examiner)",
                    "EnCE (EnCase Certified Examiner)"
                ],
                tools: [
                    "EnCase - Commercial forensics suite",
                    "FTK - Forensic toolkit",
                    "Autopsy - Open source platform",
                    "Volatility - Memory analysis",
                    "X-Ways Forensics - Advanced forensics",
                    "Cellebrite - Mobile forensics"
                ],
                learningPath: [
                    "Study computer science fundamentals",
                    "Learn operating system internals",
                    "Master file system analysis",
                    "Study memory forensics",
                    "Learn network forensics",
                    "Practice mobile device forensics",
                    "Study cloud and IoT forensics",
                    "Develop legal and courtroom skills"
                ]
            },
            ar: {
                title: "مسار مهنة التحليل الجنائي الرقمي",
                overview: "خبراء التحليل الجنائي الرقمي يحققون في الجرائم السيبرانية، ويحللون الأدلة الرقمية، ويقدمون شهادات الخبراء في الإجراءات القانونية.",
                skills: [
                    { name: "أساسيات علوم الكمبيوتر", level: "beginner" },
                    { name: "أنظمة التشغيل", level: "beginner" },
                    { name: "أنظمة الملفات", level: "intermediate" },
                    { name: "تحليل الذاكرة", level: "intermediate" },
                    { name: "التحليل الجنائي للشبكات", level: "intermediate" },
                    { name: "التحليل الجنائي للهواتف المحمولة", level: "intermediate" },
                    { name: "التحليل الجنائي للسحابة", level: "advanced" },
                    { name: "التحليل الجنائي لإنترنت الأشياء", level: "advanced" }
                ],
                certifications: [
                    "GCFE (المحلل الجنائي المعتمد من GIAC)",
                    "GCFA (محلل التحليل الجنائي المعتمد من GIAC)",
                    "CFCE (محلل الكمبيوتر الجنائي المعتمد)",
                    "EnCE (محلل EnCase المعتمد)"
                ],
                tools: [
                    "EnCase - مجموعة التحليل الجنائي التجارية",
                    "FTK - مجموعة أدوات التحليل الجنائي",
                    "Autopsy - منصة مفتوحة المصدر",
                    "Volatility - تحليل الذاكرة",
                    "X-Ways Forensics - التحليل الجنائي المتقدم",
                    "Cellebrite - التحليل الجنائي للهواتف المحمولة"
                ],
                learningPath: [
                    "ادرس أساسيات علوم الكمبيوتر",
                    "تعلم تفاصيل أنظمة التشغيل",
                    "أتقن تحليل أنظمة الملفات",
                    "ادرس التحليل الجنائي للذاكرة",
                    "تعلم التحليل الجنائي للشبكات",
                    "تدرب على التحليل الجنائي للأجهزة المحمولة",
                    "ادرس التحليل الجنائي للسحابة وإنترنت الأشياء",
                    "طور المهارات القانونية وقاعة المحكمة"
                ]
            }
        },
        governance: {
            en: {
                title: "Security Governance Career Path",
                overview: "Security governance professionals develop and implement security policies, ensure compliance, and manage risk across organizations.",
                skills: [
                    { name: "Security Fundamentals", level: "beginner" },
                    { name: "Risk Management", level: "intermediate" },
                    { name: "Policy Development", level: "intermediate" },
                    { name: "Compliance Frameworks", level: "intermediate" },
                    { name: "Audit and Assessment", level: "intermediate" },
                    { name: "Business Continuity", level: "advanced" },
                    { name: "Strategic Planning", level: "advanced" },
                    { name: "Executive Communication", level: "advanced" }
                ],
                certifications: [
                    "CISSP (Certified Information Systems Security Professional)",
                    "CISM (Certified Information Security Manager)",
                    "CRISC (Certified in Risk and Information Systems Control)",
                    "CGEIT (Certified in the Governance of Enterprise IT)"
                ],
                tools: [
                    "GRC platforms (MetricStream, Archer)",
                    "Risk assessment tools",
                    "Compliance monitoring systems",
                    "Policy management systems",
                    "Audit and reporting tools"
                ],
                learningPath: [
                    "Build security foundation",
                    "Learn risk management methodologies",
                    "Study compliance frameworks",
                    "Practice policy development",
                    "Learn audit and assessment",
                    "Study business continuity planning",
                    "Develop strategic thinking",
                    "Build executive communication skills"
                ]
            },
            ar: {
                title: "مسار مهنة حوكمة الأمان",
                overview: "محترفو حوكمة الأمان يطورون وينفذون السياسات الأمنية، ويضمنون الامتثال، ويديرون المخاطر عبر المؤسسات.",
                skills: [
                    { name: "أساسيات الأمان", level: "beginner" },
                    { name: "إدارة المخاطر", level: "intermediate" },
                    { name: "تطوير السياسات", level: "intermediate" },
                    { name: "أطر الامتثال", level: "intermediate" },
                    { name: "المراجعة والتقييم", level: "intermediate" },
                    { name: "استمرارية الأعمال", level: "advanced" },
                    { name: "التخطيط الاستراتيجي", level: "advanced" },
                    { name: "التواصل التنفيذي", level: "advanced" }
                ],
                certifications: [
                    "CISSP (محترف أمن نظم المعلومات المعتمد)",
                    "CISM (مدير أمن المعلومات المعتمد)",
                    "CRISC (معتمد في إدارة المخاطر والتحكم في نظم المعلومات)",
                    "CGEIT (معتمد في حوكمة تقنية المعلومات المؤسسية)"
                ],
                tools: [
                    "منصات GRC (MetricStream, Archer)",
                    "أدوات تقييم المخاطر",
                    "أنظمة مراقبة الامتثال",
                    "أنظمة إدارة السياسات",
                    "أدوات المراجعة والتقارير"
                ],
                learningPath: [
                    "ابن أساسيات الأمان",
                    "تعلم منهجيات إدارة المخاطر",
                    "ادرس أطر الامتثال",
                    "تدرب على تطوير السياسات",
                    "تعلم المراجعة والتقييم",
                    "ادرس تخطيط استمرارية الأعمال",
                    "طور التفكير الاستراتيجي",
                    "ابن مهارات التواصل التنفيذي"
                ]
            }
        },
        cloud: {
            en: {
                title: "Cloud Security Career Path",
                overview: "Cloud security specialists protect cloud infrastructure, applications, and data from cyber threats while ensuring compliance and governance.",
                skills: [
                    { name: "Cloud Fundamentals", level: "beginner" },
                    { name: "Network Security", level: "beginner" },
                    { name: "Identity and Access Management", level: "intermediate" },
                    { name: "Data Protection", level: "intermediate" },
                    { name: "Cloud Compliance", level: "intermediate" },
                    { name: "DevSecOps", level: "intermediate" },
                    { name: "Multi-cloud Security", level: "advanced" },
                    { name: "Cloud Forensics", level: "advanced" }
                ],
                certifications: [
                    "AWS Certified Security - Specialty",
                    "Azure Security Engineer Associate",
                    "Google Cloud Professional Cloud Security Engineer",
                    "CCSP (Certified Cloud Security Professional)",
                    "SANS SEC510 (Public Cloud Security)"
                ],
                tools: [
                    "AWS Security Hub",
                    "Azure Security Center",
                    "Google Cloud Security Command Center",
                    "CloudTrail and CloudWatch",
                    "CloudFormation and Terraform",
                    "Prisma Cloud and Dome9"
                ],
                learningPath: [
                    "Learn cloud computing fundamentals",
                    "Study network security in cloud",
                    "Master identity and access management",
                    "Learn data protection and encryption",
                    "Study cloud compliance frameworks",
                    "Practice DevSecOps methodologies",
                    "Learn multi-cloud security",
                    "Study cloud forensics and incident response"
                ]
            },
            ar: {
                title: "مسار مهنة أمان السحابة",
                overview: "متخصصو أمان السحابة يحمون البنية التحتية السحابية والتطبيقات والبيانات من التهديدات السيبرانية مع ضمان الامتثال والحوكمة.",
                skills: [
                    { name: "أساسيات السحابة", level: "beginner" },
                    { name: "أمان الشبكات", level: "beginner" },
                    { name: "إدارة الهوية والوصول", level: "intermediate" },
                    { name: "حماية البيانات", level: "intermediate" },
                    { name: "امتثال السحابة", level: "intermediate" },
                    { name: "DevSecOps", level: "intermediate" },
                    { name: "أمان السحابة المتعددة", level: "advanced" },
                    { name: "التحليل الجنائي للسحابة", level: "advanced" }
                ],
                certifications: [
                    "AWS Certified Security - التخصص",
                    "Azure Security Engineer Associate",
                    "Google Cloud Professional Cloud Security Engineer",
                    "CCSP (محترف أمان السحابة المعتمد)",
                    "SANS SEC510 (أمان السحابة العامة)"
                ],
                tools: [
                    "AWS Security Hub",
                    "Azure Security Center",
                    "Google Cloud Security Command Center",
                    "CloudTrail و CloudWatch",
                    "CloudFormation و Terraform",
                    "Prisma Cloud و Dome9"
                ],
                learningPath: [
                    "تعلم أساسيات الحوسبة السحابية",
                    "ادرس أمان الشبكات في السحابة",
                    "أتقن إدارة الهوية والوصول",
                    "تعلم حماية البيانات والتشفير",
                    "ادرس أطر امتثال السحابة",
                    "تدرب على منهجيات DevSecOps",
                    "تعلم أمان السحابة المتعددة",
                    "ادرس التحليل الجنائي السحابي والاستجابة للحوادث"
                ]
            }
        },
        iot: {
            en: {
                title: "IoT Security Career Path",
                overview: "IoT security professionals protect connected devices, networks, and systems from cyber threats in the Internet of Things ecosystem.",
                skills: [
                    { name: "Embedded Systems", level: "beginner" },
                    { name: "Network Security", level: "beginner" },
                    { name: "Protocol Analysis", level: "intermediate" },
                    { name: "Device Security", level: "intermediate" },
                    { name: "Firmware Analysis", level: "intermediate" },
                    { name: "IoT Forensics", level: "intermediate" },
                    { name: "Industrial IoT Security", level: "advanced" },
                    { name: "IoT Threat Intelligence", level: "advanced" }
                ],
                certifications: [
                    "GIAC IoT Security (GICSP)",
                    "CompTIA IoT+",
                    "SANS ICS410 (ICS/SCADA Security)",
                    "IoT Security Foundation"
                ],
                tools: [
                    "Wireshark - Protocol analysis",
                    "Shodan - IoT device search",
                    "Nmap - Network scanning",
                    "Firmwalker - Firmware analysis",
                    "Binwalk - Binary analysis",
                    "Ghidra - Reverse engineering"
                ],
                learningPath: [
                    "Study embedded systems and microcontrollers",
                    "Learn IoT protocols and standards",
                    "Master network security for IoT",
                    "Study device security and hardening",
                    "Learn firmware analysis and reverse engineering",
                    "Practice IoT forensics",
                    "Study industrial IoT security",
                    "Develop IoT threat intelligence capabilities"
                ]
            },
            ar: {
                title: "مسار مهنة أمان إنترنت الأشياء",
                overview: "محترفو أمان إنترنت الأشياء يحمون الأجهزة المتصلة والشبكات والأنظمة من التهديدات السيبرانية في نظام إنترنت الأشياء.",
                skills: [
                    { name: "الأنظمة المدمجة", level: "beginner" },
                    { name: "أمان الشبكات", level: "beginner" },
                    { name: "تحليل البروتوكولات", level: "intermediate" },
                    { name: "أمان الأجهزة", level: "intermediate" },
                    { name: "تحليل البرامج الثابتة", level: "intermediate" },
                    { name: "التحليل الجنائي لإنترنت الأشياء", level: "intermediate" },
                    { name: "أمان إنترنت الأشياء الصناعية", level: "advanced" },
                    { name: "استخبارات تهديدات إنترنت الأشياء", level: "advanced" }
                ],
                certifications: [
                    "GIAC IoT Security (GICSP)",
                    "CompTIA IoT+",
                    "SANS ICS410 (أمان ICS/SCADA)",
                    "مؤسسة أمان إنترنت الأشياء"
                ],
                tools: [
                    "Wireshark - تحليل البروتوكولات",
                    "Shodan - البحث عن أجهزة إنترنت الأشياء",
                    "Nmap - فحص الشبكات",
                    "Firmwalker - تحليل البرامج الثابتة",
                    "Binwalk - تحليل الملفات الثنائية",
                    "Ghidra - الهندسة العكسية"
                ],
                learningPath: [
                    "ادرس الأنظمة المدمجة والمايكروكنترولرز",
                    "تعلم بروتوكولات ومعايير إنترنت الأشياء",
                    "أتقن أمان الشبكات لإنترنت الأشياء",
                    "ادرس أمان الأجهزة وتقويتها",
                    "تعلم تحليل البرامج الثابتة والهندسة العكسية",
                    "تدرب على التحليل الجنائي لإنترنت الأشياء",
                    "ادرس أمان إنترنت الأشياء الصناعية",
                    "طور قدرات استخبارات تهديدات إنترنت الأشياء"
                ]
            }
        },
        malware: {
            en: {
                title: "Malware Analysis Career Path",
                overview: "Malware analysts examine malicious software to understand its behavior, purpose, and impact, helping organizations defend against cyber threats.",
                skills: [
                    { name: "Programming Fundamentals", level: "beginner" },
                    { name: "Assembly Language", level: "intermediate" },
                    { name: "Reverse Engineering", level: "intermediate" },
                    { name: "Static Analysis", level: "intermediate" },
                    { name: "Dynamic Analysis", level: "intermediate" },
                    { name: "Behavioral Analysis", level: "intermediate" },
                    { name: "Advanced Malware", level: "advanced" },
                    { name: "Threat Intelligence", level: "advanced" }
                ],
                certifications: [
                    "GREM (GIAC Reverse Engineering Malware)",
                    "GXPN (GIAC Exploit Researcher and Advanced Penetration Tester)",
                    "SANS FOR610 (Reverse Engineering Malware)",
                    "CREA (Certified Reverse Engineering Analyst)"
                ],
                tools: [
                    "IDA Pro - Disassembler and debugger",
                    "Ghidra - Open source reverse engineering",
                    "x64dbg - Windows debugger",
                    "Process Monitor - System monitoring",
                    "Wireshark - Network analysis",
                    "Cuckoo Sandbox - Malware analysis",
                    "Yara - Pattern matching",
                    "VirusTotal - Online analysis"
                ],
                learningPath: [
                    "Build programming foundation",
                    "Learn assembly language",
                    "Study reverse engineering techniques",
                    "Master static analysis methods",
                    "Learn dynamic analysis and debugging",
                    "Practice behavioral analysis",
                    "Study advanced malware techniques",
                    "Develop threat intelligence capabilities"
                ]
            },
            ar: {
                title: "مسار مهنة تحليل البرمجيات الخبيثة",
                overview: "محللو البرمجيات الخبيثة يفحصون البرامج الضارة لفهم سلوكها والغرض منها وتأثيرها، مما يساعد المؤسسات على الدفاع ضد التهديدات السيبرانية.",
                skills: [
                    { name: "أساسيات البرمجة", level: "beginner" },
                    { name: "لغة التجميع", level: "intermediate" },
                    { name: "الهندسة العكسية", level: "intermediate" },
                    { name: "التحليل الثابت", level: "intermediate" },
                    { name: "التحليل الديناميكي", level: "intermediate" },
                    { name: "التحليل السلوكي", level: "intermediate" },
                    { name: "البرمجيات الخبيثة المتقدمة", level: "advanced" },
                    { name: "استخبارات التهديدات", level: "advanced" }
                ],
                certifications: [
                    "GREM (الهندسة العكسية للبرمجيات الخبيثة من GIAC)",
                    "GXPN (باحث الاستغلال ومختبر الاختراق المتقدم من GIAC)",
                    "SANS FOR610 (الهندسة العكسية للبرمجيات الخبيثة)",
                    "CREA (محلل الهندسة العكسية المعتمد)"
                ],
                tools: [
                    "IDA Pro - المفكك والمصحح",
                    "Ghidra - الهندسة العكسية مفتوحة المصدر",
                    "x64dbg - مصحح Windows",
                    "Process Monitor - مراقبة النظام",
                    "Wireshark - تحليل الشبكات",
                    "Cuckoo Sandbox - تحليل البرمجيات الخبيثة",
                    "Yara - مطابقة الأنماط",
                    "VirusTotal - التحليل عبر الإنترنت"
                ],
                learningPath: [
                    "ابن أساسيات البرمجة",
                    "تعلم لغة التجميع",
                    "ادرس تقنيات الهندسة العكسية",
                    "أتقن طرق التحليل الثابت",
                    "تعلم التحليل الديناميكي والتصحيح",
                    "تدرب على التحليل السلوكي",
                    "ادرس تقنيات البرمجيات الخبيثة المتقدمة",
                    "طور قدرات استخبارات التهديدات"
                ]
            }
        }
    };

    const path = paths[pathType];
    if (!path) return '<p>Path not found</p>';

    const data = path[currentLanguage];
    
    return `
        <div class="path-details">
            <h2>${data.title}</h2>
            <p>${data.overview}</p>
            
            <h3>${currentLanguage === 'en' ? 'Required Skills' : 'المهارات المطلوبة'}</h3>
            <ul>
                ${data.skills.map(skill => `
                    <li>${skill.name} <span class="skill-level ${skill.level}">${currentLanguage === 'en' ? skill.level : getArabicLevel(skill.level)}</span></li>
                `).join('')}
            </ul>
            
            <h3>${currentLanguage === 'en' ? 'Recommended Certifications' : 'الشهادات الموصى بها'}</h3>
            <ul>
                ${data.certifications.map(cert => `<li>${cert}</li>`).join('')}
            </ul>
            
            <h3>${currentLanguage === 'en' ? 'Essential Tools' : 'الأدوات الأساسية'}</h3>
            <ul>
                ${data.tools.map(tool => `<li>${tool}</li>`).join('')}
            </ul>
            
            <h3>${currentLanguage === 'en' ? 'Learning Path' : 'مسار التعلم'}</h3>
            <ol>
                ${data.learningPath.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
    `;
}

function getArabicLevel(level) {
    const levels = {
        'beginner': 'مبتدئ',
        'intermediate': 'متوسط',
        'advanced': 'متقدم'
    };
    return levels[level] || level;
}

// Newsletter form handling
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.newsletter-input').value;
            if (email) {
                alert(currentLanguage === 'en' ? 
                    'Thank you for subscribing! You will receive updates soon.' : 
                    'شكراً لك على الاشتراك! ستتلقى التحديثات قريباً.');
                this.querySelector('.newsletter-input').value = '';
            }
        });
    }
    
    // Load saved preferences
    loadPreferences();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + L to toggle language
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        toggleLanguage();
    }
    
    // Ctrl/Cmd + T to toggle theme
    if ((e.ctrlKey || e.metaKey) && e.key === 't') {
        e.preventDefault();
        toggleTheme();
    }
    
    // Escape to close modal
    if (e.key === 'Escape') {
        closePathModal();
    }
});

// Add loading animation to path cards
document.addEventListener('DOMContentLoaded', function() {
    const pathCards = document.querySelectorAll('.path-card');
    pathCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 100);
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.resource-category, .newsletter-content');
    animatedElements.forEach(el => observer.observe(el));
});

// Export functions for global access
window.toggleLanguage = toggleLanguage;
window.toggleTheme = toggleTheme;
window.showPathDetails = showPathDetails;
window.closePathModal = closePathModal;
