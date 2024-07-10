# Movie Pagination Project Documentation

This project demonstrates how to implement pagination for displaying movie data using JavaScript. It fetches movie data from an API and allows users to navigate through different pages of movie listings.

## Table of Contents

-   [Project Structure](#project-structure)
-   [Dependencies](#dependencies)
-   [Setup and Installation](#setup-and-installation)
-   [Usage](#usage)
-   [Code Documentation](#code-documentation)

    -   [app.js](#appjs)
    -   [peticion.js](#peticionjs)

-   `index.html`: The main HTML file that serves as the entry point for the application.
-   `css/styles.css`: The CSS file for styling the application.
-   `js/app.js`: The JavaScript file that handles the pagination logic and user interactions.
-   `js/peticion.js`: The JavaScript file that contains the function for fetching movie data from the API.
-   `README.md`: This documentation file.

## Dependencies

This project has no external dependencies. It uses vanilla JavaScript and does not require any third-party libraries or frameworks.

## Setup and Installation

1. Clone the repository or download the project files.
2. Open the project in your preferred code editor.
3. Make sure you have the `peticion.js` file in the same directory as `app.js`, which contains the `cargarPeliculas` function to fetch movie data from the API.
4. Open the `index.html` file in a web browser to see the project in action.

## Usage

1. When the page loads, the initial set of movies will be displayed.
2. Use the "Anterior" (Previous) and "Siguiente" (Next) buttons to navigate through different pages of movie listings.
3. The project is currently set to fetch movie data from an API. You may need to modify the code or provide the necessary API credentials and configuration for the project to work correctly.

## Code Documentation

### app.js

This file contains the main logic for handling pagination and user interactions.

#### Functions

-   `cargarPeliculas(pagina)`: This function is imported from `peticion.js` and is responsible for fetching and displaying movie data for the specified page number.

#### Event Listeners

-   `DOMContentLoaded`: This event listener is triggered when the page has finished loading. It initializes the application by displaying a "Loading..." message and calling the `cargarPeliculas` function to load the initial set of movies.
-   `btnSiguiente.click`: This event listener is attached to the "Siguiente" (Next) button. When clicked, it increments the `pagina` variable (up to a maximum of 1000) and calls the `cargarPeliculas` function with the new page number to fetch and display the next set of movies.
-   `btnAnterior.click`: This event listener is attached to the "Anterior" (Previous) button. When clicked, it decrements the `pagina` variable (but not below 1) and calls the `cargarPeliculas` function with the new page number to fetch and display the previous set of movies.

### peticion.js

This file contains the function for fetching movie data from the API.

#### Functions

-   `cargarPeliculas(pagina)`: This function is responsible for making an API request to fetch movie data for the specified page number. The implementation of this function is not provided in the given code.
