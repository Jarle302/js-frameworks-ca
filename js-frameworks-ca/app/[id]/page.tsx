import { getItemById } from "../_api/apiCallFn";
import { Review } from "../_ui/components/Review";
import { item } from "../_store/useShopStore";

type Data = {
  data: item;
};

type paramsObject = {
  params: {
    id: string;
  };
};

const SpecificProduct = async ({ params }: paramsObject) => {
  const data: Data = await getItemById(params.id);
  console.log("this is the data data data data", data);
  return (
    <main className={"p-2"}>
      <div className={"flex gap-2 flex-wrap"}>
        <img
          className={"w-[320px] h-[320px] object-cover lg:w[500px] lg:h[300px]"}
          src={data.data.image.url}
          alt={data.data.image.alt}
        />
        <div className="flex flex-col justify-evenly">
          <div>
            <h1 className={"text-zinc-700 font-bold text-2xl lg:text-4xl"}>
              {data.data.title}
            </h1>

            {!data.data.discountedPrice &&
            data.data.price > data.data.discountedPrice ? (
              <p className={"lg:text-2xl lg:font-bold"}>{data.data.price}</p>
            ) : (
              <div>
                <span className="text-red-800 line-through">
                  {data.data.price}
                </span>
                <span className={"text-green-800 font-bold"}>
                  {data.data.discountedPrice}
                </span>{" "}
                {"   "}
                <span className={"bg-red-800 text-white p-1 "}>
                  {"Save " + (data.data.price - data.data.discountedPrice)}
                </span>{" "}
              </div>
            )}
          </div>
          <p className={"w-[280px]"}>{data.data.description}</p>
          <button
            className={
              "p-4 bg-neutral-800 rounded-lg  flex justify-center items-center text-neutral-100"
            }>
            Add to Cart
          </button>
        </div>
      </div>
      {data.data.rating}/5 Reviews({data.data.reviews.length}) <h2>Reviews</h2>
      <div
        className={
          " overflow-y-auto h-[150px] p-2 flex flex-col gap-2 max-w-[600px]"
        }>
        {data.data.reviews.length > 0 ? (
          data.data.reviews.map((review) => <Review {...review} />)
        ) : (
          <h3 className={"font-bold"}>Be the first to review this product!</h3>
        )}
      </div>
    </main>
  );
};

export default SpecificProduct;
