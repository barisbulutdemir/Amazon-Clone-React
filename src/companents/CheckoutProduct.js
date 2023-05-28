import React from "react";
import Image from "next/image";
import {StarIcon} from "@heroicons/react/24/solid";
import {useDispatch} from "react-redux";
import {addToBasket, removeFromBasket} from "@/slices/basketSlice";


export default function CheckoutProduct({ id, title, price, description, rating, category, image, hasPrime,  }) {

    const dispatch = useDispatch();
    const addItemToBasket = () => {
        const product = {
            id, title, price, description, rating, category, image, hasPrime,
        };

        // itemi redux store a gönderme işlemi
        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket( {id } ))
    }
    return(
        <>
            <div className="grid grid-cols-5">
                <Image src={image}
                       height={200}
                       width={200}
                       alt="image"/>
                <div className="col-span-3 mx-5">
                    <p> {title}</p>
                    <div className="flex">
                        {Array(rating).fill().map((_,i) => (
                            <StarIcon key={i} className="h-5 text-yellow-500" />
                        ))  }
                    </div>
                    <p className="text-xs my-2 line-clamp-3">{description}</p>
                    <p> <span>$</span> {price}</p>
                    {hasPrime && (
                        <div className="flex items-center space-x-2">
                            <img loading="lazy"
                            className="w-12"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_szJQZFHLPFUZVdX-SZMTFSgKwpa0p9_A5g&usqp=CAU"
                            alt="hasprime"/>
                            <p className="text-xs text-gray-500"> Free Next-day Delivery</p>
                        </div>
                    )}
                </div>

                {/* sağdaki butonlar */}
                <div className="flex flex-col space-y-2 my-auto justify-self-end ">
                    <button onClick={addItemToBasket} className=" button-basket px-2 " >Add to Basket</button>
                    <button onClick={removeItemFromBasket} className="button-basket px-2 " >Remove from Basket</button>
                </div>
            </div>

        </>
    )
}