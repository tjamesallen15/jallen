import Header from "./header/Header";
import Admin from "./admin/Admin";
import Footer from "./footer/Footer";
import { useAppSelector, type AppState } from "@/data/store";

const Main = () => {
  const authentication = useAppSelector(
    (state: AppState) => state.authenticator.validity
  );
  return (
    <>
      <Header />
      <Admin authentication={authentication} />
      <Footer authentication={authentication} />
    </>
  );
};

export default Main;
