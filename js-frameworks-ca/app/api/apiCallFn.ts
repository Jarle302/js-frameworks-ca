import { getAllProducts } from "../constants/constants";

export default async function getAll() {
  const response = await fetch(getAllProducts);
  if (!response.ok) {
    throw new Error("there was an error");
  }
  return response.json();
}
