const express = require("express");
const knex = require("knex");
const knexfile = require("./knexfile");

const db = knex(knexfile);

const setupServer = () => {
  const app = express();
  app.use(express.json());

  //htlmファイルを表示
  app.use(express.static("front-end"));
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/front-end/index.html");
  });

  app.get("/api/lost_items", async (req, res) => {
    const allItems = await db("lost_items").select();
    res.status(200).json({ all_items: allItems });
  });

  app.get("/api/lost_items/:id", async (req, res) => {
    const targetId = req.params.id;

    const lostItem = await db("lost_items").select().where({ id: targetId });
    res.status(200).json({ lost_items: lostItem });
  });

  app.post("/api/lost_items/new", async (req, res) => {
    const input = req.body;

    await db("lost_items").insert({
      date_found: input.date_found,
      location_found: input.location_found,
      name: input.name,
      category: input.category,
      description: input.description,
      img_url: input.img_url,
    });
    res.status(201).json("The data has been successfully added!");
  });

  app.patch("/api/lost_items/edit/:id", async (req, res) => {
    const targetId = req.params.id;
    const input = req.body;

    await db("lost_items").where({ id: targetId }).update({
      category: input.category,
    });
    res.status(204).send("updated the data");
  });

  app.delete("/api/lost_items/delete/:id", async (req, res) => {
    const targetId = req.params.id;
    await db("lost_items").where({ id: targetId }).del();
    res.status(204).send("The data has been successfully deleted!");
  });

  return app;
};

module.exports = { setupServer };
