import { doLogout } from "@/data/states/authenticatorSlice";
import { IoMdExit } from "react-icons/io";
import { useAppDispatch, useAppSelector, type AppState } from "@/data/store";

const Header = () => {
  const authentication = useAppSelector(
    (state: AppState) => state.authenticator.validity
  );
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(doLogout());
  };

  return (
    <header
      className={
        "py-12 xl:py-12 text-white bg-ja-darkblue transition-all duration-1000 " +
        (authentication === false
          ? "invisible opacity-0"
          : "visible opacity-100")
      }
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-semibold">James Allen</h1>
        <div>
          <div className="flex flex-row-reverse gap-2 pt-2">
            <button onClick={onLogout}>
              <span className="flex flex-row gap-1 items-center">
                <IoMdExit />
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
