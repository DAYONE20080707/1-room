import { z } from "zod"

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

const phoneRegex = /^(0\d{1,4}-\d{1,4}-\d{4})$/
const postcodeRegex = /^\d{3}-\d{4}$/

export const OrderFormSchema = z.object({
  companyName: z.string().min(2, {
    message: "法人名を入力してください",
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
  budget: z.number().positive({
    message: "予算は数値で入力してください(例: 100000)",
  }),
  planPageNumber: z.number().positive({
    message: "予定ページ数は数値で入力してください(例: 10)",
  }),
  productTypeList: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "制作種類を選択または記入してください",
    }),
  otherProductType: z.string().optional(),
  desiredFunctionTypeList: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "制作種類を選択または記入してください",
    }),
  otherDesiredFunctionType: z.string().optional(),
  requests: z.string().optional(),
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
  url: z.string().optional(),
  industry: z.string().min(1, { message: "業界を入力してください" }),
  genre: z.string().min(1, { message: "ジャンルを入力してください" }),
  scope: z.string().min(1, { message: "担当範囲を入力してください" }),
})
