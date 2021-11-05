import React from 'react'
import { useCart } from 'react-use-cart'

const Cart = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart()
    if (isEmpty) return <h1 className='text-center'>Giỏ hàng đéo có gì cả !!!</h1>
    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h5>Số sản phẩm bạn đã chọn: ({totalUniqueItems}) Tổng số mặt hàng: ({totalItems})</h5>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img} style={{ height: '6rem' }} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>Giá thành: {item.price} Đồng </td>
                                        <td>Số lượng: {item.quantity}</td>
                                        <td>
                                            <button className='btn btn-danger ms-2'
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                            >-</button>
                                            <button className='btn btn-danger ms-2'
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            >+</button>
                                            <button className='btn btn-danger ms-2'
                                                onClick={() => removeItem(item.id)}
                                            >Xóa sản phẩm</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='col-auto ms-auto'>
                    <h2>Tổng giá tiền: {cartTotal}</h2>
                </div>
                <div className='col-auto'>
                    <button className='btn btn-danger m-2'
                        onClick={() => emptyCart()}
                    >Xóa tất cả sản phẩm</button>
                </div>
            </div>
        </section>
    )
}

export default Cart
