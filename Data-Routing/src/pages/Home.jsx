import { useLoaderData } from "react-router";
import { FetchProduct } from "../api/ProductApies";
const Home = () => {
  console.log('home rendering...');
  
    let data = useLoaderData()
    console.log(data);
    

// FetchProduct().then((res) => {
//   console.log(res);
// });
  
  
//  FetchProduct().then((res) => console.log(res));

  return (
    <div className="">
      <h1 className="text-3xl text-center text-pink-600 p-3 font-bold">Home</h1>
    </div>
  );
};

export default Home;
