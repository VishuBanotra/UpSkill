import app from "./index.js";
import connectdb from "./Config/dbConfig.js";

const PORT = process.env.PORT;

// Database
connectdb();

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
