# LeetCode Profile Stats Viewer

A full-stack web application that fetches and displays detailed statistics and profiles of LeetCode users. This project utilizes the LeetCode GraphQL API to gather comprehensive user data and presents it in a clean, user-friendly interface with data visualizations.

## Features

-   **User Profile Search:** Find any LeetCode user by their username.
-   **Comprehensive Statistics:** View a wide array of stats, including:
    -   Total problems solved and acceptance rate.
    -   Breakdown of solved problems by difficulty (Easy, Medium, Hard).
    -   Ranking and reputation points.
    -   Social links to GitHub and LinkedIn profiles.
-   **Data Visualizations:**
    -   An interactive pie chart to visualize the user's acceptance rate.
    -   A bar chart showing the number of questions solved for each difficulty level.
-   **Language Proficiency:** See a list of programming languages used and the number of problems solved in each.

## Technologies Used

### Frontend

-   **React:** A JavaScript library for building user interfaces.
-   **Vite:** A modern frontend build tool.
-   **React Router:** For declarative routing in the React application.
-   **Axios:** For making HTTP requests to the backend API.
-   **Recharts:** A composable charting library built on React components.
-   **Tailwind CSS:** A utility-first CSS framework for styling.

### Backend

-   **Node.js:** A JavaScript runtime environment.
-   **Express:** A minimal and flexible Node.js web application framework.
-   **GraphQL:** The backend communicates with the official **LeetCode GraphQL API** to fetch user data.
-   **Axios:** Used to send GraphQL query requests to the LeetCode API.
-   **CORS:** To handle cross-origin resource sharing.
-   **Dotenv:** To manage environment variables securely.

---

## Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

-   Node.js (v14 or later)
-   npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/uditc0derr/LeetCodeProfilExt](https://github.com/uditc0derr/LeetCodeProfilExt)
    cd leetcodeprofilext
    ```

2.  **Set up the Backend:**
    ```sh
    cd backend
    npm install
    ```

3.  **Set up the Frontend:**
    ```sh
    cd ../frontend
    npm install
    ```

### Running the Application

1.  **Start the Backend Server:**
    Navigate to the `backend` directory and run:
    ```sh
    npm start
    ```
    The server will start on `http://localhost:5000`.

2.  **Start the Frontend Development Server:**
    In a separate terminal, navigate to the `frontend` directory and run:
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

---

## GraphQL Usage

The backend service acts as a proxy and data aggregator for the official LeetCode GraphQL API. It constructs and sends queries to fetch specific data points about a user.

The GraphQL queries are defined in `backend/src/config/graphqlQueries.js` and cover the following data scopes:
-   `userPublicProfile`: Fetches general profile information like real name, ranking, avatar, and social links.
-   `userProblemsSolved`: Retrieves statistics on solved problems, submission counts, and acceptance rates broken down by difficulty.
-   `skillStats`: Gathers information about problems solved across different skill tags (e.g., advanced, intermediate).
-   `languageStats`: Fetches the count of problems solved for each programming language.

These queries are then sent from the `leetcodeService.js` to the LeetCode GraphQL endpoint (`https://leetcode.com/graphql`).

---

## License

This project is open-source and available under the MIT License.
