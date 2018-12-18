const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park1;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaurs;

  beforeEach(function () {
    dinosaur1 = new Dinosaur("t-rex", 'carnivore', 150);
    dinosaur2 = new Dinosaur("pterodactyl", 'carnivore', 50);
    dinosaur3 = new Dinosaur("ankylosaurus", 'herbivore', 35);
    dinosaur4 = new Dinosaur("oviraptorosaur", 'omnivore', 20);
    dinosaurs = [dinosaur1, dinosaur2, dinosaur3, dinosaur4];
    park1 = new Park("Jurassic Park", 500, dinosaurs);
    dinosaur5 = new Dinosaur("triceratops", "herbivore", 50);
  })

  it('should have a name', function() {
    assert.strictEqual(park1.name, "Jurassic Park");
  });

  it('should have a ticket price', function() {
    assert.strictEqual(park1.price, 500);
  });

  it('should have a collection of dinosaurs', function() {
    assert.strictEqual(park1.dinosaurs, dinosaurs);
    assert.deepStrictEqual(park1.dinosaurs, [dinosaur1, dinosaur2, dinosaur3, dinosaur4]);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park1.addDinosaur(dinosaur5);
    assert.strictEqual(park1.dinosaurs.length, 5);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park1.removeDinosaur(dinosaur4);
    assert.strictEqual(park1.dinosaurs.length, 3);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    assert.strictEqual(park1.topDino(), dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    assert.deepStrictEqual(park1.bySpecies('t-rex'), [dinosaur1]);
  });

  it("should be able to calculate the total number of visitors per day", function() {
    assert.strictEqual(park1.dailyVisitors(), 255);
  });

  it("should be able to calculate the total number of visitors per year", function() {
    assert.strictEqual(park1.annualVisitors(), 93075);
  });

  it("should be able to calculate the total revenue from ticket sales for one year", function() {
    assert.strictEqual(park1.annualRevenue(), 46537500);
  });

  xit('should be able to remove all dinosaurs of a particular species');

  xit("should be able to provide an object containing the number of dinosaurs of each diet type");

});
