# 🥗 MealMate – Your AI-Powered Daily Meal Planner

MealMate is a cross-platform mobile app that uses **AI** to help users plan their meals, discover recipes, and generate grocery lists — all tailored to their dietary needs, cooking time, and available ingredients. Built using **Flutter** and **Firebase AI Studio (Genkit)**, MealMate provides a smart and effortless solution to the daily question:  
**“What should I eat today?”**

---

## 💡 Features

- 🍽️ **AI-Generated Recipes** based on ingredients, diet, and preferences  
- 🛒 **Smart Grocery Lists** for weekly or daily meal prep  
- ⏱️ **Time-Sensitive Meal Plans** (e.g., 15-minute meals, under 30 min, etc.)  
- 🥦 **Dietary Customization** (e.g., vegan, keto, gluten-free, etc.)  
- 🔁 **Refresh & Save Plans** with history tracking  
- 🔐 **Secure Login** with Firebase Authentication  
- ☁️ **Cloud Sync** of meal plans and preferences using Firebase Firestore  
- 🌙 **Dark Mode Support** (optional)

---

## 🧱 Tech Stack

### 💬 Artificial Intelligence
- **Firebase AI Studio (Genkit)** – AI logic and prompt processing
- **Gemini API** – Natural language meal generation and grocery list creation
- **Prompt Engineering** – Custom prompts tailored to user input and context

### 🔥 Backend (Firebase)
- **Cloud Functions** – Hosts Genkit AI APIs
- **Firestore** – Stores users, preferences, and generated meals
- **Authentication** – Secure login/signup
- **Firebase Storage** – (optional) Save recipe or ingredient images

### 📱 Frontend
- **Flutter** – Cross-platform UI (Android & iOS)
- **HTTP/Dio** – API calls to Firebase and Genkit
- **Provider / Riverpod** – State management
- **Shared Preferences** – Store settings locally

---

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/7eb8e0bf-a94c-4b72-b525-c399ac98d5be)



---

## 🚀 Getting Started

### 🔧 Prerequisites
- Flutter SDK
- Node.js + npm
- Firebase CLI

### 🛠️ Local Setup

```bash
# Clone the repository
git clone https://github.com/your-username/mealmate.git
cd mealmate

# Install dependencies
npm install
flutter pub get

# Run Firebase functions locally
npx genkit dev

# Run Flutter app
flutter run
