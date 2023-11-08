import { atom } from "recoil"

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
})

export const vistiedPageState = atom({
  key: "vistiedPageState",
  default: "",
})

export const cartState = atom({
  key: "cartState",
  default: ["test"],
})
