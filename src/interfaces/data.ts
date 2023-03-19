export interface Data {
    articles:Array<Article> | null
}

export interface Article {
    name: string,
    price: number,
    oldPrice: number | null,
    discount: number | null,
    colours: Array<string>,
    src: string
}