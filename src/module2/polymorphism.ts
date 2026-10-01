// ex:
class Animal {
  sound() {
    console.log(`Animal makes sound`);
  }
}
class Dog extends Animal {
  sound() {
    console.log(`Dog barks`);
  }
}
class Cat extends Animal {
  sound() {
    console.log(`Cat meows`);
  }
}
const animal: Animal[] = [new Dog(), new Cat()];
for (const a of animal) {
  a.sound();
}
