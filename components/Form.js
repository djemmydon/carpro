import styles from "../styles/footer.module.css";


const Form = ({styling, onSubmit, onChangeData, loading}) => {
console.log(process.env.NEXT_APP_EMAIL_PASS, process.env.NEXT_APP_EMAIL)
  
    return (
        <form  onSubmit={onSubmit}>
            <div className={styling.formBody}>
                <h2>Book an inspection</h2>
                <div className={styling.formItem}>
                    <label>
                        Name
                    </label>
                    <input
                    name="name"
                    onChange={onChangeData}
                    type="text" placeholder="Enter your name" />
            </div>
                <div className={styling.formItem}>
                    <label>
                        Phone Number
                    </label>
                    <input
                       name="phone"
                       onChange={onChangeData}
                        type="text" placeholder="Enter your Phone number" />
            </div>
                <div className={styling.formItem}>
                    <label>
                        Email
                    </label>
                    <input
                       name="email"
                       onChange={onChangeData}
                        type="text" placeholder="Enter your email" />
            </div>
                <div className={styling.formItem}>
                    <label>
                        Pickup Address
                    </label>
                    <input
                       name="address"
                       onChange={onChangeData}
                        type="text" placeholder="Enter your address" />
            </div>
                <div className={styling.formItem}>
                    <label>
                        State
                    </label>
                    <input
                       name="state"
                       onChange={onChangeData}
                        type="text" placeholder="Enter your state" />
            </div>
                <div className={styling.formItem}>
                    <label>
                        City
                    </label>
                    <input
                           name="city"
                           onChange={onChangeData}
                        type="text" placeholder="Enter your city" />
            </div>
                <div className={styling.formItem}>
                    <label>
                        Date
                    </label>
                    <input 
                       name="date"
                       onChange={onChangeData}
                        type="date" />
            </div>
                <div className={styling.formItem}>
                    <label>
                        Time
                    </label>
                    <input
                           name="time"
                           onChange={onChangeData}
                        type="time" />
                </div>
            <button type="submit">{loading ? "Loading" : "Submit"} </button>
                
            </div>

        </form>
    )
}


export default Form


export const Form2 = ({styling, onSubmit, onChangeData, loading}) => {
    console.log(process.env.NEXT_APP_EMAIL_PASS, process.env.NEXT_APP_EMAIL)
      
        return (
            <form  onSubmit={onSubmit}>
                <div className={styling.formBody}>
                    <h2>Create Account</h2>
                    <div className={styling.formItem}>
                        <label>
                            Full Name
                        </label>
                        <input
                        name="name"
                        onChange={onChangeData}
                        type="text" placeholder="Enter your name" />
                </div>
                    <div className={styling.formItem}>
                        <label>
                            Phone Number
                        </label>
                        <input
                           name="phone"
                           onChange={onChangeData}
                            type="text" placeholder="Enter your Phone number" />
                </div>
                    <div className={styling.formItem}>
                        <label>
                            Email
                        </label>
                        <input
                           name="email"
                           onChange={onChangeData}
                            type="text" placeholder="Enter your email" />
                </div>
                    <div className={styling.formItem}>
                        <label>
                            State
                        </label>
                        <input
                           name="state"
                           onChange={onChangeData}
                            type="text" placeholder="Enter your state" />
                </div>
                    <div className={styling.formItem}>
                        <label>
                            City
                        </label>
                        <input
                               name="city"
                               onChange={onChangeData}
                            type="text" placeholder="Enter your city" />
                </div>
                    <div className={styling.formItem}>
                        <label>
                            Password
                        </label>
                        <input
                               name="password"
                               onChange={onChangeData}
                            type="password" placeholder="Enter Password" />
                    </div>
                    
                <button type="submit">{loading ? "Loading" : "Sign Up"} </button>
                    
                </div>
    
            </form>
        )
    }
    