

export const getProducts =async () => {
    const resp = await fetch('http://localhost:8080/productos/all')
    const productos =await resp.json();
    return productos;
}

export const calculateTotal = (items) => {
    return items.reduce(
        (accumulator, item) => accumulator + item.product.price * item.quantity
        , 0);
}