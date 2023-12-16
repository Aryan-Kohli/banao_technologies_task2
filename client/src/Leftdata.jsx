import React, { useState, useEffect } from "react";

export default function Leftdata(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  const abc = props.alldata.map((x, index) => {
    return (
      <div
        key={`${x.id}-${index}`}
        onClick={() =>
          props.currentData(x.Bio, x.jobTitle, x.profile, x.avatar)
        }
        className="left_single_data"
      >
        {/* {index === props.alldata.length - 1 ? setDone(true) : setDone(false)} */}
        <p>
          {x.id}.{" "}
          {<img src={x.avatar} width={25} alt="img" className="small_img" />}{" "}
          {x.profile.username}
        </p>
      </div>
    );
  });
  return (
    <div className="mt-4 ">
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="row text-center users_list_head">
            <h1>Users List</h1>
          </div>
          <div className="row leftt">{abc}</div>
        </>
      )}
    </div>
  );
}
