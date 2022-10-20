import { Player } from "./player";

test("Ship is added to _ships array", () => {
    const player = Player();

    expect(player.testMethod(1, 3)).toBe(4);
});
