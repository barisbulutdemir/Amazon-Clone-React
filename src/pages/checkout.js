import Header from "@/companents/Header";
import Image from "next/image";
import {useSelector} from "react-redux";
import {selectItems, selectTotal} from "@/slices/basketSlice";
import CheckoutProduct from "@/companents/CheckoutProduct";
import {useSession} from "next-auth/react";

export default  function checkout(){
    const { data: session } = useSession(); // Değişiklik burada

    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    return (
        <>
            <div className="bg-gray-100 ">
                <Header />
                <main className="lg:flex max-w-screen-2xl mx-auto">
                    {/* Left Side */}
                    <div className="flex-grow m-5 shadow-sm">
                        <Image src="https://links.papareact.com/ikj" alt="test"
                               width={1020} height={250} />


                    {/* items */}
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4"> {
                            items.length === 0 ? "Your Amazon Basket is empty"
                                : "Shopping Basket"
                        } </h1>

                        {
                            items.map((item,i) => (
                                <CheckoutProduct key={i}
                                id={ item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                hasPrime={item.hasPrime}/>
                            ))
                        }
                    </div>
                    </div>
                    
                    
                    
                    
                    {/* Right Side */}

                    <div className="flex flex-col bg-white p-10 shadow-md">
                        {items.length > 0 &&
                            <div>
                                <h2>Subtotal ({items.length} items)</h2>
                                <p>{total}</p>
                                <button
                                disabled={!session}
                                 className={`button-basket mt-3 
                                ${!session && 
                                "checkout-passive"
                                }
                                `}>

                                {!session ? "Sing in to checkout": "Proceed to checkhout" }
                                </button>

                            </div>
                        }
                    </div>


                </main>

            </div>
        </>
    )
}