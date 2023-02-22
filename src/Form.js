function Form() {
  return (
    <div className="form">
      <h2 style={{ fontStyle: "italic" }}>Sign in</h2>
      <input type="text" className="username" placeholder="username" />
      <input type="password" className="password" placeholder="password" />
      <button className="btn-login">Login</button>
    </div>
  );
}

export default Form;
