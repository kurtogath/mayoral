export function numeric(number:number |null):string {
    if(number == null) return ''
    return number.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
}

export function percentage(number:number |null):string {
    if(number == null) return ''
    let numberNegative = -(number / 100)
    let percentage =  numberNegative.toLocaleString("es-ES", { style: "percent" });
    return `(${percentage})`
}