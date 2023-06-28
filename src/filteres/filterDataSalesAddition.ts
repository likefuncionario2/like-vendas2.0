import { formDate } from "@/utils/formDate";

export function filterDataSalesAddition(data:any,isSale:boolean = true) {
    const res:any = []
    data.forEach((item:any) => {
        if(isSale === true) {
            return item.sales.map((item:any) => { 
                const date = formDate(item.created_at);
                const total = item.price_sold * Number(item.quantity_sold)
                res.push({
                    id: item.id,
                    date,
                    price: item.price_sold.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }),
                    quat: item.quantity_sold,
                    total: total.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }),
                    id_product: item.id_product,
                })
            })
        }else {
            return  item.addition.map((item:any) => { 
                const date = formDate(item.created_at);
                const total = item.purchase_price * Number(item.quantity_added)
                res.push({
                    id: item.id,
                    date,
                    price: item.purchase_price.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }),
                    quat: item.quantity_added,
                    total: total.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }),
                    id_product: item.id_product,
                })
            })
        }
    })

    return res
}