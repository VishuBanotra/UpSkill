import app from ".";
import connectdb from "../src/config/dbConfig";

const PORT = process.env.PORT || 5000;

connectdb();

app.listen(PORT, () => {
  console.log(`Server is Listening on PORT : ${PORT}`);
});
