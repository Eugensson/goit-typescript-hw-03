class Key {
    private signature: number;
    
    constructor () {
        this.signature = Math.random()
    }

    getSignature() {
        return this.signature;
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey() {
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected person: string;
    protected tenants: Person[] = [];

    constructor(key: Key) {
        this.key = key;
    }

    abstract openDoor(key: Key): void;

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);                                              
            console.log("Wellcome.");
        } else {
            console.log("The door is closed. You can't enter.");
        }
    }
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }

    openDoor(key: Key): void {
        if (key === this.key) {
            this.door = true;
            console.log("The door is open");
        } else {
            console.log("The key doesn't fit. The door remains closed.");
        }
    }
}

const key = new Key();
const person = new Person(key);
const house = new MyHouse(key);
house.openDoor(person.getKey());
house.comeIn(person);


export {};