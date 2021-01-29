const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("Regular case", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  describe("Aged Brie case", () => {
    const item = new Item("Aged Brie", 2, 0);
    const gildedRose = new Shop([item]);

    test.each([
      [0, 1, 3],
      [1, 0, 6],
      [2, -1, 0],
    ])(
      `day %d: sellIn equals %d and quality equals %d`,
      (day, expectedSellIn, expectedQuality) => {
        const expectedItem = gildedRose.updateQuality()[0];

        expect(expectedItem.sellIn).toBe(expectedSellIn);
        expect(expectedItem.quality).toBe(expectedQuality);
      }
    );
  });

  describe("Backstage passes to a TAFKAL80ETC concert", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20);
    const gildedRose = new Shop([item]);

    test.each([
      [0, 14, 21],
      [1, 13, 22],
      [2, 12, 23],
      [3, 11, 24],
      [4, 10, 25],
      [6, 9, 27],
      [7, 8, 29],
      [8, 7, 31],
      [9, 6, 33],
      [10, 5, 35],
      [11, 4, 37],
      [12, 3, 40],
      [13, 2, 43],
      [14, 1, 46],
      [15, 0, 49],
      [16, -1, 0],
    ])(
      `day %d: sellIn equals %d and quality equals %d`,
      (day, expectedSellIn, expectedQuality) => {
        const expectedItem = gildedRose.updateQuality()[0];

        expect(expectedItem.sellIn).toBe(expectedSellIn);
        expect(expectedItem.quality).toBe(expectedQuality);
      }
    );
  });

  describe("Sulfuras, Hand of Ragnaros case", () => {
    const item = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
    const gildedRose = new Shop([item]);

    test.each([
      [0, 0, 80],
      [1, 0, 80],
      [2, 0, 80],
    ])(
      `day %d: sellIn equals %d and quality equals %d`,
      (day, expectedSellIn, expectedQuality) => {
        const expectedItem = gildedRose.updateQuality()[0];

        expect(expectedItem.sellIn).toBe(expectedSellIn);
        expect(expectedItem.quality).toBe(expectedQuality);
      }
    );
  });

  describe("Conjured Mana Cake case", () => {
    const item = new Item("Conjured Mana Cake", 3, 8);
    const gildedRose = new Shop([item]);

    test.each([
      [0, 2, 6],
      [1, 1, 4],
      [2, 0, 2],
      [3, -1, 0],
      [4, -2, 0],
    ])(
      `day %d: sellIn equals %d and quality equals %d`,
      (day, expectedSellIn, expectedQuality) => {
        const expectedItem = gildedRose.updateQuality()[0];

        expect(expectedItem.sellIn).toBe(expectedSellIn);
        expect(expectedItem.quality).toBe(expectedQuality);
      }
    );
  });

  describe("Elixir of the Mongoose", () => {
    const item = new Item("Elixir of the Mongoose", 5, 7);
    const gildedRose = new Shop([item]);

    test.each([
      [0, 4, 6],
      [1, 3, 5],
      [2, 2, 4],
      [3, 1, 3],
      [4, 0, 2],
      [5, -1, 1],
      [6, -2, 0],
    ])(
      `day %d: sellIn equals %d and quality equals %d`,
      (day, expectedSellIn, expectedQuality) => {
        const expectedItem = gildedRose.updateQuality()[0];

        expect(expectedItem.sellIn).toBe(expectedSellIn);
        expect(expectedItem.quality).toBe(expectedQuality);
      }
    );
  });
});
