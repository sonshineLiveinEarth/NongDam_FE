import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editPwDB } from "../../redux/modules/users";
import { logOutDB } from "../../redux/modules/users";
import { positionFromAngle } from "@nivo/core";
import { relativeTimeRounding } from "moment";

const MyPageMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.users.user);
  console.log(userInfo);
  return (
    <Wrap>
      <ContentWrap>
        <ProfileImg
          style={{ backgroundImage: `url(${userInfo?.profileImage})` }}
        />
        <SmallInfo>
          <UserNickname>{userInfo?.nickname}</UserNickname>
          <UserEmail>{userInfo?.email}</UserEmail>
        </SmallInfo>

        <BottomWrap>
          <span
            className="EditInfo"
            onClick={() => {
              navigate("/mypage/editmemberinfo");
            }}
          >
            회원정보 수정
          </span>

          <span
            className="ChangePw"
            onClick={() => {
              navigate("/mypage/editpw");
            }}
          >
            비밀번호 변경
          </span>

          {/* <span className="myContent">내 게시물</span> */}
          <span
            className="logOut"
            onClick={() => {
              dispatch(logOutDB());
            }}
          >
            로그아웃
          </span>
        </BottomWrap>
      </ContentWrap>
    </Wrap>
  );
};
const Wrap = styled.div`
  border: none;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0px 2px 3px rbga(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 20px 20px 16px 20px;
  grid-column: 2 /3;
  // position : relative;
  display: flex;
  justify-content: center;
`;
const ContentWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  //justify-content : center;
  align-content: center;
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 70%;
  align-self: center;
`;

const SmallInfo = styled.div`
  color: #02113b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const UserNickname = styled.span`
  font-size: 18px;
  font-weight: 700;
  height: 25px;
  align-items: center;
  text-align: center;
  font-feature-settings: "tnum" on, "lnum" on;
  margin-top: 10px;
`;
const UserEmail = styled.span`
  font-size: 13px;
  margin: 0;
  align-items: center;
  text-align: center;
  font-feature-settings: "tnum" on, "lnum" on;
`;

const BottomWrap = styled.div`
  margin-top: 50px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #02113b;
  display: flex;
  flex-direction: column;
  line-height: 35px;

  font-feature-settings: "tnum" on, "lnum" on;
  .EditInfo {
    cursor: pointer;
  }
  .ChangePw {
    cursor: pointer;
  }
  .myContent {
    cursor: pointer;
  }
  .logOut {
    margin-top: 50px;
    cursor: pointer;
  }
`;

export default MyPageMenu;
