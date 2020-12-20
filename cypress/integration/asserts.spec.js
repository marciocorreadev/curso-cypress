/// <reference types="cypress"/>

it("Equality", () => {
  const a = 1;

  expect(a).equal(1);
  expect(a).to.be.equal(1);
});

it("No equality", () => {
  const a = 1;

  expect(a, "Deveria ser 1").not.equal(2);
  expect(a, "Deveria não ser 1").not.to.be.equal(2);
});
