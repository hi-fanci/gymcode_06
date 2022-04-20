import React, { useEffect } from "react";
import { addCart, fetchProductRequest } from "../actions/products";
import { useDispatch, useSelector } from "react-redux";

export default function Product() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductRequest())
    }, [dispatch]);

    const products = useSelector((state) => state.product.products);
    const carts = useSelector((state) => state.product.carts);

    if (products && products.length > 0) {
        return (
            <div>
                <p>Cart: {carts.length}</p>
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>price</th>
                        <th>image</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td><img src={item.image} style={{width: "100px"}} /></td>
                                <td><button onClick={() => dispatch(addCart(item))}>Add</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div>Loading ...</div>
    )
}