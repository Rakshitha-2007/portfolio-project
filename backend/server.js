const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const projects = [
  {
    title: "Portfolio Website",
    description: "Built using HTML, CSS, JavaScript and Node.js"
  },
  {
    title: "Student Mini Project",
    description: "Simple student management project"
  }
];

app.get('/projects', (req, res) => {
  res.json(projects);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});