import { get, ref } from "firebase/database";
import { db } from "./firebase";

const getProducts = async () => {
  const dbRef = await ref(db, "products");

  let data;

  await get(dbRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        data = snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return data;
};

export default getProducts;
