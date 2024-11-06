import express from "express";
const app = express();
import cors from "cors";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    route: "/",
    status: "working",
  });
});

app.get("/someroute", (req, res) => {
  res.json({
    success: true,
    route: "/someroute",
  });
});

app.get("/withquery", (req, res) => {
  const { q1, q2 } = req.query;
  res.json({
    success: true,
    route: "/withquery",
    queries: {
      q1,
      q2,
    },
  });
});

app.listen(3000, () => {
  console.log("server on 3000");
});
