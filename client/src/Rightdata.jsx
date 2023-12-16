import React from "react";

export default function Rightdata(props) {
  return (
    <div className="">
      {props.profile ? (
        <div className="rightt">
          <div className="row text-center users_list_head">
            <div className="col">
              <h1>User Details</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mx-auto mt-4">
              <img
                src={props.avatar}
                className="detail_img"
                alt="Avatar Img"
              ></img>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12 username mt-3">
              @{props.profile.username}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-7 mx-auto bioo">{props.Bio}</div>
          </div>
          <div className="row field_head">Full Name</div>
          <div className="row">
            <div className="col fields">
              {props.profile.firstName} {props.profile.lastName}
            </div>
          </div>
          <div className="row field_head mt-2">Job Title</div>
          <div className="row">
            <div className="col fields">{props.jobTitle}</div>
          </div>
          <div className="row field_head mt-2">Email</div>
          <div className="row">
            <div className="col fields">{props.profile.email}</div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}
