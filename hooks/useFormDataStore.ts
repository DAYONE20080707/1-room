import { create } from "zustand"

const initialState = {
  postCode: "",
  address1: "",
  blockNumber: "",
  buildingName: "",
  roomNumber: "",
  buildingArea: "",
  layout: "",
  buildingAge: "",
  propertyStatus: "vacant",
}

interface FormDataState {
  postCode: string // 郵便番号
  address1: string // 住所1
  blockNumber: string // 丁目番地号
  buildingName: string // 建物名
  roomNumber: string // 部屋番号
  buildingArea: string // 建物(専有)面積
  layout: string // 間取り
  buildingAge: string // 築年数
  propertyStatus: string // 物件の状況: 空室、居住中、賃貸中
  setFormData: (data: Partial<FormDataState>) => void
  clearFormData: () => void
}

export const useFormDataStore = create<FormDataState>((set) => ({
  ...initialState,
  setFormData: (data) => set((state) => ({ ...state, ...data })),
  clearFormData: () => set({ ...initialState }),
}))
