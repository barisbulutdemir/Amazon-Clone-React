import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {addToBasket} from "@/slices/basketSlice";


export default function Product({ id, title, price, description, category, image }) {

  const dispatch = useDispatch()
  const MAX_RATING = 5;
  const MIN_RATING = 1;
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  )
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id, title, price, description, category, image, rating, hasPrime
    };

    // ürünü redux store gönderme işlemini bötle yapıyoruz.
    dispatch(addToBasket(product))
  }

  return (
    <>
      <div className="relative flex flex-col m-5 bg-white ←30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">{category}</p>
        <div className="flex items-center justify-center">
          <Image src={image} alt="product" height={200} width={200} objectFit="contain" />

        </div>
        <h4 className="my-3">{title}</h4>

        <div className="flex text-yellow-500">
          {/* Aşağıdaki metodu puanlama sistemi için. map oluşturup ona göre dolduruyor.
                     Api de rating olmadığı için kendimiz sayı verdik */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5" />

            ))
          }
        </div>
        <div>
          <p className="text-xs my-2 line-clamp-2">{description}</p>
        </div>
        <div className="mb-5 ">
          <p> <span>$</span> {price}</p>
        </div>
        {hasPrime && (
          <div className="flex items-center space-x-2 -mt-5 ">
            <img className="w-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_szJQZFHLPFUZVdX-SZMTFSgKwpa0p9_A5g&usqp=CAU" alt="img/prime" />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>

        )}
        <button onClick={addItemToBasket} className="button-basket  ">Add to Basket </button>


      </div>

    </>
  )
}
