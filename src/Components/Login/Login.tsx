import React from "react";
import loginHome1 from "../../assets/loginHome1.svg";
import loginHome2 from "../../assets/loginHome2.svg";
import loginHome3 from "../../assets/loginHome3.svg";
import { useState } from "react";
import "../../css/login.css";
import { useEffect } from "react";
import { type } from "os";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [text, setText] = useState<string>("");
  const [pass, setPass] = useState<boolean>(true);
  const navigate=useNavigate()

  const handleChange = (e: any) => {
    //   console.log(typeof e.target.value);
    setText(e.target.value);
    setPass(true)
  };
  useEffect(() => {
    loginReq(null);
  }, []);
  const loginReq = async (e: any) => {
    try {
      e.preventDefault();
      let payload;
      let Num;
      Num =  text ;
    //   console.log(Number(Num))

    //   if (typeof Number(text) == "number") {
    //     console.log(text)
    //     payload={
    //         Number:text
    //     }
    //   }else{
    //     console.log(text)
    //     payload={
    //         EmailId:text
    //     }
    //   }
    payload={
                Number:text    }
      let res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data = await res.json();
      if(data){
        navigate("/otp")
      }else{

          setPass(data);
      }

        // console.log("dad"+data)
    } catch (error) {
      //   alert("Your user ID or password is incorrect");
    }
  };
  // console.log(pass)
  return (
    <div className="loginMain">
      <div className="leftSide">
        <p className="loginHead">Welcome Back</p>
        <p className="loginHead1">Please enter your details</p>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your phone number/ email"
          onChange={handleChange}
        />
        {!pass && (
          <p className="wrongNumber">Please enter a registered Phone number</p>
        )}

        {/* <button  className="loginButton" onClick={loginReq} disabled={true} >Get OTP</button> */}
        <button style={{backgroundColor: pass && text.length > 0 ? "black":"#c8cdca"}} className="loginButton" onClick={loginReq} disabled={pass?text.length==0:text.length>0}>Get OTP</button>

        {/* {pass ? (
          <button className="loginButton" onClick={loginReq}>
            {" "}
            Get OTP
          </button>
        ) : (
          <button className="blackButton"> Get OTP</button>
        )} */}
        <div className="helpMainDiv">
          <a className="helpHome">Having trouble signing in ?</a>
          <a className="helpRessolve">Get help</a>
        </div>
      </div>
      <div className="rightSide">
        {/* <img src={loginHome1} alt="" /> */}

        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner loginHomeImage">
            <div className="carousel-item active loginHomeImage-wrapper">
              <img src={loginHome1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>YOURS</h1>
                <p>
                  Where fractional ownership becomes a new way of owning
                  property
                </p>
              </div>
            </div>
            <div className="carousel-item loginHomeImage-wrapper">
              <img src={loginHome2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>YOURS</h1>
                <p>Resolve all the complaints and requests in one place.</p>
              </div>
            </div>
            <div className="carousel-item loginHomeImage-wrapper">
              <img src={loginHome3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>YOURS</h1>
                <p>Manage the properties, logs and all the visits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
