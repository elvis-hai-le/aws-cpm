/*
    The API~
    Basically, on a get request, we want to be able to pull data from the database into a json format and give to the user through http.
    And on a post request, we want to be able to get the information from the json and store it into the database via SQL queries.
*/

// Import required modules
const express = require('express');
const mysql = require('mysql');

// Create Express app
const app = express();
const PORT = 3306;

// Create a connection to the database
const connection = mysql.createConnection({
  host: '3.27.94.203',
  user: 'mitp2023',
  password: 'mitp2023',
  database: "AWS_CPM",
  port: 3306
});

//router
const awscpmRouter = require("./routes/aws-db-routes");


// Parse JSON request body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Define a route for handling GET requests to the root endpoint
app.get('/', (req, res) => {
    res.json({ message: "ok" });
});
app.use("/customer-details",awscpmRouter);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

// open the MySQL connection
connection.connect(error => {
  if (error){
      console.log("A error has been occurred "
          + "while connecting to database.");       
      throw error;
  }
   
  //If Everything goes correct, Then start Express Server
  app.listen(PORT, ()=>{
      console.log("Database connection is Ready and "
           + "Server is Listening on Port ", PORT);
  })
});
