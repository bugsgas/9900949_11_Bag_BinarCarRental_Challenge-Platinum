import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function LayoutCustomer() {
  return (
    <div className="Clayout">
      <ScrollRestoration />
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
