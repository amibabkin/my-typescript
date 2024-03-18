// Маппинг типов

type PcBrand = {
  name: string;
  country: string;
  createdAt: Date;
};

type WellKnownBrands = "apple" | "microsoft" | "hp";
// без записи BrandKey in WellKnownBrands не можем использовать юнионы в качестве ключей
type MyPcRecord = {
  [BrandKey in WellKnownBrands]: PcBrand;
};

const brandRecord: MyPcRecord = {
  apple: {
    country: "usa",
    createdAt: new Date(),
    name: "apple",
  },
  hp: {
    country: "usa",
    createdAt: new Date(),
    name: "apple",
  },
  microsoft: {
    country: "usa",
    createdAt: new Date(),
    name: "apple",
  },
};

type PartOfWindow = {
  [key in "document" | "screen"]?: Window[key];
};

const p: PartOfWindow = {
  screen: window.screen,
};
