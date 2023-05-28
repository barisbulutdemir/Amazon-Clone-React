import {Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon} from "@heroicons/react/24/outline";
import Image from 'next/image';
import {signIn, signOut, useSession } from 'next-auth/react'
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {selectItems} from "@/slices/basketSlice";


export default function Header() {
    const { data: session, status } = useSession();

    const items = useSelector(selectItems);

    const router = useRouter();
    return (
        <>
            <header>
                {/* Top nav */}
                <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 ">
                    <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                        <Image
                         onClick={() => router.push('/')}
                         src="https://links.papareact.com/f90" alt="logo"
                        width={150} height={40}
                        className="cursor-pointer mx-2 "/>
                    </div>

                    {/*  SearchBar  */}
                    <div className=" bg-yellow-400 hover:bg-yellow-500 hidden sm:flex
                    items-center h-10 rounded-md flex-grow cursor-pointer flex-shrink  ">
                        <input type="text" className="p-2 h-full w-6 flex-grow  rounded-l-md focus:outline-none
                        px-4" />
                        <MagnifyingGlassIcon className="h-12 p-4 "/>
                    </div>

                    {/* right  */}
                    <div className="text-white flex  items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                        <div onClick={ !session  ? signIn: signOut } className=" link ">
                            <p>
                                {session ? `Hello, ${session.user.name}` : 'SingIn'}
                            </p>
                            <p className="font-extrabold md:text-sm ">Account & Lists </p>
                        </div>
                        <div className="link">
                            <p>Returns </p>
                            <p className="font-extrabold md:text-sm"> & Orders</p>
                        </div>
                        <div className=" relative link flex  items-center "
                            onClick={() => router.push('/checkout')}>
                            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold ">{items.length}</span>
                            <ShoppingCartIcon className="h-10" />
                            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                        </div>

                    </div>
                </div>

                {/* bottom nav */}
                <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
                    <p className="link flex items-center">
                        <Bars3Icon className="h-6 mr-1"/>
                        All
                    </p>
                    <p className="link ">Prime Video</p>
                    <p className="link ">Amazon Business</p>
                    <p className="link ">Today s Deals</p>
                    <p className="link hidden lg:inline-flex ">Electronics</p>
                    <p className="link hidden lg:inline-flex ">Food & Grocery</p>
                    <p className="link hidden lg:inline-flex ">Prime</p>

                </div>
            </header>

        </>
    )
}