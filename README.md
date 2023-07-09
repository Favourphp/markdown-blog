Getting Started
To get started with this project, follow the steps below:

Prerequisites
Make sure you have the following software installed on your machine:

Node.js: Download Node.js
Installation
Clone this repository to your local machine or download it as a ZIP file.
Navigate to the project's root directory.
Run the following command to install the project dependencies:
npm install

Create a .env file in the project's root directory and provide the necessary configuration options. Refer to the .env file for the required environment variables.
Usage
To start the server, run the following command in the project's root directory:
npm start

This will start the server on http://localhost:5000.

Open your web browser and visit http://localhost:5000 to access the article posting interface.

Dependencies
This project utilizes the following dependencies:

dompurify: A DOM-only XSS sanitizer for HTML, MathML, and SVG.
ejs: A simple yet powerful JavaScript template engine.
dotenv: Loads environment variables from a .env file into process.env.
jsdom: A JavaScript implementation of the W3C DOM.
marked: A full-featured markdown parser and compiler.
marked-gfm-heading-id: Plugin for marked that adds GitHub Flavored Markdown heading IDs.
marked-mangle: Plugin for marked that adds character mangled HTML IDs for heading anchors.
method-override: Overrides HTTP verbs for RESTful services.
mongoose: An elegant MongoDB object modeling tool.
slugify: A slug generator for JavaScript.
File Structure
The project follows a standard file structure:

server.js: The main entry point of the application.
models/: Defines the Mongoose models for articles.
db/: This is where the database management code is stored.
routes/: Contains route definitions for different URL paths.
views/: Contains the EJS templates for rendering the views.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.

Acknowledgments
This project was developed with the help of the following open-source libraries and frameworks:

Express
dompurify
ejs
dotenv
jsdom
marked
marked-gfm-heading-id
marked-mangle
method-override
mongoose
slugify
Contact
If you have any questions or need further assistance, feel free to contact the project maintainer at your-favourchika02@gmail.com.




W



