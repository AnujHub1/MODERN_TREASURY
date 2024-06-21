import logo2 from "../../assets/logo2.png";
import "./SignUpForm.css";
import Bottam2 from "./Bottam2";
function SignUpForm() {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>

        <form>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>

          <div className="input-group">
            <label htmlFor="con-password">Confirm Password</label>
            <input
              type="password"
              id="con-password"
              name="con-password"
              required
            />
          </div>

          <button type="submit" className="Btn">
            Sign Up
          </button>
        </form>
        <div className="bottamForm2">
          <Bottam2></Bottam2>
        </div>
      </div>
      <div className="signUpImage">
        <img src={logo2} alt="SignUp image" />
      </div>
    </div>
  );
}

export default SignUpForm;
