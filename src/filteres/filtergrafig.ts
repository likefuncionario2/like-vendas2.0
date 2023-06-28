export function filterGrafig(data:any,isSales:boolean = true) {
    const res = data.map((item:any) => {
        return {
            label: item.name,
            value: isSales === true ? item.sales.length > 0 ? item.sales.reduce((aculamador:any,acount:any) => {
                const total = Number(acount.price_sold) * Number(acount.quantity_sold)
                return aculamador + Number(total);
            },0) : 0 : item.addition.length > 0 ? item.sales.reduce((aculamador:any,acount:any) => {
                const total = Number(acount.purchase_price) * Number(acount.quantity_added)
                return aculamador + Number(total);
            },0) : 0
        }
    })

    return res;
}