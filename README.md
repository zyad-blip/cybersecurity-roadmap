# Cybersecurity Career Roadmap Website

A comprehensive, bilingual (English/Arabic) website that provides detailed career guidance for various cybersecurity specializations. The website features interactive roadmaps, learning resources, and professional development guidance for aspiring cybersecurity professionals.

## 🌟 Features

### 🎯 **8 Cybersecurity Career Paths**
- **Penetration Testing** - Learn ethical hacking and vulnerability assessment
- **Security Analysis** - Master threat analysis and defense strategies
- **Incident Response** - Handle security breaches and cyber attacks
- **Digital Forensics** - Investigate cyber crimes and analyze digital evidence
- **Security Governance** - Develop policies and ensure compliance
- **Cloud Security** - Secure cloud infrastructure and applications
- **IoT Security** - Protect connected devices and IoT networks
- **Malware Analysis** - Analyze and reverse engineer malicious software

### 🌍 **Bilingual Support**
- **English** - Primary language with professional cybersecurity terminology
- **Arabic** - Full Arabic translation with RTL (Right-to-Left) support
- **Language Toggle** - Easy switching between languages
- **Localized Content** - All content, including placeholders and UI elements

### 🎨 **Modern UI/UX**
- **Responsive Design** - Works perfectly on all devices
- **Dark/Light Theme** - Toggle between themes with persistent preferences
- **Interactive Cards** - Hover effects and smooth animations
- **Modal System** - Detailed information for each career path
- **Smooth Animations** - Fade-in effects and transitions

### 📚 **Learning Resources**
- **Free Courses** - Links to popular cybersecurity learning platforms
- **Certifications** - Industry-recognized cybersecurity certifications
- **Books** - Essential cybersecurity literature
- **Tools** - Professional cybersecurity tools and software

### ⌨️ **Keyboard Shortcuts**
- `Ctrl/Cmd + L` - Toggle language
- `Ctrl/Cmd + T` - Toggle theme
- `Escape` - Close modals

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation
1. Download or clone the project files
2. Open `index.html` in your web browser
3. The website will load with all features ready to use

### File Structure
```
cybersecurity-roadmap/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and theming
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Technical Details

### Frontend Technologies
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS variables and Grid/Flexbox
- **JavaScript (ES6+)** - Interactive functionality and language management
- **Font Awesome** - Professional icons
- **Google Fonts** - Inter (English) and Cairo (Arabic)

### Key Features Implementation
- **Language Management** - Data attributes for easy content switching
- **Theme System** - CSS variables for dynamic theming
- **RTL Support** - Full Arabic language support with proper text direction
- **Local Storage** - Persistent user preferences
- **Responsive Grid** - CSS Grid for adaptive layouts
- **Modal System** - Dynamic content loading for career paths

### Browser Compatibility
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🎯 Career Paths Details

Each career path includes:
- **Skill Requirements** - Categorized by beginner, intermediate, and advanced levels
- **Recommended Certifications** - Industry-recognized credentials
- **Essential Tools** - Professional software and platforms
- **Learning Path** - Step-by-step progression guide

### Example: Penetration Testing Path
- **Beginner Skills**: Network fundamentals, Linux administration, web technologies
- **Intermediate Skills**: Scripting, vulnerability assessment, exploitation techniques
- **Advanced Skills**: Custom tool development, red team operations
- **Certifications**: CompTIA Security+, CEH, OSCP, OSCE, GPEN
- **Tools**: Nmap, Metasploit, Burp Suite, Wireshark, Kali Linux

## 🌐 Language Support

### English Features
- Professional cybersecurity terminology
- Industry-standard certifications and tools
- Clear learning progression paths

### Arabic Features
- Full Arabic translation of all content
- RTL (Right-to-Left) text direction
- Arabic font optimization (Cairo)
- Localized placeholders and UI elements

## 🎨 Customization

### Adding New Career Paths
1. Add path data to the `getPathData()` function in `script.js`
2. Include both English and Arabic versions
3. Add corresponding HTML card in `index.html`

### Modifying Themes
- Edit CSS variables in `:root` and `[data-theme="dark"]`
- Colors, shadows, and spacing can be easily adjusted

### Adding Languages
- Implement new language data attributes
- Add language toggle functionality
- Include appropriate font families

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px+ (full grid layout)
- **Tablet**: 768px-1199px (adjusted grid)
- **Mobile**: 320px-767px (single column layout)

## 🔒 Security Features

- **XSS Protection** - Content is properly escaped
- **No External Dependencies** - Runs entirely locally
- **Secure Links** - External resources open in new tabs

## 🚀 Performance Features

- **Lazy Loading** - Content loads as needed
- **CSS Variables** - Efficient theming system
- **Minimal JavaScript** - Lightweight and fast
- **Optimized Fonts** - Web font optimization

## 🤝 Contributing

### Adding New Features
1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Test thoroughly
5. Submit a pull request

### Reporting Issues
- Use GitHub Issues for bug reports
- Include browser and OS information
- Provide steps to reproduce

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Font Awesome** for professional icons
- **Google Fonts** for typography
- **Cybersecurity Community** for content inspiration
- **Open Source Tools** referenced in the roadmaps

## 📞 Support

For questions or support:
- Create an issue in the repository
- Check the documentation
- Review the code comments

---

**Built with ❤️ for the cybersecurity community**

*Empowering the next generation of cybersecurity professionals with comprehensive guidance and resources.*
