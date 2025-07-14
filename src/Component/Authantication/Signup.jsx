import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { BsGenderNeuter } from "react-icons/bs";

import { RegisterUserThunk } from "../../store/slice/user/userThunk";
import toast from "react-hot-toast";
const Signup = () => {
  let dispatch = useDispatch();
  const [fullname, setName] = useState("");
  const [gender, setgender] = useState("male");
  const [avatar, setavater] = useState(null);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [conformpass, setconformpass] = useState("");

  let naviagate = useNavigate();
  let [info, setinfo] = useState(0);


   const {isAuthenticated}=useSelector(state=>state.userReducer)


      useEffect(()=>{
    
  if(isAuthenticated) naviagate("/")

  },[isAuthenticated])
  const handelSubmit = async (e) => {
    e.preventDefault();

    if (password !== conformpass) {
      toast.error("passwnot not match to confrim password");
      return;
    }


    const formdata = new FormData();
    formdata.append("fullName", fullname);
    formdata.append("username", username);
    formdata.append("password", password);
    formdata.append("gender", gender);
    formdata.append("avatar", avatar);

    // console.log(fromdata)

    const response = await dispatch(RegisterUserThunk(formdata));

    //  console.log(response.payload.success)
    if (response?.payload?.success) {
      naviagate("/");
    }
  };

  useEffect(() => {
    let total = 0;
    if (fullname.trim()) total += 20;
    if (username.trim()) total += 20;
    if (password.trim()) total += 20;
    if (conformpass.trim()) total += 20;
    if (gender) total += 10;
    if (avatar) total += 10;
    setinfo(total);
  }, [fullname, username, password, conformpass, gender, avatar]);

  return (
    <>
      <div className="mains content-center flex items-center justify-center w-full mt-10 ">
        <div
          className="radial-progress  "
          style={{ "--value": info }}
          aria-valuenow={info}
          role="progressbar"
        >
          {info}%
        </div>{" "}
      </div>

      <form
        className="flex justify-center p-6 items-center h-[80vh]"
        onSubmit={handelSubmit}
      >
        <div className="flex flex-col gap-5 w-[30rem] justify-center items-center p-6 bg-base-200 rounded-[30px]">
          <h1>please Login</h1>
          <label className="input">
            <FaUser />
            <input
              type="text"
              className="grow"
              placeholder="fullName"
              name="fullName"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="input">
            <FaUser />
            <input
              type="text"
              className="grow"
              placeholder="Username"
              name="username"
              onChange={(e) => setusername(e.target.value)}
            />
          </label>

          <label className="input">
            <IoKeySharp />
            <input
              type="password"
              className="grow"
              placeholder="password"
              name="password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </label>
          <label className="input">
            <IoKeySharp />
            <input
              type="password"
              className="grow"
              placeholder="confom password"
              name="conformPassword"
              onChange={(e) => setconformpass(e.target.value)}
            />
          </label>

          <label className="input">
            <BsGenderNeuter />
            <input
              type="radio"
              name="gender"
              value="male"
              className="radio radio-xs"
              defaultChecked
              onChange={(e) => setgender(e.target.value)}
            />
            male
            <input
              type="radio"
              name="gender"
              value="female"
              className="radio radio-xs"
              onChange={(e) => setgender(e.target.value)}
            />
            female
          </label>

          <label className="input">
            <RxAvatar className="size-7" />
            <input
              type="file"
              className=" text-center"
              name="avatar"
              onChange={(e) => setavater(e.target.files[0])}
            />
            avatar
          </label>
          <button className=" w-[75%] btn btn-primary" type="submit">
            signup
          </button>
          <p>
            do not hav an Account?{" "}
            <Link to="/login">
              {" "}
              <button className="btn btn-dash btn-primary">Login</button>
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Signup;
