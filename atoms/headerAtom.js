import { atom } from "recoil";

export const headerState = atom({
    key: 'headerState',
    default: false,
});

export const microMarketAtom = atom({
    key: 'microMarkets',
    default: []
});