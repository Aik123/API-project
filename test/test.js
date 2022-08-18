const chai = require("chai");
const { expect, assert } = require("chai");
const chaiHttp = require("chai-http");

const config = require("../knexfile");
const knex = require("knex")(config);

const { setupServer } = require("../server");
const app = setupServer();

chai.use(chaiHttp);

describe("lost_items", () => {
  let request;
  beforeEach(() => {
    request = chai.request(app);
  });

  describe("setup", () => {
    it("should connect to database", () => {
      knex.raw("select 1 as result").catch(() => {
        assert.fail("unable to connect to database");
      });
    });
    describe("get methods", () => {
      it("should get all from lost_items", async () => {
        const expected = await knex("lost_items").select();
        const res = await request.get("/api/lost_items");
        const actual = JSON.parse(res.text).all_items;
        expect(actual[0].description).to.eq(expected[0].description);
        expect(actual.length).to.eq(expected.length);
      });

      it("should get id from lost_items", async () => {
        const expected = await knex("lost_items").select().where({ id: 1 });
        const res = await request.get("/api/lost_items/1");
        const actual = JSON.parse(res.text);
        expect(actual.id).to.eq(expected.id);
      });
    });
    describe("post method", () => {
      it("should insert a new collumn into lost_item table", (done) => {
        request
          .post("/api/lost_items/new")
          .send({
            date_found: "2022-01-04",
            location_found: "H&Mの前",
            name: "バスケットボール",
            category: "スポーツ用品",
            description: "助けてちょ　ガマ口の下に　挟まれた",
            img_url: "https://i.ibb.co/brBvzy1/011-ball.jpg",
          })
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            done();
          });
      });
    });
    describe("patch method", () => {
      it("should update category to 野菜", async () => {
        await request
          .patch("/api/lost_items/edit/2")
          .send({ category: "野菜" });
        const actual = await knex("lost_items").select().where({ id: 2 });
        expect(actual[0].category).to.eq("野菜");
      });

      it("should return status code 204", (done) => {
        request
          .patch("/api/lost_items/edit/2")
          .send({ category: "生鮮食品" })
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(204);
            done();
          });
      });
    });
    describe("delete method", () => {
      it("should return 204", (done) => {
        request.delete("/api/lost_items/delete/4").end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(204);
          done();
        });
      });
      it("should return undefined", async () => {
        const expected = await knex("lost_items").select().where({ id: 4 })[0];
        expect(expected).to.eq(undefined);
      });
    });
  });
});
