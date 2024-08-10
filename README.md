# Golden Baggy

## What I Used:
- **Components:** The project primarily utilizes components from [Shadcn UI](https://ui.shadcn.com/), a collection of React components. Some components, like `InfoStrip.tsx`, have been custom-made specifically for this project.
- **Front-end Development Server:** The project is built using Vite with React and TypeScript.
- **Front-end Framework:** Tailwind CSS is used as the styling framework, which is also the base framework for Shadcn UI.

## Project Structure:
The project is organized as follows:

├── node_modules/ # Project dependencies
├── public/ # Public assets such as images and other files used on the website
│ └── ...
├── src/ # Source code for the website
│ ├── components/ # React components used throughout the website
│ │ ├── ui/ # Shadcn UI components
│ │ └── ... # Custom components (e.g., InfoStrip.tsx)
│ ├── App.tsx # Main application component
│ ├── main.tsx # Entry point for the React application
│ ├── index.css # Global CSS styles
│ ├── reset.css # CSS reset to standardize styles across browsers
│ └── ...
└── ...


## Explanation:
- **node_modules:** Contains all the npm dependencies required by the project.
- **public:** A directory where you can place static assets such as images, icons, and other files that need to be accessible by the browser.
- **src:** The main source code for the project. This includes:
  - **components:** A directory that houses all the reusable React components. Within this directory:
    - **ui:** Contains components provided by Shadcn UI.
    - Other folders or files represent custom components built specifically for this project.
  - **App.tsx:** The root component that integrates all other components and renders the application.
  - **main.tsx:** The entry point for the React application where the rendering process begins.
  - **index.css:** Global styles that apply across the entire application.
  - **reset.css:** Ensures consistent styling across different browsers by resetting default CSS properties.

Feel free to explore each directory and file to understand the structure and functionality better.
