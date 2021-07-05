// import React, { useState } from "react";
// import ProductListing from "./ProductListing";

// const Form = () => {
//   const [state, setState] = useState({
//     name: "",
//     email: "",
//   });
//   const [allEntry, setAllEntry] = useState([]);
//   const [show, setShow] = useState(false);

//   const handleChange = (e) => {
//     setState((prevState) => {
//       return {
//         ...prevState,
//         [e.target.name]: e.target.value,
//       };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setState({
//       name: "",
//       email: "",
//     });

//     const newEntry = { name: state.name, email: state.email };
//     setAllEntry([...allEntry, newEntry]);

//     setShow(!show);
//     console.log(`FormData :>>`, state);
//     // alert("Form Submited...");
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           onChange={handleChange}
//           value={state.name}
//           required
//         />
//         <label>Email</label>
//         <input
//           type="text"
//           name="email"
//           onChange={handleChange}
//           value={state.email}
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         {/* <h2>Name: {show === true && state.name}</h2>
//         <h2>Email: {show === true && state.email}</h2> */}
//         {allEntry.map((v, i) => {
//           return (
//             <div key={i}>
//               <h2>Name: {v.name}</h2>
//               <h2>Email : {v.email}</h2>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Form;

import React, { useState } from "react";

export default function Form() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [allEntry, setAllEntry] = useState([]);

  const handleChange = (e) => {
    setState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setState({
      name: "",
      email: "",
      password: "",
    });
    const newEntry = {
      name: state.name,
      email: state.email,
      password: state.password,
    };
    setAllEntry([...allEntry, newEntry]);
    console.log(`FormData:>>`, state);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="JohnDoe@gmail.com"
          onChange={handleChange}
        />
        <label>Password</label>
        <input type="text" name="password" onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
      <div>
        {allEntry.map((v, i) => {
          return (
            <div key={i}>
              <h2>Name: {v.name}</h2>
              <h2>Email: {v.email}</h2>
              <h2>Password: {v.password}</h2>
            </div>
          );
        })}
      </div>
      )
    </div>
  );
}
