

type colorsType = {
    primory: string
    secondory: string
    guidance: string
}

type sizesType = {
    width: number
    height: number
}


type baseThemeType = {
    colors: colorsType
    sizes: sizesType
}

export const baseTheme: baseThemeType = {
    colors: {
        primory: '#4E71FE',
        secondory: '#ABB3BA',
        guidance: '#00FF00'
    },
    sizes: { width: 300, height: 350 },

}