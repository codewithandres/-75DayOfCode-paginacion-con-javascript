# 🎥 Movie Pagination with JavaScript

This project demonstrates how to implement pagination for displaying movie data using JavaScript. It fetches movie data from an API and allows users to navigate through different pages of movie listings. 🌐

## 🛠️ Technologies Used

- JavaScript 💻
- HTML 📄
- CSS 🎨

## 🚀 How it Works

1. The project uses an external JavaScript file (`peticion.js`) that contains a function `cargarPeliculas` to fetch movie data from an API. 📥

2. When the page loads, the `DOMContentLoaded` event listener is triggered, and the `cargarPeliculas` function is called to load the initial set of movies. 🏁

3. The project initializes a `paguina` (page) variable to keep track of the current page number. 📖

4. Two buttons, "Anterior" ⬅️ (Previous) and "Siguiente" ➡️ (Next), are used for navigation.

5. When the "Siguiente" ➡️ (Next) button is clicked, the `paguina` variable is incremented (up to a maximum of 1000), and the `cargarPeliculas` function is called with the new page number to fetch and display the next set of movies. 🔢

6. When the "Anterior" ⬅️ (Previous) button is clicked, the `paguina` variable is decremented (but not below 1), and the `cargarPeliculas` function is called with the new page number to fetch and display the previous set of movies. 🔢

## 🚀 Setup and Usage

1. Clone the repository or download the project files. 📥
2. Open the project in your preferred code editor. 💻
3. Make sure you have the `peticion.js` file in the same directory as `app.js`, which contains the `cargarPeliculas` function to fetch movie data from the API. 📂
4. Open the HTML file in a web browser to see the project in action. 🌐
5. Use the "Anterior" ⬅️ and "Siguiente" ➡️ buttons to navigate through different pages of movie listings. 🎬

Note: This project assumes that the `cargarPeliculas` function in `peticion.js` is correctly fetching and displaying movie data from the API. You may need to modify the code or provide the necessary API credentials and configuration for the project to work correctly. 🔑
