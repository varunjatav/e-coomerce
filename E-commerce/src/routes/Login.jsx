import { useRef } from "react";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/loginSlice";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    const username = emailRef.current.value;
    const password = passwordRef.current.value;
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: 'kminchelle',
          password: '0lelplR',
          // expiresInMins: 60, // optional
        })
      })
      .then(res => res.json())
      .then(dispatch(loginActions.loginUsers()));

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <main className="form-signin w-25 m-auto my-5">
      <form onSubmit={handleLogin}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating mb-2">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            ref={emailRef}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            ref={passwordRef}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

       
        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
      </form>
    </main>
  );
};

export default Login;
