import { useLoaderData } from "react-router";
import { FetchProduct } from "../api/ProductApies";
import ProductCard from "../components/ProductCard";
const Home = () => {
  console.log('home rendering...');
  
    let data = useLoaderData()
    console.log(data);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
      {/* <h1 className="text-3xl text-center text-pink-600 p-3 font-bold">Home</h1> */}

    {data.map((elem)=>{
      return <ProductCard key={elem.id} product={elem}/>
    })}

      
    </div>
  );
};

export default Home;
