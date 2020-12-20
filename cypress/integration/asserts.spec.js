/// <reference types="cypress"/>

it("Equality", () => {
  const a = 1;

  // expect(a).to.be.equal(1); 
  expect(a).equal(1);
  expect(a).eq(1);
});

it("No equality", () => {
  const a = 1;

  expect(a, "Deveria não ser 1").not.to.be.equal(2);
  expect(a, "Deveria não ser 1").not.equal(2);
  expect(a, "Deveria não ser 1").not.eq(2);
});

it('Truthy', () => {
  const a = true;
  const b = null;
  let c;

  expect(a).to.be.equal(true);
  expect(a).equal(true);
  expect(a).to.be.true;
  expect(a).true;

  expect(b).to.be.null;
  expect(a).not.to.be.null;
  expect(a).to.be.not.null;
  expect(c).to.be.undefined;
})

it('Object Equality 1', () => {
  const obj = { a: 1, b: 2};

  expect(obj).eq(obj);
  expect(obj).equal(obj);
  expect(obj).equals(obj);
  expect(obj).to.be.eq(obj);
  expect(obj).to.be.equal(obj);
  expect(obj).to.be.equals(obj);
})

it('Object Equality 2', () => {
  const obj = { a: 1, b: 2 };

  expect(obj).deep.eq({a: 1,b: 2}); 
  expect(obj).deep.equal({a: 1,b: 2});
  expect(obj).deep.equals({ a: 1, b: 2 });
  
  expect(obj).deep.to.be.eq({a: 1,b: 2});
  expect(obj).deep.to.be.equal({a: 1,b: 2});
  expect(obj).deep.to.be.equals({a: 1,b: 2});
  
  
  expect(obj).to.be.eql({a: 1,b: 2});
  expect(obj).to.eql({a: 1,b: 2});
  expect(obj).be.eql({ a: 1, b: 2 });
  
  expect(obj).eql({ a: 1, b: 2 });
  
  expect(obj).include({ a: 1 });
  
  expect(obj).to.have.property('a');
  expect(obj).to.have.property('b', 2);
  
  expect(obj).to.be.not.empty;
  expect({}).to.be.empty;
})

it('Arrays', () => {
  const arr = [1, 2, 3];

  expect(arr).to.have.members([1, 2, 3]);
  expect(arr).to.include.members([1, 3]);

  expect(arr).to.not.be.empty;
  expect([]).to.be.empty;
});

it('Types', () => {
  const num = 1;
  const string = 'String';

  expect(num).to.be.a('number')
  expect(string).to.be.a('string')
  expect({}).to.be.an('object')
  expect([]).to.be.an('array')
})

it('String', () => {
  const string = 'String de teste';

  expect(string).to.be.equal('String de teste');
  expect(string).to.have.length(15);
  expect(string).to.contains('de');
  expect(string).to.include('de');

  expect(string).to.match(/de/);
  expect(string).to.match(/^String/);
  expect(string).to.match(/teste$/);
  expect(string).to.match(/.{15}/);
  expect(string).to.match(/\w+/);
  expect(string).to.match(/\D+/);
})


it('Numbers', () => {
  const number = 4;
  const floarNumber = 5.2133;

  expect(number).to.be.equal(4);
  expect(number).eq(4);
  
  expect(number).to.be.above(3);
  expect(number).to.be.below(7);

  expect(floarNumber).to.be.closeTo(5.2, 0.1);
})