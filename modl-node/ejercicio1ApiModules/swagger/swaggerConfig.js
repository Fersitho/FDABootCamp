import swaggerJSDoc from "swagger-jsdoc"

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Api Events Company",
      version: "1.0.0",
      description: "Exercice Api RestFull Nodejs Express MongoDB",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swagger = swaggerJSDoc(options);

export default swagger;