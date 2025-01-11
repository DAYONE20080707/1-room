export interface OrderType {
  name: string
  email: string
}

export interface Case {
  id: string
  thumbnail: {
    url?: string
  }
  title: string
  content: string
  address: string
  area: number
  buildingYear: number
  salesPrice: number
}

export interface Blog {
  id: string
  thumbnail: {
    url?: string
  }
  title: string
  content: string
  category: string
  publishedAt: string
}
