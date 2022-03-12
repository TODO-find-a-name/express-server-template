import { Application } from "express";
import swaggerUi from "swagger-ui-express";

/**
 * Sets up Swagger UI for the given Express application at the /docs endpoint.
 *
 * @param app - The Express application instance.
 */
export default function setupSwaggerUi(app: Application): void {
  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
      },
    })
  );
}