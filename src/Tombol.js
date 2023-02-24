import { ThemeContext } from "./App";
export const Tombol = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        return (
          <>
            <button className="btn-login">Login {value.theme}</button>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};
