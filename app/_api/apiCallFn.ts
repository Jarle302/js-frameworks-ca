import { getAllProducts } from "../_constants/constants";

export default async function getAll() {
  const response = await fetch(getAllProducts);
  if (!response.ok) {
    throw new Error("there was an error");
  }
  return response.json();
}
const getItemById = async (id: string) => {
  const response = await fetch(getAllProducts + "/" + id);
  if (!response.ok) {
    throw new Error("there was an error");
  }
  console.log(response);
  return response.json();
};

export { getItemById };
