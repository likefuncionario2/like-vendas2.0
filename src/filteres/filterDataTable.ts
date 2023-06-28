export function filterDataTable(data:any) {
    const res = data.map((item:any) => {
        const npv = item.sales.length > 0 ? item.sales.reduce((aculamador:any,acount:any) => { 
            return aculamador + Number(acount.quantity_sold);
        },0) : 0
        const nap = item.addition.length > 0 ? item.addition.reduce((aculamador:any,acount:any) => { 
            return aculamador + Number(acount.quantity_added);
        },0) : 0
        const total = item.sales.length > 0 ? item.sales.reduce((aculamador:any,acount:any) => {
            const total = Number(acount.price_sold) * Number(acount.quantity_sold)
            return aculamador + Number(total);
        },0) : 0
        const custos = item.addition.length > 0 ? item.addition.reduce((aculamador:any,acount:any) => {
            const total = Number(acount.purchase_price) * Number(acount.quantity_added)
            return aculamador + Number(total);
        },0) : 0
       
        return {
            npv,
            nap,
            total,
            custos,
        }
    })

    const npv = res.reduce((aculamador:any,acount:any) => {
        return aculamador + Number(acount.npv);
    },0)
    const nap = res.reduce((aculamador:any,acount:any) => {
        return aculamador + Number(acount.nap);
    },0)
    const total = res.reduce((aculamador:any,acount:any) => {
        return aculamador + Number(acount.total);
    },0)
    const custos = res.reduce((aculamador:any,acount:any) => {
        return aculamador + Number(acount.custos);
    },0)
    const lucro = Number(total) - Number(custos)


    return [npv,nap,total.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }),custos.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }),lucro.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })]
}