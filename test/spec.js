const { expect } = require("chai");
const { syncAndSeed } = require("../db");
const app = require("supertest")(require("../app"));

describe("a test can run", () => {
  it("runs a test", () => {
    expect(5).to.equal(5);
  });
});
describe("Routes", () => {
  before(() => syncAndSeed());
});
describe("GET /api/movies", () => {
  it("returns all the movies", async () => {
    const response = await app.get("/api/movies");
    expect(response.status).to.equal(200);
    expect(response.body.length).to.equal(4);
  });
});
