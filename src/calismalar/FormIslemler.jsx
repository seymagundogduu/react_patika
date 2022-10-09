import "./App.css";
import {  useFormik} from "formik";

function App() {
  const {handleSubmit, handleChange, values} = useFormik({
    initialValues:{
    firstName: "Şeyma",
    lastName: "Gündoğdu",
    email: "symagn2@gmail.com",
    gender: "female",
    hobies: [],
    country: "Turkey",
    },
    onSubmit: (values) =>{
      console.log(values);
    },
  });

  return (
    <div className="App">
      <h1>Sign Up</h1>
      
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
       
            />
            <br />
            <br />
            <label htmlFor="lastName">Last Name</label>
            {/* <Field id="lastName" name="lastName" placeholder="Doe" /> */}
            <input
              id="firstName"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            <br />
            <br />
            <label htmlFor="email" onChange={handleChange}>
              Email
            </label>
            {/* <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        /> */}
            <input id="email" name="email"  value={values.email} onChange={handleChange} />
            <br />
            <br />
            <span>Male</span>
            <input
              type="radio"
              id="gender"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={values.gender === "male"}
            />
            <span>Female</span>
            <input
              type="radio"
              id="gender"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={values.gender === "female"}
            />
            <br />
            <br />
            <br />
            <div>
              <input type="checkbox" name="hobies" value="Football" onChange={handleChange} />
              Football
            </div>
            <div>
              <input type="checkbox" name="hobies" value="Cinema"  onChange={handleChange}/>
              Cinema
            </div>
            <div>
              <input type="checkbox" name="hobies" value="Photography"  onChange={handleChange}/>
              Photography
            </div>
            <br />
            <br />

            <select name="country" value={values.country} onChange={handleChange} >
             <option  value="turkey">Turkey</option>
             <option  value="england">England</option>
             <option  value="usa">USA</option>

            </select>


            <br/>
            <br/>
            <button type="submit">Submit</button>
            <br /> <br />
            {JSON.stringify(values)}
          </form>
       
    </div>
  );
}

export default App;
