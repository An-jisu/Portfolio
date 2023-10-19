import styled from "styled-components";
import { useState } from "react";
// 이미지
import profile from "../src/assets/profile.jpg";
import myemoji from "../src/assets/myemoji.png";
// 아이콘
import { BsPersonHeart } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { SiVelog } from "react-icons/si";
import { AiTwotoneMail } from "react-icons/ai";
//컴포넌트
import Category from "./components/Category";
import ListItem from "./components/ListItem";

//스타일 적용
const TotalFrame = styled.div``;
// 헤더
const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 100px;
`;
const HeaderLeft = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const HeaderRight = styled.div`
  display: flex;
  gap: 50px;
  font-size: 20px;
  font-weight: 500;
`;

const HeaderMenu = styled.a``;

// 본문
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// 섹션1- 소개
const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 100px;
  border-bottom: 2px dashed #ceb8b8;
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 190px 0 40px 0;
`;

const IntroductionContent = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

const GoalContainer = styled.div`
  white-space: pre-line;
  font-size: 15px;
  text-align: center;
`;

const GoalContent = styled.div`
  font-size: 20px;
  line-height: 1.7;
`;

const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 67%;
  height: 510px;
  padding: 40px 60px;
  border-radius: 3px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 4px 0 8px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.div`
  text-align: center;
  font-size: 45px;
  font-weight: 700;
`;

const CardContentBox = styled.div`
  display: grid;
  grid-template: repeat(1, 1fr) / repeat(2, 1fr);
`;

const ProfileImg = styled.img`
  width: 250px;
  height: 330px;
  margin-left: 30px;
  border-radius: 50%;
`;

const InfoContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-top: 7px;
`;

const InfoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: ${(props) => (props.link ? "30px" : "0")};
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${(props) => (props.space ? "5px" : 0)};
  font-size: 24px;
`;
const IconExpl = styled.div`
  font-size: 19px;
`;

// 섹션2- 기술 스택
const Skills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 100px 0;
  border-bottom: 2px dashed #ceb8b8;
`;
const SkillsTitle = styled.div`
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const SkillsContent = styled.div`
  margin: 0 auto;
`;

const CategoryToggle = styled.div`
  display: flex;
  gap: 0;
  width: 100%;
  margin-left: 100px;
  margin-bottom: 40px;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 100%;
  height: 80%;
`;

// 섹션3- 프로젝트
const Projects = styled.div`
  width: 90%;
  padding: 100px 0;
  border-bottom: 2px dashed #ceb8b8;
`;

// 섹션4- 연락처
const Contact = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  width: 90%;
  padding: 100px 0;
`;

const ContactBox1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding: 50px 30px 30px 30px;
  border-radius: 3px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 4px 0 8px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.1);
`;

const ContactTitle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 30px;
  font-size: 30px;
`;
const ContactContent = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;
const ContactImg = styled.img`
  width: 80%;
`;

const ContactBox2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding-top: 10px;
`;
const ContactInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1), 4px 0 5px rgba(0, 0, 0, 0.1),
    0 4px 5px rgba(0, 0, 0, 0.1), -4px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  font-size: 16px;
  font-weight: 700;
`;
const ContactTextArea = styled.textarea`
  width: 100%;
  height: 65%;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1), 4px 0 5px rgba(0, 0, 0, 0.1),
    0 4px 5px rgba(0, 0, 0, 0.1), -4px 0 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  padding: 20px;
  font-size: 16px;
  resize: none;
`;
const SendButton = styled.button`
  width: 100%;
  height: 30px;
  padding: 5px;
  border: none;
  border-radius: 2px;
  background: #3154c1;
  font-weight: 700;
  color: white;
`;

// 풋터
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  height: 150px;
  background: gray;
`;
const CopyrightContent = styled.div``;
const LinkContent = styled.div`
  display: flex;
  gap: 20px;
`;
const IconFooter = styled.a`
  font-size: 36px;
  color: black;
`;

function Main() {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");
  const [categoryList, setCategoryList] = useState([
    "Frontend",
    "Backend",
    "Language",
    "Etc",
  ]);
  const [frontend, setFrontend] = useState([
    ["HTML5", 90],
    ["CSS3", 85],
    ["JavaScript", 80],
    ["React", 80],
    ["Babel", 50],
    ["Tailwind CSS", 60],
    ["Styled-component", 70],
    ["React-icons", 70],
    ["TypeScript", 50],
    ["Next.js", 50],
  ]);
  const [backend, setBackend] = useState([
    ["Docker", 60],
    ["Flask", 60],
    ["Firebase", 65],
  ]);
  const [lang, setLang] = useState([
    ["HTML5", 90],
    ["CSS3", 85],
    ["JavaScript", 80],
    ["Python3", 83],
    ["C", 75],
    ["C++ ", 60],
    ["R", 40],
  ]);
  const [etc, setEtc] = useState([
    ["Figma", 70],
    ["Github", 75],
    ["Git", 75],
    ["Notion", 70],
    ["AWS", 40],
    ["Netlify", 50],
    ["Prettier", 30],
  ]);
  const handleCategory = (c) => {
    setSelectedCategory(c);
  };
  return (
    <TotalFrame>
      {/*header*/}
      <Header>
        <HeaderContainer>
          <HeaderLeft>Ahn jisoo</HeaderLeft>
          <HeaderRight>
            <HeaderMenu href={"#"}>About</HeaderMenu>
            <HeaderMenu href={"#"}>Skills</HeaderMenu>
            <HeaderMenu href={"#"}>Projects</HeaderMenu>
            <HeaderMenu href={"#"}>Contacts</HeaderMenu>
          </HeaderRight>
        </HeaderContainer>
      </Header>

      {/* 메인 */}
      <MainContent>
        {/*섹션1-소개*/}
        <Introduction>
          {/*인삿말, 목표 소개*/}
          <AboutMe>
            <IntroductionContainer>
              <IntroductionContent>안녕하세요 : )</IntroductionContent>
              <IntroductionContent>
                주니어 Frontend 개발자 안지수입니다!
              </IntroductionContent>
            </IntroductionContainer>
            <GoalContainer>
              <GoalContent>
                저는 수학 문제 푸는 것을 좋아해서 수학과 전공을 선택하였습니다.{" "}
                <br />
                복수전공을 시작하면서 수학과 비슷한 매력을 가진 코딩에 흥미가
                생겼고, <br />
                마크업 언어에 대한 호기심에 혼자서 관련 영상과 서적을 찾아
                이것저것 시도해보면서 <br />
                자연스럽게 프론트엔드 개발자를 꿈꾸게 되었습니다. <br />
                적재적소에 알맞은 기술을 적용하여 최고의 UX를 제공할 수 있는{" "}
                <br />
                프론트엔드 개발자가 되고 싶습니다.
              </GoalContent>
            </GoalContainer>
          </AboutMe>
          {/*내 정보*/}
          <InfoCardContainer>
            <CardHeader>ABOUT</CardHeader>
            <CardContentBox>
              <ProfileImg src={profile} />
              <InfoContents>
                <InfoContent>
                  <Icon>
                    <BsPersonHeart />
                  </Icon>
                  <IconExpl>안지수</IconExpl>
                </InfoContent>
                <InfoContent>
                  <Icon>
                    <FaBirthdayCake />
                  </Icon>
                  <IconExpl>2001.01.20</IconExpl>
                </InfoContent>
                <InfoContent>
                  <Icon>
                    <BsFillHouseFill />
                  </Icon>
                  <IconExpl>서울시</IconExpl>
                </InfoContent>
                <InfoContent>
                  <Icon space>
                    <MdEmail />
                  </Icon>
                  <IconExpl>anjisu2001@naver.com</IconExpl>
                </InfoContent>
                <InfoContent>
                  <Icon>
                    <IoSchoolSharp />
                  </Icon>
                  <IconExpl>
                    상명대학교 서울캠퍼스 <br />
                    (휴먼지능정보공학 전공)
                  </IconExpl>
                </InfoContent>
                <InfoContent link>
                  <Icon space>
                    <BsGithub />
                  </Icon>
                  <IconExpl>Git</IconExpl>
                </InfoContent>
                <InfoContent>
                  <Icon space>
                    <SiVelog />
                  </Icon>
                  <IconExpl>Blog</IconExpl>
                </InfoContent>
              </InfoContents>
            </CardContentBox>
          </InfoCardContainer>
        </Introduction>

        {/*섹션2-skill*/}
        <Skills>
          <SkillsTitle>Main Skills</SkillsTitle>
          <SkillsContent>
            {/* 카테고리 선택 */}
            <CategoryToggle>
              {categoryList.map((data) => (
                <Category
                  name={data}
                  onClick={() => handleCategory(data)}
                  isSelected={selectedCategory === data}
                />
              ))}
            </CategoryToggle>

            <SkillsList>
              {selectedCategory === "Frontend"
                ? frontend.map((data) => (
                    <ListItem value={data[0]} degree={data[1]} />
                  ))
                : selectedCategory === "Backend"
                ? backend.map((data) => (
                    <ListItem value={data[0]} degree={data[1]} />
                  ))
                : selectedCategory === "Language"
                ? lang.map((data) => (
                    <ListItem value={data[0]} degree={data[1]} />
                  ))
                : etc.map((data) => (
                    <ListItem value={data[0]} degree={data[1]} />
                  ))}
            </SkillsList>
          </SkillsContent>
        </Skills>

        {/*섹션3-프로젝트*/}
        <Projects></Projects>

        {/*섹션4-연락처*/}
        <Contact>
          <ContactBox1>
            <ContactTitle>
              CONTACT
              <AiTwotoneMail />
            </ContactTitle>
            <ContactContent>Thank you :)</ContactContent>
            <ContactImg src={myemoji}></ContactImg>
          </ContactBox1>
          <ContactBox2>
            <ContactInput placeholder={"Name"}></ContactInput>
            <ContactInput placeholder={"Title"}></ContactInput>
            <ContactTextArea placeholder={"Message"}></ContactTextArea>
            <SendButton>SEND</SendButton>
          </ContactBox2>
        </Contact>
      </MainContent>

      {/*footer*/}
      <Footer>
        <CopyrightContent>
          © 2023. Jisoo Ah. All rights reserved.
        </CopyrightContent>
        <LinkContent>
          <IconFooter href="https://github.com/An-jisu">
            <BsGithub />
          </IconFooter>
          <IconFooter href="https://velog.io/@asj1966">
            <SiVelog />
          </IconFooter>
        </LinkContent>
      </Footer>
    </TotalFrame>
  );
}

export default Main;
