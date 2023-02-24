// import { ThemeContext } from "./App";
import { Tombol } from "./Tombol";

function Form() {
  // membaca data themeContext yang diparsing dari provider
  return (
    // <ThemeContext.Consumer>
    //   {(value) => {
    //     return (
    //       <>
    //         <div className="form">
    //           <h2 style={{ fontStyle: "italic" }}>Sign in</h2>
    //           <input type="text" className="username" placeholder="username" />
    //           <input
    //             type="password"
    //             className="password"
    //             placeholder="password"
    //           />
    //           <button className="btn-login">Login</button>
    //         </div>
    //         <h3>{value.theme}</h3>
    //       </>
    //     );
    //   }}
    // </ThemeContext.Consumer>
    <div className="form">
      <h2 style={{ fontStyle: "italic" }}>Sign in</h2>
      <input type="text" className="username" placeholder="username" />
      <input type="password" className="password" placeholder="password" />
      <Tombol />
    </div>
  );
}

export default Form;
