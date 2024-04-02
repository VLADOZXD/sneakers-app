import getProducts from "@/services/getProducts";

import PagesContent from "@/components/PagesContent/PagesContent";

const Home = async () => {
  const data = await getProducts();

  return (
    <>{data && <PagesContent pageTitle="All sneakers" pageItems={data} />}</>
  );
};

export default Home;
