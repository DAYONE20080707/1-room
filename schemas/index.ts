import { request } from "http"
import { z } from "zod"

const phoneRegex = /^(0\d{1,4}-\d{1,4}-\d{4})$/
const postcodeRegex = /^\d{3}-\d{4}$/

export const AdminRegisterSchema = z.object({
  name: z.string().min(1, {
    message: "お名前を入力してください",
  }),
  email: z.string().email({
    message: "メールアドレスを入力してください",
  }),
  password: z.string().min(8, {
    message: "英数字8文字以上で入力してください",
  }),
})

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "お名前を入力してください",
  }),
  email: z.string().email({
    message: "メールアドレスを入力してください",
  }),
  password: z.string().min(8, {
    message: "英数字8文字以上で入力してください",
  }),
  companyName: z.string().min(1, {
    message: "企業名を入力してください",
  }),
  companyEmail: z.string().email({
    message: "企業メールアドレスを入力してください",
  }),
  companyPostCode: z.string().regex(postcodeRegex, {
    message: "有効な郵便番号を入力してください(例: 123-4567)",
  }),
  companyPrefecture: z.string().min(2, {
    message: "都道府県を入力してください",
  }),
  companyCity: z.string().min(2, {
    message: "市区町村を入力してください",
  }),
  companyAddress: z.string().min(2, {
    message: "丁目・番地・部屋番号を入力してください",
  }),
  companyPhone: z.string().regex(phoneRegex, {
    message: "有効な電話番号を入力してください(例: 03-1234-5678)",
  }),
  companyAreaList: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "対応エリアを選択してください",
    }),
})

export const LoginSchema = z.object({
  email: z.string().email({
    message: "メールアドレスを入力してください",
  }),
  password: z.string().min(8, {
    message: "英数字8文字以上で入力してください",
  }),
})

export const MainFormSchema = z.object({
  name: z.string().min(1, {
    message: "お名前を入力してください",
  }),
  email: z.string().email({
    message: "メールアドレスを入力してください",
  }),
})

export const CompanyInfoSchema = z.object({
  companyName: z.string().min(2, {
    message: "企業名を入力してください",
  }),
  companySiteUrl: z.string().optional(),
  companyRepName: z.string().optional(),
  companyPostCode: z
    .union([
      z.string().regex(postcodeRegex, {
        message: "有効な郵便番号を入力してください(例: 123-4567)",
      }),
      z.literal(""),
    ])
    .optional(),
  companyPrefecture: z.string().optional(),
  companyCity: z.string().optional(),
  companyAddress: z.string().optional(),
  companyPrefectureMap: z.string().optional(),
  companyCityMap: z.string().optional(),
  companyAddressMap: z.string().optional(),
  companyAreaList: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "対応エリアを選択してください",
    }),
  companyfoundDate: z.date().optional(),
  companyPhone: z
    .union([
      z.string().regex(phoneRegex, {
        message: "有効な電話番号を入力してください(例: 03-1234-5678)",
      }),
      z.literal(""),
    ])
    .optional(),
  companyEmail: z.string().optional(),
  companyCapital: z.string().optional(),
  companyEmployee: z.string().optional(),
  companyBusiness: z.string().optional(),
  companyFeature: z.string().optional(),
  companyPoint1: z.string().optional(),
  companyPoint2: z.string().optional(),
  companyPoint3: z.string().optional(),
  companyPr: z.string().optional(),
})

export const ManagerInfoSchema = z.object({
  name: z.string().min(2, {
    message: "担当者名を入力してください",
  }),
  email: z.string().email({
    message: "担当者メールアドレスを入力してください",
  }),
  position: z.string().optional(),
  message: z.string().optional(),
})

export const PerformanceSchema = z.object({
  title: z.string().min(1, { message: "タイトルを入力してください" }),
  content: z.string().min(1, { message: "本文を入力してください" }),
  price: z.string().optional(),
  buildingName: z.string().optional(),
  address: z.string().optional(),
  work: z.string().optional(),
})

export const PostCodeSchema = z.object({
  postCode1: z.string().regex(/^\d{3}$/, "郵便番号は3桁で入力してください"),
  postCode2: z.string().regex(/^\d{4}$/, "郵便番号は4桁で入力してください"),
})

export const Satei1Schema = z.object({
  blockNumber: z.string().min(1, {
    message: "丁目 番地 号を入力してください",
  }),
  buildingName: z.string().optional(),
  roomNumber: z.string().optional(),
  buildingArea: z.string().min(1, {
    message: "建物面積を入力してください",
  }),
  layout: z.string().min(1, {
    message: "間取りを入力してください",
  }),
  buildingAge: z.string().min(1, {
    message: "築年数を入力してください",
  }),
  propertyStatus: z.string().min(1, {
    message: "物件の状況を選択してください",
  }),
})

export const Satei2Schema = z.object({
  name: z.string().min(1, {
    message: "お名前を入力してください",
  }),
  furigana: z.string().min(1, {
    message: "フリガナを入力してください",
  }),
  tel: z.string().regex(phoneRegex, {
    message: "有効な電話番号を入力してください(例: 090-1234-5678)",
  }),
  email: z.string().email({
    message: "メールアドレスを入力してください",
  }),
  address2: z.string().optional(),
  contactMethod: z.string().min(1, {
    message: "ご希望連絡方法を入力してください",
  }),
  requests: z.string().optional(),
})

export const SateiSchema = z.object({
  postCode: z.string().regex(/^\d{7}$/, {
    message: "郵便番号は7桁で入力してください",
  }),
  address1: z.string().min(1, {
    message: "住所を入力してください",
  }),
  ...Satei1Schema.shape,
  ...Satei2Schema.shape,
})

export const ProjectSchema = z.object({
  ...SateiSchema.shape,
  areaList: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "紹介エリアを選択してください",
  }),
  requests: z.string().optional(),
  memo: z.string().optional(),
  referralFee: z.number().positive({
    message: "紹介金額は数値で入力してください(例: 30000)",
  }),
  maxReferrals: z.number().positive({
    message: "最大紹介数は数値で入力してください(例: 3)",
  }),
  isReferralAllowed: z.boolean(),
  publishEndDate: z.date(),
})
