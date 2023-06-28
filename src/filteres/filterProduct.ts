export function filterProduct(data:any,type:any) {
    return data.map((item:any) => {
        if(type === "store") {
            const total = item.sales.length > 0 ? item.sales.reduce((aculamador:any,acount:any) => {
                const total = Number(acount.price_sold) * Number(acount.quantity_sold)
                return aculamador + Number(total);
            },0) : 0
            const custos = item.addition.length > 0 ? item.addition.reduce((aculamador:any,acount:any) => {
                const total = Number(acount.purchase_price) * Number(acount.quantity_added)
                return aculamador + Number(total);
            },0) : 0
            const lucro = Number(total) - Number(custos)
            return {
                id: item.id,
                name: item.name,
                price: item.price.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }),
                quantity: item.quantity,
                nvp: item.sales.length > 0 ? item.sales.reduce((aculamador:any,acount:any) => { 
                    return aculamador + Number(acount.quantity_sold);
                },0) : 0,
                nap: item.addition.length > 0 ? item.addition.reduce((aculamador:any,acount:any) => { 
                    return aculamador + Number(acount.quantity_added);
                },0) : 0,
                total: total.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }),
                custos: custos.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }),
                lucro: lucro.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })
            }
        }else {
            const total = item.sales.length > 0 ? item.sales.reduce((aculamador:any,acount:any) => {
                const total = Number(acount.price_sold) * Number(acount.quantity_sold)
                return aculamador + Number(total);
            },0) : 0
            const custos = item.addition.length > 0 ? item.addition.reduce((aculamador:any,acount:any) => {
                const total = Number(acount.purchase_price) * Number(acount.quantity_added)
                return aculamador + Number(total);
            },0) : 0
            const lucro = total - custos
            return {
                id: item.id,
                name: item.name,
                price: item.price.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }),
                quantity: item.quantity,
                nvp: 0,
                nap: 0,
                total: 0,
                custos: 0,
                lucro: 0
            }
        }
    })
}