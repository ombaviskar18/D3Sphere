React + Vite for D3Sphere

This project is built using React and Vite, designed to handle DNS-based name resolution, bridging Web2 and Web3 seamlessly. It provides functionality for:

Forward Resolution: Convert DNS names into wallet addresses for user-friendly transactions.

Reverse Resolution: Map wallet addresses back to DNS names for easy identification.

Features

React + Vite setup for fast development and HMR (Hot Module Replacement).

Functional components for forward and reverse resolution.

Tailored user interface with hover effects and input validation.

Installation and Setup

Prerequisites

Ensure you have the following installed:

Node.js (version 16 or higher recommended)

npm or yarn

Steps

Clone the repository:

git clone <repository-url>
cd <project-directory>

Install dependencies:

npm install

Start the development server:

npm run dev

Your application should now be running at http://localhost:3000.

Usage

Forward Resolution

Enter a DNS name (e.g., mywallet.com) in the input field under "Forward Resolution".

Click the "Convert" button.

The output will display the resolved wallet address.

Reverse Resolution

Enter a wallet address (e.g., 0x123456789abcdef123456789abcdef1234567890) in the input field under "Reverse Resolution".

Click the "Convert" button.

The output will display the resolved DNS name.

Project Structure

.
├── public          # Static assets
├── src
│   ├── components  # React components
│   │   └── Service.jsx  # Main Service component
│   ├── App.jsx     # Application entry point
│   ├── main.jsx    # Vite entry point
│   └── styles.css  # Global styles
└── vite.config.js  # Vite configuration

Plugins

This project uses the following official Vite plugins:

@vitejs/plugin-react: Uses Babel for Fast Refresh.

@vitejs/plugin-react-swc: Uses SWC for Fast Refresh.

Future Enhancements

Integration with blockchain APIs for live DNS and wallet address mapping.

Improved error handling and validation.

Enhanced UI/UX with animations and additional features.

Contributing

Feel free to fork the repository and submit pull requests for new features or bug fixes.

License

This project is open-source and available under the MIT License.

