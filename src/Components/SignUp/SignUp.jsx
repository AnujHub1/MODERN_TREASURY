import logoImage from "../../assets/logo.png";
import Next from "../../assets/Next.png";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="SignUp-container">
      <div className="singUpForm">
        <h2>Sign Up</h2>
        <form className="formSign">
          <div className="inputDiv">
            <label htmlFor="name">
              Name<span>*</span>
            </label>
            <input id="name" type="text" name="name" required />
          </div>

          <div className="inputDiv">
            <label htmlFor="contact-number">
              Contact Number<span>*</span>
            </label>
            <input
              id="contact-number"
              type="number"
              name="ontact-number"
              required
            />
          </div>

          <div className="inputDiv">
            <label htmlFor="email">
              email<span>*</span>
            </label>
            <input id="email" type="email" name="email" required />
          </div>

          <div className="inputDiv">
            <label htmlFor="company">
              Company Name<span>*</span>
            </label>
            <input id="company" type="text" name="company" required />
          </div>
          <div className="inputDiv">
            <label htmlFor="emp">
              No of Employees<span>*</span>
            </label>
            <input id="emp" type="number" name="emp" required />
          </div>

          <a className="signup-Btn" href="/signup">
            Next
            <img src={Next} alt="Next arrow" />
          </a>
        </form>
        <div className="bottam">Modern Treasury&copy;</div>;
      </div>

      <div className="signup-image">
        <img src={logoImage} alt="sign up front image" />
      </div>
    </div>
  );
}

export default SignUp;
