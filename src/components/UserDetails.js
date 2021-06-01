import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function UserDetails(props) {
  const state = useSelector((state) => state.root);
  const { user_data } = state;
  let id = props.match.params.id;
  const userDetails = user_data.filter((user, i) => {
    return user.id === parseInt(id);
  });
  console.log("userDetails :>> ", userDetails);
  return (
    <div className="bg" style={{ height: "100vh" }}>
      <h1 className="text-center rounded">UserDetails</h1>
      <div className="container-fluid d-flex justify-content-center">
        {userDetails.map((user, i) => {
          return (
            <div
              key={user.id}
              className="col-md-4 d-flex justify-content-center px-2 my-5"
            >
              <div className="card" style={{ width: "18rem" }}>
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">
                    {user.address.city},{user.address.street}{" "}
                    {user.address.suit}
                    {user.address.zipcode}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{user.username}</li>
                  <li className="list-group-item">{user.email}</li>
                  <li className="list-group-item">{user.phone}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withRouter(UserDetails);
