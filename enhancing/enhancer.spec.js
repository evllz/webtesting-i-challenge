const enhancer = require("./enhancer.js");
// test away!

const items = [
  {
    name: "excalibur",
    durability: 100,
    enhancement: 20,
  },
  {
    name: "long sword",
    durability: 15,
    enhancement: 0,
  },
  {
    name: "gorgon shield",
    durability: 85,
    enhancement: 10,
  },
  {
    name: "wood bow",
    durability: 25,
    enhancement: 0,
  },
];

describe("enhancer test suit", () => {
  test("enhancer success at max~!", () => {
    let expected_value = {
      name: "excalibur",
      durability: 100,
      enhancement: 20,
    };
    expect(enhancer.success(items[0])).toEqual(expected_value);
  });
  test("enhancer success~!", () => {
    let expected_value = {
      name: "long sword",
      durability: 15,
      enhancement: 1,
    };
    expect(enhancer.success(items[1])).toEqual(expected_value);
  });
  test("enhancer failes at max~!", () => {
    let expected_value = {
      name: "excalibur",
      durability: 90,
      enhancement: 19,
    };
    expect(enhancer.fail(items[0])).toEqual(expected_value);
  });
  test("enhancer failes at max~!", () => {
    let expected_value = {
      name: "gorgon shield",
      durability: 80,
      enhancement: 10,
    };
    expect(enhancer.fail(items[2])).toEqual(expected_value);
  });
});
