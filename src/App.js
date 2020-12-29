import './App.css'
//userMemo
//userCallback
//memo

import { useSelector} from "react-redux";
import React, {useCallback, useEffect} from "react";
import {Header} from "./components/header/header";
import {ProductList} from "./components/product-list/productList";
import {services} from "./services";


export default function App() {
   const {cart,wishlist,products} = useSelector(
       ({cart: {cart},wishlist:{wishlist},products:{products}}) =>
           ({cart,wishlist,products}))

    const {productService} = services

    const fetchData = useCallback(async () => {
        const data = await productService.getProducts()
        console.log(data)
    })



    useEffect(()=>{
        fetchData()
    }, [])

    return (
        <div className={'App'}>
            <Header />
            <ProductList />
            <h2>Hello</h2>

        </div>
    )
}
