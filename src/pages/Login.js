import "./login.css";

export default function Login() {
  return (
    <>
      <div className="login">
        <div className="form-container">
          <form className="form">
            <div className="form-input-container">
              <label className="label">FullName</label>
              <input
                type="text"
                placeholder="Enter FullName"
                className="input"
              />
            </div>
            <div className="form-input-container">
              <label className="label">Email</label>
              <input type="email" placeholder="Enter email" className="input" />
            </div>
            <div className="form-input-container">
              <label className="label">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="input"
              />
            </div>
            <div className="login-option-container">
              <div>
                <button className="login-btn">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
