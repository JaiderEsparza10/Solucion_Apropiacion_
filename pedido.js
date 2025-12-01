export const procesarPedidos = (pedido, ...extra) => {
    return{
        ...pedido,
        extra
    }
}
