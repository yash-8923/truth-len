

# TruthLens - AI-Powered Hiring Verification Platform

**Trust your hiring process again.**

TruthLens is an intelligent hiring verification platform that helps you verify candidate authenticity through comprehensive analysis of CVs, LinkedIn profiles, GitHub account.

🌐 **Live Demo**: [TruthLens.click](http://TruthLens.click/)

---

## ✨ Features

### 🔍 **Multi-Source Profile Analysis**
- **CV Processing**: Extracts and analyzes professional experience, education, skills, and credentials
- **LinkedIn Integration**: Cross-references LinkedIn data with CV information for consistency
- **GitHub Analysis**: Evaluates coding activity, repository quality, and technical skills
- **Credibility Scoring**: AI-powered authenticity assessment with detailed flags and recommendations


### 🎯 **Real-Time Interview Support**
- **Live Feedback**: Get real-time prompts during candidate interviews
- **Inconsistency Detection**: Flags discrepancies between sources on-the-fly


### 📊 **Comprehensive Dashboard**
- **Candidate Profiles**: Unified view of all candidate information
- **Processing Pipeline**: Real-time status tracking from upload to analysis
- **Flag Management**: Visual indicators for potential concerns
- **Export Reports**: Detailed hiring decision support documents

---

## 🛠️ Technology Stack

### **Frontend**
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern styling framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Smooth animations

### **AI & Analysis**

- **Ibm watsonx orchestrate** -powerful orchestration tool for AI workflows

- **PDF Processing** - Automated document parsing and extraction

### **Infrastructure**

- **File Storage** - Local JSON-based data persistence
- **Real-time Processing** - Async job processing

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+
- Docker (for production deployment)
- API keys for external services

### **Development Setup**

1. **Clone the repository**
   ```bash
   git clone https://github.com/username/TruthLens.git
   cd TruthLens
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```

  
   
4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

---







### **Manual Deployment**

1. **Build the application**
   ```bash
   cd frontend
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

---

## 🔌 API Endpoints

### **Applicant Management**
- `GET /api/applicants` - List all applicants
- `POST /api/applicants` - Create new applicant with CV/LinkedIn/GitHub
- `GET /api/applicants/[id]` - Get specific applicant
- `PUT /api/applicants/[id]` - Update applicant information
- `DELETE /api/applicants/[id]` - Delete applicant


### **Processing Pipeline**
- File upload → CV/LinkedIn parsing → GitHub analysis → AI credibility assessment → Reference verification

---

## 📖 Usage Guide

### **Adding a New Candidate**

1. **Navigate to the dashboard**: `/board`
2. **Click "Add New Applicant"**
3. **Upload required documents**:
   - CV (PDF, DOC, DOCX) - **Required**
   - LinkedIn Profile (PDF, HTML, TXT) - *Optional*
   - GitHub Profile URL - *Optional*
4. **Submit and wait for processing**




---

## 🔧 Configuration


### **Processing Limits**
- **GitHub Repositories**: 50 per analysis
- **Content Analysis**: 3 repositories max
- **File Size**: 10MB per document
- **Concurrent Processing**: 3 applicants

### **Security Features**
- Environment variable validation
- File type restrictions
- Input sanitization
- Rate limiting on API endpoints

---

## 🚨 Troubleshooting

### **Common Issues**



**CV processing fails**
- Ensure PDF is not password protected
- Check file size is under 10MB
- Verify API_KEY is set correctly



## 🤝 Contributing

We welcome contributions for:
- Code style guidelines
- Testing procedures
- Feature request process
- Bug reporting


---


