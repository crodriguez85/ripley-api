const express = require('express');
const port = 8000;
const routes = require('./routes/apiRoutes');
const cookieParser = require('cookie-parser');

const app = express();

app.use((req, res, next) => {
  const allowedDomains = ["http://localhost:3000", "http://0.0.0.0:3000"];
  const { origin } = req.headers;
  if (allowedDomains.indexOf(origin) > -1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, OPTIONS, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use('/', routes);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.listen(port, () => {
    console.log(`server listening on localhost:${port}/items`)
});