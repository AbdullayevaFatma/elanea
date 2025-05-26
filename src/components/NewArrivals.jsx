import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import { products } from "../helpers/data.jsx";
import { useNavigate } from "react-router-dom";


const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute hidden sm:flex -left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
  >
    <ChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute hidden sm:flex -right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
  >
    <ChevronRight />
  </button>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const NewArrivals = () => {
  const navigate = useNavigate()
  
  
  return (
    <section className="py-10 relative">
      <h2 className="text-3xl font-semibold text-center mb-6">New Arrivals</h2>
      <div className="px-20">
        <div className="relative">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} >
              <div className=" p-2 cursor-pointer  text-center" onClick={()=>navigate(`/products/${product.id}`)}>
                
                <div className="relative w-full h-52  mx-auto mb-4 overflow-hidden group">
                  <img
                    src={product.image1}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src={product.image2}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                </div>
                <h3 className="font-semibold text-lg">{product.brand}</h3>
                <p className="text-gray-700">$ {product.price}</p>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800" onClick={()=>navigate("/products")}>
          SEE ALL
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
