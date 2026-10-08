// ex:
abstract class Animal {
  sound() {
    console.log(`Animal makes sound`);
  }
  move() {
    console.log(`Animal moves`);
  }
}
class Dog extends Animal {
  sound() {
    console.log(`Dog makes sound`);
  }
}
class Cat extends Animal {
  sound() {
    console.log(`Cat makes sound`);
  }
}
const d1 = new Dog();
const c1 = new Cat();

d1.move();
d1.sound();

c1.move();
c1.sound();
