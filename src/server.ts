import { app, http } from "./app";
import { AppDataSource } from "./data-source";

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  app.listen(process.env.PORT, () => {
    console.log("Servidor executando");
  });
  http.listen(3001, () => console.log("listening on http://localhost:3001"));
})();
