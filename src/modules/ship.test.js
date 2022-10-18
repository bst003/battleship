import { Ship } from "./ship";

test("Confirm hits method to be working properly", () => {
    const testShip2 = Ship(4, "Destroyer");

    testShip2.hit();

    expect(testShip2.getHits()).toBe(1);
});

test("Confirm isSunk registers sunken ships", () => {
    const testShip2 = Ship(2, "Test Name");

    testShip2.hit();
    testShip2.hit();

    expect(testShip2.isSunk()).toBe(true);
});

test("Confirm isSunk can return false", () => {
    const testShip2 = Ship(2, "Test Name");

    testShip2.hit();

    expect(testShip2.isSunk()).toBe(false);
});
