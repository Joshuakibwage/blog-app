import express from "express";
import cors from "cors";
import { readFileSync } from "fs";

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Read blogs data from JSON file
const blogs = JSON.parse(readFileSync("./src/utils/data.json", "utf8"));

// Routes
app.get("/", (req, res) => {
  res.send("Blog server is running!");
});

app.get("/blogs", (req, res) => {
  res.json(blogs);
});

app.get("/blogs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const blog = blogs.find((b) => b.id === id);

  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ message: "Blog not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
