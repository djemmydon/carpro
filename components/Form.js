import Link from "next/link";
import styles from "../styles/footer.module.css";

const Form = ({ styling, onSubmit, onChangeData, loading }) => {
  console.log(process.env.NEXT_APP_EMAIL_PASS, process.env.NEXT_APP_EMAIL);

  return (
    <form onSubmit={onSubmit}>
      <div className={styling.formBody}>
        <h2>Book an inspection</h2>
        <div className={styling.formItem}>
          <label>Name</label>
          <input
            name="name"
            onChange={onChangeData}
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className={styling.formItem}>
          <label>Phone Number</label>
          <input
            name="phone"
            onChange={onChangeData}
            type="text"
            placeholder="Enter your Phone number"
          />
        </div>
        <div className={styling.formItem}>
          <label>Email</label>
          <input
            name="email"
            onChange={onChangeData}
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div className={styling.formItem}>
          <label>Pickup Address</label>
          <input
            name="address"
            onChange={onChangeData}
            type="text"
            placeholder="Enter your address"
          />
        </div>
        <div className={styling.formItem}>
          <label>State</label>
          <input
            name="state"
            onChange={onChangeData}
            type="text"
            placeholder="Enter your state"
          />
        </div>
        <div className={styling.formItem}>
          <label>City</label>
          <input
            name="city"
            onChange={onChangeData}
            type="text"
            placeholder="Enter your city"
          />
        </div>
        <div className={styling.formItem}>
          <label>Date</label>
          <input name="date" onChange={onChangeData} type="date" />
        </div>
        <div className={styling.formItem}>
          <label>Time</label>
          <input name="time" onChange={onChangeData} type="time" />
        </div>
        <div className={styling.formItem}>
          <button type="submit">{loading ? "Loading" : "Sign Up"} </button>
        </div>
      </div>
    </form>
  );
};

export default Form;

export const Form2 = ({ styling, onSubmit, onChangeData, loading, error }) => {
  console.log(process.env.NEXT_APP_EMAIL_PASS, process.env.NEXT_APP_EMAIL);

  return (
    <form onSubmit={onSubmit}>
      <div className={styling.formBody}>
        <h2>Create Account</h2>
        <div className={styling.formItem}>
          <label>Full Name</label>
          <input
            name="name"
            onChange={onChangeData}
            type="text"
            placeholder="Enter your name"
          />
          {error.name && <p>{error.name}</p>}
        </div>
        <div className={styling.formItem}>
          <label>Phone Number</label>
          <input
            name="phone"
            onChange={onChangeData}
            type="text"
            placeholder="Enter your Phone number"
          />
          {error.phone && <p>{error.phone}</p>}
        </div>
        <div className={styling.formItem}>
          <label>Email</label>
          <input
            name="email"
            onChange={onChangeData}
            type="text"
            placeholder="Enter your email"
          />
          {error.email && <p>{error.email}</p>}
        </div>
        <div className={styling.formItem}>
          <label>State</label>
          <input
            name="state"
            onChange={onChangeData}
            type="text"
            placeholder="Enter your state"
          />
          {error.state && <p>{error.state}</p>}
        </div>
        <div className={styling.formItem}>
          <label>City</label>
          <input
            name="city"
            onChange={onChangeData}
            type="text"
            placeholder="Enter your city"
          />
          {error.city && <p>{error.city}</p>}
        </div>
        <div className={styling.formItem}>
          <label>Password</label>
          <input
            name="password"
            onChange={onChangeData}
            type="password"
            placeholder="Enter Password"
          />
          {error.password && <p>{error.password}</p>}
        </div>

        <div className={styling.formItem}>
          <button type="submit">{loading ? "Loading" : "Sign Up"} </button>
        </div>
        <p>
          Already have an account{" "}
          <Link href="/signin" style={{ color: "#428bca" }}>
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};
export const Form3 = ({ styling, onSubmit, onChangeData, loading, error }) => {
  console.log(process.env.NEXT_APP_EMAIL_PASS, process.env.NEXT_APP_EMAIL);

  return (
    <form onSubmit={onSubmit}>
      <div className={styling.formBody}>
        <h2>Login</h2>
        <div className={styling.formItem}>
          <label>Email</label>
          <input
            name="email"
            onChange={onChangeData}
            type="text"
            placeholder="Enter your email"
          />
          {error.email && <p>{error.email}</p>}
        </div>

        <div className={styling.formItem}>
          <label>Password</label>
          <input
            name="password"
            onChange={onChangeData}
            type="password"
            placeholder="Enter Password"
          />
          {error.password && <p>{error.password}</p>}
        </div>

        <div className={styling.formItem}>
          <button type="submit">{loading ? "Loading" : "Sign Up"} </button>
        </div>

        <p>
          Create a new account{" "}
          <Link href="/signup" style={{ color: "#428bca" }}>
            Signup
          </Link>
        </p>
      </div>
    </form>
  );
};
