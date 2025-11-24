AI Tutoring Platform

(JavaScript, Python, MongoDB, Ollama Qwen 2.5 Coder, Pyodide, Docker, HTML/CSS, API, Graphviz)

An advanced interactive learning platform that teaches Python through real-time code execution, visual explanations, pseudocode generation, and AI-powered tutoring.
Powered by Pyodide, Graphviz, and Ollama using the Qwen 2.5 Coder model for high-quality coding assistance.

⚡ Quick Start
✅ Prerequisites

Before installation, ensure you have:

Python 3.7+

MongoDB (local or Atlas)

Ollama installed
👉 https://ollama.com/download

Qwen 2.5 Coder model installed (required)

Docker
Installation
1. Clone the Repository
git clone https://github.com/nandanap24/ai_tutor.git
cd ai_tutor

2. Backend Setup (Python)

Install all dependencies:

pip install -r requirements.txt


Configure environment variables:

cp .env.example .env

3. Install AI Model (Ollama)
📌 Primary Model Used in This Project
ollama pull qwen2.5-coder
Start Ollama service:

ollama serve

Troubleshooting
❗ “No Ollama models found”
ollama list
ollama pull qwen2.5-coder
ollama serve
