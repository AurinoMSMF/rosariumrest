import Mystery from "./types/Mystery.js";

export const mysteriesJson: Record<string, Mystery> = {
  mysteriaGloriosa: {
    primumMysterium: "Qui resurréxit a mortuis (Mc XVI, 1-7)",
    secundoMysterium: "Qui in caelum ascéndit (Lc XXIV, 46-53)",
    tertiumMysterium: "Qui Spiritum Sanctum misit (Act II, 1-7)",
    quartumMysterium: "Qui te assúmpsit (Ps XVI, 10)",
    quintumMysterium: "Qui te in caelis coronávit (Apoc XII, 1)",
  },
  mysteriaDolorosa: {
    primumMysterium: "Qui pro nobis sánguinem sudávit (Lc XXII, 39-46)",
    secundoMysterium:
      "Qui pro nobis flagellátus est (Mt XXVII, 26; Mc XVI, 6-15; Ioh XIX, I)",
    tertiumMysterium: "Qui pro nobis spinis coronátus est (Ioh XIX, 1-8)",
    quartumMysterium: "Qui pro nobis crucem baiulávit (Ioh XIX, 16-22)",
    quintumMysterium: "Qui pro nobis crucífixus est (Ioh XIX, 25-30)",
  },
  mysteriaGaudiosa: {
    primumMysterium: "Quem, Virgo, concepísti (MT I, 18; Lc I, 26-38)",
    secundoMysterium: "Quem visitándo Elísabeth portásti (Lc I, 39-45)",
    tertiumMysterium: "Quem, Virgo, genuísti (Lc II, 6-12)",
    quartumMysterium: "Quem in templo praesentásti (Lc II, 25-32)",
    quintumMysterium: "Quem in templo invenísti (Lc II, 41-50)",
  },
};
