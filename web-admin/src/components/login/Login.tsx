import { useState, useEffect, type ChangeEvent } from "react";
import { IoLogIn } from "react-icons/io5";
import CryptoJS from "crypto-js";
import { setAuthenticator } from "@/data/states/authenticatorSlice";
import { useCreateAuthenticationMutation } from "@/data/api/authenticationApiSlice";

import { useAppSelector, useAppDispatch, type AppState } from "@/data/store";

const SECRET_KEY = "e2e100745d928ef29ba83f040f228c7a";

const encryptCredentials = (username: string, password: string) => {
  const data = JSON.stringify({ username, password });
  const encrypted = CryptoJS.AES.encrypt(
    data,
    CryptoJS.enc.Utf8.parse(SECRET_KEY),
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }
  );

  return encrypted.toString();
};

const Login = () => {
  const dispatch = useAppDispatch();
  const authentication = useAppSelector(
    (state: AppState) => state.authenticator.validity
  );

  const [hasUsername, setHasUsername] = useState(true);
  const [hasPassword, setHasPassword] = useState(true);
  const [loginState, setLoginState] = useState(true);
  const [username, setUsername] = useState("jallen");
  const [password, setPassword] = useState("adminroot");

  const [triggerLogin, setTriggerLogin] = useState(false);
  const [refetchCounter, setRefetchCounter] = useState(0);
  // const { data: authData, refetch } = useGetAuthenticationQuery(
  //   { username, password },
  //   { skip: !triggerLogin }
  // );

  const [createAuthentication] = useCreateAuthenticationMutation();

  const onChangeInput = (e: ChangeEvent) => {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    if (target.id === "username") {
      setHasUsername(target.value.length > 0);
      setUsername(target.value);
    } else if (target.id === "password") {
      setHasPassword(target.value.length > 0);
      setPassword(target.value);
    } else return;
  };

  const onLogin = async () => {
    const result = await createAuthentication({
      message: encryptCredentials(username, password),
    }).unwrap();
    console.info("Success", result);
    dispatch(setAuthenticator({ value: result }));
    // if (triggerLogin) {
    // refetch();
    //   setRefetchCounter((prev) => prev + 1);
    // } else {
    // setTriggerLogin(true);
    // }
    setLoginState(false);
  };

  return (
    <div
      className={
        "w-[400px] h-[250px] bg-ja-darkblue text-ja-white p-5 rounded-xl mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2] transition-all duration-1000 " +
        (authentication ? "invisible opacity-0" : "visible opacity-100")
      }
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold text-center">James Allen</h1>
        <div className="flex flex-col">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            className="font-karla"
            onChange={onChangeInput}
            value={username}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="font-karla"
            onChange={onChangeInput}
            value={password}
          ></input>
        </div>
        <div className="flex flex-row-reverse">
          <div className="buttonset">
            <button
              id="login"
              disabled={!hasUsername || !hasPassword || !loginState}
              onClick={onLogin}
            >
              <span className="flex flex-row gap-1 items-center">
                <IoLogIn /> Login
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
