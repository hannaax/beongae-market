import { atom } from "recoil"

// export const isEditState = atom({
//   key: "isEditState",
//   default: true,
// })

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
