import { app } from "./app";
import { AppDataSource } from "./data-source";
import { http } from "./socket";

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  app.listen(process.env.PORT, () => {
    console.log("Servidor executando");
  });
  http.listen(3003, () => console.log("listening on http://localhost:3003"));
})();
