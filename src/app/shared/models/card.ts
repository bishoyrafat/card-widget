export interface ICard{
  id: number
  title: string
  description: string
  category: string
  video: string
  price: string
  rate: number
  size: {size:number,available:boolean}[]
  colors: IColor[]
  count?:boolean
}

export interface IColor {
  name: string
  hex: string
  images: string[]
}
