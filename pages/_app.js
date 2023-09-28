import Footer from "@/components/footer/Footer";
import NavBar from "@/components/header/Navbar";
import "@/styles/globals.css";
import "@/styles/account.css";
import "@/styles/addressbook.css";
import "@/styles/auth.css";
import "@/styles/bulkorder.css";
import "@/styles/category.css";
import "@/styles/productdetails.css";
import "@/styles/similarproducts.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
