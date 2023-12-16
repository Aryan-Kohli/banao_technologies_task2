import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Leftdata from "./Leftdata";
import Rightdata from "./Rightdata";
function App() {
  const [alldata, setAllData] = useState([]);
  const [Bio, setBio] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [jobTitle, setJobTitle] = useState(null);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    // console.log(response.data);
    // setAllData(response.data);
    const fetchdata = async () => {
      const response = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      setAllData(response.data);
    };
    fetchdata();
  }, []);
  useEffect(() => {
    if (alldata.length > 31) {
      setBio(alldata[31].Bio);
      setJobTitle(alldata[31].jobTitle);
      setProfile(alldata[31].profile);
      setAvatar(alldata[31].avatar);
    }
  }, [alldata]);
  function seeclicked(bio, title) {
    console.log(bio, title);
  }
  function currentData(bio, title, profile, avatar) {
    console.log("function called");
    setBio(bio);
    console.log("bio is : ", Bio);
    setJobTitle(title);
    setProfile(profile);
    setAvatar(avatar);
  }
  return (
    <>
      <div className="container">
        {alldata ? (
          <div className="row">
            <div className="col-md-6">
              <Leftdata
                alldata={alldata}
                seeclicked={seeclicked}
                currentData={currentData}
              />
            </div>
            <div className="col-md-5 offset-md-1 mt-4">
              {alldata ? (
                <div className="">
                  <Rightdata
                    Bio={Bio}
                    jobTitle={jobTitle}
                    profile={profile}
                    avatar={avatar}
                  />
                </div>
              ) : (
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
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
    </>
  );
}

export default App;
