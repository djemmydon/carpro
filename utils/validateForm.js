export default function validateForm(values) {
    let error = {};
  
    if (!values.name) {
      error.name = "Your Name Required";
    }
    if (!values.phone) {
      error.phone = "Phone Number is Required";
    }
    if (!values.typeOf) {
      error.typeOf = "Type is Required";
    }
    if (!values.city) {
      error.city = "City is Required";
    }
    if (!values.state) {
      error.state = "State is Required";
    }
  
    if (!values.password) {
      error.password = "Password Required";
    } else if (values.password.length <= 6) {
      error.password = "Password needs to be 6 characters or more";
    }
    if (!values.email) {
      error.email = "Email is Required";
    } else if (!/^[A-Z0._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      error.email = "Email is invalid";
    }
  
    return error;
  }