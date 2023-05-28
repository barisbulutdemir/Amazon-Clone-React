import Head from "next/head";
import Header from "@/companents/Header";
import Banner from "@/companents/Banner";
import ProductFeed from "@/companents/ProductFeed";

export default function Home({ products }) {
  return (
      <div className="bg-gray-100 ">
        <Head>
          <title>Amazon 2.0</title>
        </Head>

        {/* Header */}
          <Header />
          <main className="max-w-6xl mx-auto ">
             {/* Banner */}
          <Banner  />


              {/* Products */}
          <ProductFeed products={products} />

          </main>


      </div>
  );
}


{/* apiden veriyi serverside olarak çekiyoruz. Normalde veriyi direk axios veya fetchle lazım olan sayfada çekebilirdik
 ama serverside yaptığımız için aşağıdaki metod ile çekiyoruz */}
export async function getServerSideProps(context) {
    const products = await fetch("http://fakestoreapi.com/products").then (
        (res) => res.json()
    );
    return {
        props: {
            products,
        }
    }
}
