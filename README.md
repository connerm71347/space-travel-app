# 🚀 Space Travel

## 🌌 Project Overview

This React application allows users to view, create, destroy, and move spacecraft from planet to planet within our solar system.

You can navigate through the app using the navbar at the top of the page — guiding you to the **Home**, **Spacecraft**, and **Planets** pages.

---

## Features

### 🏠 Home Page

- The **Home** page features fun images and text to add personality and visual interest.
- You can also navigate between the different pages via the navbar.

### 🚀 Spacecraft Page

- Preview all active spacecraft.
- Decommission (destroy) spacecraft.
- View individual spacecraft details.
- Build new spacecraft using a form with the following fields:

  - Name
  - Capacity
  - Description
  - Image URL

- Navigate to the **Build** page and each spacecraft's **Detail** page.

### 📄 Spacecraft Details Page

- View a detailed card including:
  - Spacecraft photo
  - Description
  - Capacity
  - Current planet location

### 🛠️ Spacecraft Construct Page

- Use a form to build a new spacecraft by entering:
  - Name
  - Capacity
  - Description
  - Image URL

## 🧱Tech Stack

### Frontend

- **React** – For building the user interface
- **React Router DOM** – For client-side routing
- **PropTypes** – For runtime type-checking of component props
- **nanoid** – For generating unique IDs
- **CSS** – For styling components and layout

### Development Tools

- **Vite** – Frontend build tool (fast dev server, optimized builds)
- **ESLint** – For maintaining clean, consistent code
- **eslint-plugin-react** / **react-hooks** – For linting React-specific code and hooks
- **Prettier** – For automatic code formatting

### Testing

- **Vitest** – Test runner
- **@testing-library/react** – For testing React components
- **@testing-library/user-event** – For simulating user actions
- **@testing-library/jest-dom** – For extended DOM matchers (like `.toBeInTheDocument()`)
- **jsdom** – JavaScript-based DOM implementation for testing

## 📦Installation Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/conner-manguso/space-travel-app.git
   cd space-travel

   ```

2. **Install dependencies:**

```bash
npm install
```

Make sure you have **Node.js** installed

3. **Start the development server:**

```bash
 npm run dev
```

This will start the app at http://localhost:5173/.

4. **Run tests (optional):**

```bash
 npm test
```

To run the unit tests:

## 🖥️ Usage Instructions

1. **Navigate Between Pages:**

   - Use the top navigation bar to switch between the **Home**, **Spacecraft**, and **Planets** pages.

2. **Build a New Spacecraft:**

   - Go to the **Spacecraft** page and click "Build New Craft".
   - Fill in the form fields: **Name**, **Capacity**, **Description**, and an **Image URL**.
   - Click **Submit** to add your custom spacecraft to the fleet.

3. **View Spacecraft Details:**

   - From the **Spacecraft** page, click on any spacecraft to view its detailed profile.
   - You’ll see its image, stats, and current location.

4. **Decommission a Spacecraft:**

   - On the **Spacecraft** or **Details** page, click the **Destroy** button to decommission it.

5. **Dispatch Spacecraft:**

   - Visit the **Planets** page and click on a planet to dispatch a selected spacecraft to that location (if implemented).

6. **Visual Flair:**
   - The **Home** page includes fun space imagery and text to enhance the experience!

## 📁Folder Srtucture

|---Space Travel
| |----src/ # Application source code
| |----components/ # Reusable components
| |---**tests**/ # Testing
| |--SpacecraftCard.test.jsx
| |--ErrorMessage.jsx
| |--Loader.jsx
| |--SpacecraftCard.jsx
| |----layouts/ # Layout components
|--RootLayout.jsx
|--SpacecraftLayout.jsx
| |----pages/ # The different route-level pages
|---spacecraft
|--ConstructPage.jsx
|--SpacecraftPage.jsx
|--SpacecraftDetailsPage.jsx
|--HomePage.jsx  
 |--NotFound.jsx  
 |--PlanetsPage.jsx  
| |----routes/ # Routes to get around the application
|--AppRouter.jsx
| |----services/ # The provided api wrapper for localStorage mock API
|--SpaceTravelApi.js
|--SpaceTravelMockApi.js
| |----styles/ # CSS styles for the application
|--components.css
|--forms.css
|--HomePage.css
|--layout.css
|--planets.css
|--spacecraft.css
| |----App.jsx
| |----index.css
| |----main.jsx
| |----index.html/ # Vite level HTML
| |----README.md/ # You are here!
| |----package-lock.json
| |----package.json/ # Project metadata and dependencies
| |----vite.config.js/ # Vite configuration
