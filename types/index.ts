export interface OrderType {
  name: string
  email: string
}

export interface CaseType {
  id: string
  thumbnail?: {
    url?: string
  }
  title: string
  content: string
  address: string
  area: number
  buildingYear: number
  salesPrice: number
}

export interface BlogType {
  id: string
  thumbnail: {
    url?: string
  }
  title: string
  content: string
  category: string
  publishedAt: string
}

export interface NewsType {
  id: string
  title: string
  content: string
  publishedAt: string
}
