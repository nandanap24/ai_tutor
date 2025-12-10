// backend/server.js
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

const uri = "mongodb://localhost:27017"; // Your local MongoDB
const client = new MongoClient(uri);

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db("ai_tutor");
    console.log("Connected to database: ai_tutor");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
}
connectDB();

// API: Get random question by level
app.get("/api/question/:level", async (req, res) => {
  let level = req.params.level;

  // Fix case: easy → Easy, EASY → Easy
  level = level.charAt(0).toUpperCase() + level.slice(1).toLowerCase();

  console.log(`Request received for level: ${level}`);

  try {
    const questions = await db
      .collection("questions")
      .find({ level: level })
      .toArray();

    if (questions.length === 0) {
      return res.status(404).json({ error: `No ${level} questions found` });
    }

    // Pick random question
    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];

    res.json({
      sl: randomQuestion.sl,
      question: randomQuestion.question,
      topic: randomQuestion.topic,
      correctPseudocode: randomQuestion.pseudocode.replace(/\\n/g, "\n").trim(),
    });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
  console.log(`Test Easy: http://localhost:5000/api/question/Easy`);
});
