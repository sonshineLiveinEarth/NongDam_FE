import { React, useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import MyPageMenu from "../components/myPage/MyPageMenu";
import MemberInfo from "../components/myPage/MemberInfo";
import EditMemberInfo from "../components/myPage/EditMemberInfo";
import EditPw from "../components/myPage/EditPw";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Routes, Route } from "react-router-dom";
import { getInfoDB } from "../redux/modules/users";

const MyPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modalCloseRef = useRef();

  useEffect(() => {
    if (!isLogin) navigate("/login");
  }, []);

  const isLogin = sessionStorage.getItem("jwtToken");
  useEffect(() => {
    dispatch(getInfoDB());
  }, []);

  const userInfo = useSelector((state) => state.users.user);
  //console.log(isLogin)
  // function logOut()
  // {
  //     sessionStorage.clear()
  //     navigate("/");
  // }
  return (
    <Wrap>
      <Header />
      <MyPageMenu />
      <Routes>
        <Route path="/" element={<MemberInfo />} />
        <Route path="/editmemberinfo" element={<EditMemberInfo />} />
        <Route path="/editpw" element={<EditPw userInfo={userInfo} />} />
      </Routes>
    </Wrap>
  );
};
const Wrap = styled.div`
  height: 80vh;
  margin-top: 100px;
  margin-bottom: 100px;

  display: grid;
  grid-auto-rows: auto;

  grid-template-columns: 1fr minmax(18%, 18%) repeat(2, minmax(24%, 24%)) 1fr;

  justify-content: center;
  flex-flow: wrap;

  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  row-gap: 16px;
  column-gap: 60px;

  @media only screen and (max-width: 1220px) {
    grid-template-columns: 1fr repeat(3, 27%) 1fr;
  }
  @media only screen and (max-width: 760px) {
    margin-top: 90px;
    grid-template-columns: 1fr 95% 1fr;
    grid-template-rows: 0px repeat(2, auto) 0px;
  }
`;

export default MyPage;
