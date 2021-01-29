class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  increaseQuality(item) {
    let inflationSpeed;

    if (item.sellIn >= 5 && item.sellIn <= 10) inflationSpeed = 2;
    if (item.sellIn < 5 && item.sellIn > 0) inflationSpeed = 3;
    if (item.sellIn > 10) inflationSpeed = 1;

    if (item.sellIn <= 0) {
      item.quality = 0;
    } else {
      item.quality = item.quality + inflationSpeed;
    }
  }

  decreaseQuality(item) {
    let degradationSpeed;
    const isConjured = item.name.toLowerCase().includes("conjured");

    if (item.quality > 1) {
      if (item.sellIn >= 0 && !isConjured) {
        degradationSpeed = 1;
      } else if (isConjured || item.sellIn < 0) {
        degradationSpeed = 2;
      }
    }

    if (item.quality <= 1) {
      item.quality = 0;
    } else {
      item.quality = Math.abs(item.quality - degradationSpeed);
    }
  }

  legendaryItemsQuality(item) {
    item.quality = 80;
  }

  updateSellIn(item) {
    if (item.name !== "Sulfuras, Hand of Ragnaros")
      item.sellIn = item.sellIn - 1;
  }

  updateQuality() {
    if (this.items.length > 0) {
      this.items.forEach((item) => {
        switch (item.name) {
          case "Aged Brie":
            this.increaseQuality(item);
            break;
          case "Backstage passes to a TAFKAL80ETC concert":
            this.increaseQuality(item);
            break;
          case "Sulfuras, Hand of Ragnaros":
            this.legendaryItemsQuality(item);
            break;
          default:
            this.decreaseQuality(item);
        }
        this.updateSellIn(item);
      });
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
