export function filterProduct(data:any,type:any) {
    return data.map((item:any) => {
        if(type === "store") {
            const total = item.sales.length > 0 ? item.sales.reduce((aculamador:any,acount:any) => {
                const total = acount.price_sold * acount.quantity_sold
                return aculamador + total;
            },0) : 0
            const custos = item.addition.length > 0 ? item.addition.reduce((aculamador:any,acount:any) => {
                const total = acount.purchase_price * acount.quantity_added
                return aculamador + total;
            },0) : 0
            const lucro = total - custos
            return {
                id: item.id,
                name: item.name,
                price: item.price.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }),
                quantity: item.quantity,
                nvp: item.sales.length > 0 ? item.sales.reduce((aculamador:any,acount:any) => { 
                    return aculamador + acount.quantity_sold;
                },0) : 0,
                nap: item.addition.length > 0 ? item.addition.reduce((aculamador:any,acount:any) => { 
                    return aculamador + acount.quantity_added;
                },0) : 0,
                total: total.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }),
                custos: custos.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }),
                lucro: lucro.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })
            }
        }else {
            const total = item.sales.length > 0 ? item.sales.reduce((aculamador:any,acount:any) => {
                const total = acount.price_sold * acount.quantity_sold
                return aculamador + total;
            },0) : 0
            const custos = item.addition.length > 0 ? item.addition.reduce((aculamador:any,acount:any) => {
                const total = acount.purchase_price * acount.quantity_added
                return aculamador + total;
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