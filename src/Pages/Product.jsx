import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { assets, products } from '../assets/assets';
import RelatedProducts from '../Components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { product, currency ,addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id == productId) {
        setProductData(item)
        console.log(item);
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData()

  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* UI for the Product page */}
      {/* div for ProductData */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* div for product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img
                  src={item}
                  key={index}
                  alt='product image'
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                  onClick={() => setImage(item)}
                />
              ))
            }
          </div>
          {/* -----big product image -----------------------------*/}
          <div className='w-full sm:w-[80%] mb-10'>
            <img src={image} className='w-full h-auto' />

          </div>

          <div>
            {/*------------------ product information div------------------- */}
            <div className='flex-1 '>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
              <div className='flex flex-row items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className='w-3 5' />
                <img src={assets.star_icon} alt="" className='w-3 5' />
                <img src={assets.star_icon} alt="" className='w-3 5' />
                <img src={assets.star_icon} alt="" className='w-3 5' />
                <img src={assets.star_dull_icon} alt="" className='w-3 5' />
                <p className='pl-2'>(122)</p>

              </div>
              <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                  {productData.sizes.map((item, index) => (
                    <button
                      onClick={() => setSize(item)}
                      className={`border px-3 py-2 bg-gray-200 ${item === size ? 'border-orange-500' : ''}`}
                      key={index}>
                      {item}
                    </button>

                  ))
                  }

                </div>

              </div>
              <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
              <hr className='mt-8 sm:w-4/5' />
              <div className='text-sm text-gray-500 mt-5 flex flex-col gap-2'>
                <p>100% Orginal Product</p>
                <p>Cash on delivery is available on this product</p>
                <p>Easy return and exchange product</p>

              </div>
            </div>
          </div>

        </div>

      </div>
      {/* Description and review session */}
      <div className='mt-20 mb-10'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm' >Reviews(122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Discover the best products tailored exclusively for women, from fashion to daily essentials, all in one place.</p>
          <p>Shop with confidence and enjoy fast delivery, secure payments, and a seamless shopping experience at SheCart.</p>
        </div>

      </div>



       {/* Display related products */}
       <RelatedProducts  category={productData.category} subCategory={productData.subCategory}/>
    </div>


  ) :
    <div className='opacity-0'>
    </div>
};

export default Product; 