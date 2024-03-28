import { Carousel } from "./";
import { item } from "@/app/_store/useShopStore";
import getAll from "@/app/_api/apiCallFn";
import { ImSteam } from "react-icons/im";
import { isPagesAPIRouteMatch } from "next/dist/server/future/route-matches/pages-api-route-match";
export const CarouselWrapper = async () => {
  const data = await getAll();
  const numberOfPosts = 5
  const posts = getCheapest(data.data, numberOfPosts);
  return <Carousel posts={posts} />;
};

function getCheapest(arr: item[], numberOfItems: number) {
  const posts = arr
    .filter((product) => product.price > product?.discountedPrice)
    .toSorted((itemA: item, itemB: item) => {
      return (
        itemA.price -
        itemA.discountedPrice -
        (itemB.price - itemB.discountedPrice)
      );
    });
  return posts.slice(0, numberOfItems);
}
