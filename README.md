# Mealify - Recipe Finder App 🍳

Mealify is a modern, beautiful, and responsive web application built with React and Vite that allows users to search for recipes, view detailed cooking instructions, and save their favorite meals. It leverages **TheMealDB API** to provide a vast collection of recipes from around the world.

![Mealify App Screenshot](https://via.placeholder.com/1200x600?text=Mealify+App+Screenshot)
*(Note: Replace with actual screenshot)*

## ✨ Features

- **🔍 Smart Search**: Instantly find recipes by name with debounced search functionality.
- **🌊 Modern UI/UX**: Features a stunning glassmorphism design, smooth animations, and a premium aesthetic using Tailwind CSS.
- **🌓 Dark/Light Mode**: Fully supported theme toggle for comfortable viewing day or night.
- **❤️ Favorites**: Save your best-loved recipes to your local storage so they are always ready.
- **📱 Fully Responsive**: Optimized for all devices, from desktops to mobile phones.
- **🥑 Detailed Recipes**: View ingredients, measurements, and step-by-step cooking instructions.
- **💡 Recommendations**: Get curated seafood recommendations on the home page.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) (Vite)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **HTTP Client**: Axios
- **API**: [TheMealDB](https://www.themealdb.com/api.php)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Pratham7249/Mealify-ReactApp.git
    cd Mealify-ReactApp
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**
    Create a `.env` file in the root directory and add the following:
    ```env
    VITE_API_BASE_URL=https://www.themealdb.com/api/json/v1/1
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

5.  Open your browser and navigate to `http://localhost:5173`.

## 📂 Project Structure

```
src/
├── components/      # Reusable UI components (Navbar, RecipeCard, Loader)
├── pages/           # Page components (Home, RecipeDetails, Favorites)
├── store/           # Redux slices and store configuration
├── utils/           # Helper functions and API setup
├── App.jsx          # Main application component with routes
└── main.jsx         # Entry point
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
