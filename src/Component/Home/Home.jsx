import React, { useEffect } from "react";
import { Sidebar } from "./Sidebar";
// import { User } from './User'
import { MessageContainer } from "./MessageContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  initialSocket,
  setOnlineUser,
} from "../../store/slice/scoket/scoket.slic";
import { setnewMessage } from "../../store/slice/messsage/message.slic";
const Home = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, userProfile } = useSelector(
    (state) => state.userReducer
  );

  const { socket, onlineUser } = useSelector((state) => state.scoketreducer);

  useEffect(() => {
    if (!isAuthenticated) return;
  // console.log(isAuthenticated)
    dispatch(initialSocket(userProfile?._id));  // project run dekha 
  }, [isAuthenticated]);

  useEffect(() => {


    // if  (!socket) return;
   

    socket.on("userOnline", (onlineUser) => {
      // console.log(onlineUser);
      dispatch(setOnlineUser(onlineUser));
    });

    socket.on("newMessage", (newMessage) => {
     dispatch(setnewMessage(newMessage))
    });
    return () => {
      socket.close();
    };
  }, [socket]);

  return (
    <div className="flex">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
