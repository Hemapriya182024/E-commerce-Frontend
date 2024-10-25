import { createContext, useEffect } from "react";
import { products } from "../assets/assets";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Create the ShopContext
export const ShopContext = createContext();

// ShopContextProvider component
const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(false);
    const [cartItem,setCartItem]=useState({});
    const navigate=useNavigate()

    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItem); // Clone cartItem to avoid direct mutation
    
        if (cartItem[itemId]) {

            if(!size)
            {
                toast.error('select product size')
                return
            }
            if (cartData[itemId][size]) {
                // If the item and size exist, increment the quantity
                cartData[itemId][size] += 1;
            } else {
                // If the item exists but size doesn't, initialize the size with quantity 1
                cartData[itemId][size] = 1;
            }
        } else {
            // If the item doesn't exist, initialize it and add the size with quantity 1
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
    
        setCartItem(cartData); // Update state with the cloned and updated cartData
    };
    
    const GetCartCount=()=>{
        let totalCount=0;
        for(const items in cartItem)
        {
            for(const item in cartItem[items])
                {
              try{
                  if(cartItem[items][item] > 0 )
                    {
                        totalCount += cartItem[items][item] 
              }
            }
              catch(error)
              {

              }
        }


    }
    return totalCount
}

    // useEffect(()=>{
    //     console.log(cartItem)

    // },[cartItem])

    const updateQuantity=async(itemId,size,quantity)=>{
        let cartData =structuredClone(cartItem)
        cartData[itemId][size]=quantity;
        setCartItem(cartData)

    }

    
  const getCardAmount = () => {
    let totalAmout = 0;
    for (const items in cartItem) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalAmout += itemInfo.price * cartItem[items][item];
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
    return totalAmout;
  };
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItem,
        addToCart,
        GetCartCount,
        updateQuantity,
        getCardAmount,
        navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
