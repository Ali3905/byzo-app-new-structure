import ProductsSlider from "@/components/homepage/ProductsSlider";
import BannerSlider from "@/components/homepage/BannerSlider";
import Categories from "@/components/homepage/Categories";
import HeroSection from "@/components/homepage/HeroSection";
import BrandsSection from "@/components/homepage/BrandSection";
import MockupSection from "@/components/homepage/MockupSection";
import categoryData from "@/data/categoryData"
import BulkOrderSection from "@/components/homepage/BulkOrderSection";
import Auth from "./auth";

// import { connectDatabase } from "@/utils/mongo"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductsSlider />
      <BannerSlider />
      <Categories heading={"Categories"} categoryData={categoryData}/>
      <Categories heading={"Explore new Categories"} categoryData={categoryData.slice(0, 16)}/>
      <BulkOrderSection />
      <BrandsSection />
      <MockupSection />
      {/* <Auth /> */}
    </main>
  );
}

// export async function getServerSideProps() {
//   const db = await connectDatabase();
//   const bannerData = await db.collection("banners").find().toArray();
//   const productsData = await db.collection("products").find().toArray();
//   const categoriesData = await db.collection("categories").find().toArray();
//   return {
//     props: {
//       bannerData: JSON.parse(JSON.stringify(bannerData)),
//       productsData: JSON.parse(JSON.stringify(productsData)),
//       categoriesData: JSON.parse(JSON.stringify(categoriesData)),
//     },
//   };
// }
