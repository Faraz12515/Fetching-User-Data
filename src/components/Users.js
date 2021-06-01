import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../redux/actions/Actions";
import { Link } from "react-router-dom";

export default function Users() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.root);
  const { user_data } = state;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log("data:>> :>> ", response.data);
      dispatch(userData(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg">
      <h1 className="text-center rounded py-2">Users</h1>
      <div className="container-fluid">
        <div className="row">
          {user_data.map((v, i) => {
            return (
              <div
                key={v.id}
                className="col-md-4 d-flex justify-content-center px-2 my-5"
              >
                <div className="card" style={{ width: "18rem" }}>
                  {/* <img src="..." className="card-img-top" alt="..." /> */}
                  <div className="card-body">
                    <h5 className="card-title">{v.name}</h5>
                    <p className="card-text">
                      {v.address.city},{v.address.street} {v.address.suit}
                      {v.address.zipcode}
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{v.username}</li>
                    <li className="list-group-item">{v.email}</li>
                    <li className="list-group-item">{v.phone}</li>
                  </ul>
                  <div className="card-body">
                    <div className="d-flex justify-content-center">
                      <Link className="btn btn-dark" to={`/users/${v.id}`}>
                        User Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
