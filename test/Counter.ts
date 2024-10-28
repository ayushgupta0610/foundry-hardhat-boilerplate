// test/Counter.test.ts
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Counter Contract", function () {
  let counter: any;

  beforeEach(async function () {
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    console.log("Counter address: ", await counter.getAddress());
  });

  it("should set the number correctly", async function () {
    await counter.setNumber(5);
    expect(await counter.number()).to.equal(5);
  });

  it("should increment the number", async function () {
    await counter.setNumber(5);
    await counter.increment();
    expect(await counter.number()).to.equal(6);
  });
});
