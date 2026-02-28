import fastify from "fastify";
const app = fastify();
app.get("/", () => {
    return "Hello World";
});
try {
    await app.listen({ port: 3000, host: "0.0.0.0" });
}
catch (error) {
    console.error(error);
}
