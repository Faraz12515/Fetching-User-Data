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
    <div>
      <h1 className="text-center border border-bottom border-dark">
        UserDetails
      </h1>
      <div className="row d-flex justify-content-center">
        {userDetails.map((user, i) => {
          return (
            <div
              key={user.id}
              className="col-md-4 d-flex justify-content-center px-2 mt-5"
            >
              <div class="card" style={{ width: "18rem" }}>
                {/* <img src="..." class="card-img-top" alt="..." /> */}
                <div class="card-body">
                  <h5 class="card-title">{user.name}</h5>
                  <p class="card-text">
                    {user.address.city},{user.address.street}{" "}
                    {user.address.suit}
                    {user.address.zipcode}
                  </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">{user.username}</li>
                  <li class="list-group-item">{user.email}</li>
                  <li class="list-group-item">{user.phone}</li>
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
