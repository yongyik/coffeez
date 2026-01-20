
import app from "./app";
import { connectDB } from "./config/db";
import dotenv from "dotenv";

dotenv.config(); // 加载 .env 配置

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB(); // 先连接数据库
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
};

startServer();
