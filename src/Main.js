import styled, { keyframes } from "styled-components";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Element } from "react-scroll";
import projects from "./projects.json";
import projectsEn from "./projectsEn.json";
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
import { AiOutlinePlus } from "react-icons/ai";
import { VscFoldUp } from "react-icons/vsc";
//컴포넌트
import Category from "./components/Category";
import ListItem from "./components/ListItem";
import ProjectCard from "./components/ProjectCard";
import DetailContent from "./components/DetailContent";
import TypingText from "./components/TypingText";

//스타일 적용
const TotalFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
// 헤더
const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  z-index: 1;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 100px;
  width: 100%;
`;
const HeaderLeft = styled.div`
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
  font-family: "ROEHOE-CHAN";
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  font-family: "IntelOneMono-Light";
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const Menu = styled.div`
  transition: 0.6s;
  &:hover {
    font-family: "IntelOneMono-Bold";
    transform: translate(0, -8%);
  }
`;

const LangContainer = styled.div`
  display: flex;
  gap: 0;
`;
const Lang = styled.button`
  width: 60px;
  height: 40px;
  background: ${(props) => (props.isSelected ? "#3154c1" : null)};
  color: ${(props) => (props.isSelected ? "white" : "#000000c8")};
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 4px 0 8px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 0 10px #3154c1, 4px 0 10px #3154c1, 0 10px 10px #3154c1,
      -4px 0 10px #3154c1;
    transform: translate(0, -8%);
  }
  cursor: pointer;
`;

const HeaderMenu = styled.a``;

// 본문
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //margin-top: 80px;
  width: 100%;
`;
// 섹션1- 소개
const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 90px;
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
  margin: 190px 0 40px 0;
`;

const Ani = keyframes`
0% {
  opacity: 0;
  transform: translateY(80%);
}
20% {
  opacity: 0;
}
50% {
  opacity: 1;
  transform: translateY(0%);
}
100% {
  opacity: 1;
  transform: translateY(0%);
}
`;

const IntroductionContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const IntroductionSentence = styled.div`
  display: flex;
  justify-content: center;
  font-family: omyu pretty;
  font-size: 50px;
  font-weight: 1000;
  overflow: hidden;
  white-space: nowrap;
  animation: 3s ${Ani} ease-out infinite;
`;
const GoalContainer = styled.div`
  white-space: pre-line;
  font-size: 15px;
  text-align: center;
`;

const GoalContent = styled.div`
  font-family: omyu pretty;
  font-size: 23px;
  font-weight: 700;
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
  transition: 0.6s;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 4px 0 8px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 0 40px rgba(206, 184, 184, 0.5),
      4px 0 40px rgba(206, 184, 184, 0.5), 0 10px 40px rgba(206, 184, 184, 0.5),
      -4px 0 40px rgba(206, 184, 184, 0.5);
    transform: translate(0, -8%);
  }
`;

const CardHeader = styled.div`
  text-align: center;
  font-family: "The Jamsil 5 Bold";
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
  font-family: "The Jamsil 2 Light";
  font-size: 19px;
`;

// 섹션2- 기술 스택
const Skills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 100px 0;
  //border-bottom: 2px dashed #ceb8b8;
`;
const SkillsTitle = styled.div`
  font-family: "The Jamsil 5 Bold";
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 60px;
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
const ProjectsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #30cfd0 0%, #330867 100%);
`;

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  //border-bottom: 2px dashed #ceb8b8;
`;

const ProjectsTitle = styled.div`
  font-family: "The Jamsil 5 Bold";
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const ProjectsContent = styled.div`
  margin: 0 auto;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template: 3fr / repeat(3, 1fr);
  gap: 70px;
  margin-bottom: 40px;
`;

const Move = styled.a`
  color: black;
`;

const IconPlus = styled.div`
  width: 100%;
  font-size: 55px;
  text-align: center;
  cursor: pointer;
`;
const Expl = styled.div`
  margin: 0 auto;
  margin-bottom: 80px;
  font-family: "The Jamsil 2 Light";
`;
const Span = styled.span`
  font-family: "The Jamsil 3 Regular";
  font-size: 20px;
  font-weight: 700;
`;

// 섹션3+- 프로젝트 디테일
const ProjectDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  //border-bottom: 2px dashed #ceb8b8;
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
  font-family: "The Jamsil 2 Light";
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
  font-family: "The Jamsil 4 Medium";
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
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
  font-family: "The Jamsil 4 Medium";
  font-size: 16px;
  font-weight: 700;
  resize: none;
  cursor: pointer;
`;
const SendButton = styled.button`
  width: 100%;
  height: 30px;
  padding: 5px;
  border: none;
  border-radius: 2px;
  background: #3154c1;
  font-family: "The Jamsil 4 Medium";
  font-weight: 700;
  color: white;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 20px #3154c1, 4px 0 20px #3154c1, 0 10px 20px #3154c1,
      -4px 0 20px #3154c1;
  }
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
  const [selectedLang, setSelectedLang] = useState("한국어");
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

  const [displayLimit, setDisplayLimit] = useState(3);
  const [clickedMore, setClickedMore] = useState(true);
  const selectedProjectLang =
    selectedLang === "한국어" ? projects[0] : projectsEn[0];
  const [selectedProject, setSelectedProject] = useState(selectedProjectLang);
  const navigate = useNavigate(null);

  const handleLang = (lang, num) => {
    setSelectedLang(lang);
    selectedLang === "English"
      ? setSelectedProject(projects.filter((data) => num === data["num"])[0])
      : setSelectedProject(projectsEn.filter((data) => num === data["num"])[0]);
  };
  const handleDetailCard = (data) => {
    //console.log(data);
    setSelectedProject(data);
  };
  const handleCategory = (c) => {
    setSelectedCategory(c);
  };

  const handleLoadMoreProjects = () => {
    setDisplayLimit(projects.length);
    setClickedMore(false);
  };

  const handleRepresentativeProjects = () => {
    setDisplayLimit(3);
    setClickedMore(true);
  };
  const [showIntro, setShowIntro] = useState(true);
  const [showGreeting, setShowGreeting] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowGreeting(true);
  };

  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <TotalFrame>
      {/*header*/}
      <Header>
        <HeaderContainer>
          <HeaderLeft onClick={scrollTo}>Ahn jisoo</HeaderLeft>
          <HeaderRight>
            <Menu>
              <Link to="About" smooth={true} duration={600}>
                &lt;About/&gt;
              </Link>
            </Menu>
            <Menu>
              <Link to="Skills" smooth={true} duration={600}>
                &lt;Skills/&gt;
              </Link>
            </Menu>
            <Menu>
              <Link to="Projects" smooth={true} duration={700}>
                &lt;Projects/&gt;
              </Link>
            </Menu>
            <Menu>
              <Link to="Contact" smooth={true} duration={900}>
                &lt;Contact/&gt;
              </Link>
            </Menu>
          </HeaderRight>
          <LangContainer>
            <Lang
              isSelected={selectedLang === "한국어"}
              onClick={() => handleLang("한국어", selectedProject["num"])}
            >
              한국어
            </Lang>
            <Lang
              isSelected={selectedLang === "English"}
              onClick={() => handleLang("English", selectedProject["num"])}
            >
              English
            </Lang>
          </LangContainer>
        </HeaderContainer>
      </Header>

      {/* 메인 */}
      <MainContent>
        {/*섹션1-소개*/}
        <Introduction>
          {/*인삿말, 목표 소개*/}
          <AboutMe>
            <IntroductionContainer>
              {selectedLang === "한국어" ? (
                <IntroductionContent>
                  {/* <IntroductionHello></IntroductionHello> */}
                  <IntroductionSentence>
                    안녕하세요 :) <br />
                    주니어 Frontend 개발자 안지수입니다!
                  </IntroductionSentence>
                </IntroductionContent>
              ) : (
                <IntroductionContent>
                  <IntroductionSentence>
                    Hello :) <br />
                    I'm a Junior Frontend developer, JiSoo Ahn!
                  </IntroductionSentence>
                </IntroductionContent>
              )}
              {/* <IntroductionContent>
                <TypingText text="주니어 Frontend 개발자 안지수입니다!" />
              </IntroductionContent> */}
            </IntroductionContainer>
            <GoalContainer>
              <Element name="About">
                {selectedLang === "한국어" ? (
                  <GoalContent>
                    입력한대로 출력이 나오는 프로그래밍의 매력에 빠졌습니다.{" "}
                    <br />
                    저는 커뮤니케이션을 잘하는, 글로벌한 프론트엔드 개발자가
                    되고 싶습니다. <br />
                    교환학생과 실리콘벨리 프로그램에 참여하며, 글로벌 인재가
                    되기 위해 도전을 해 왔고, <br />
                    다양한 사람들과 다양한 프로젝트를 수행하며 소통을 잘 하는,
                    <br />
                    협업에 능숙한 개발자가 되기 위해 노력 해왔습니다. <br />
                    글로벌한 환경에서 다양한 인재와 함께 일하고 배울 기회를
                    찾겠습니다.
                  </GoalContent>
                ) : (
                  <GoalContent>
                    I decided to be a programmer because of the charm of coding
                    <br /> that produces output just as I put input. <br />
                    I aspire to become a proficient global Frontend developer
                    with strong communication skills. <br />
                    By participating in an exchange program and Silicon Valley
                    <br />
                    programs to become a global talent. <br />
                    By engaging in diverse projects and collaborations, honing
                    my communication skills.
                    <br />I am committed to seeking opportunities to work and
                    learn <br />
                    in a global environment with diverse individuals.
                  </GoalContent>
                )}
              </Element>
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
                  {selectedLang === "한국어" ? (
                    <IconExpl>안지수</IconExpl>
                  ) : (
                    <IconExpl>Jisoo Ahn</IconExpl>
                  )}
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
                  {selectedLang === "한국어" ? (
                    <IconExpl>서울시</IconExpl>
                  ) : (
                    <IconExpl>Seoul</IconExpl>
                  )}
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
                  {selectedLang === "한국어" ? (
                    <IconExpl>
                      상명대학교 서울캠퍼스 <br />
                      (휴먼지능정보공학 전공)
                    </IconExpl>
                  ) : (
                    <IconExpl>
                      Sangmyung University
                      <br />
                      (Human-Centered Informatics Engineering)
                    </IconExpl>
                  )}
                </InfoContent>
                <Move href="https://github.com/An-jisu">
                  <InfoContent link>
                    <Icon space>
                      <BsGithub />
                    </Icon>
                    <IconExpl>Git</IconExpl>
                  </InfoContent>
                </Move>
                <Move href="https://velog.io/@asj1966">
                  <InfoContent>
                    <Icon space>
                      <SiVelog />
                    </Icon>
                    <IconExpl>Blog</IconExpl>
                  </InfoContent>
                </Move>
              </InfoContents>
            </CardContentBox>
          </InfoCardContainer>
        </Introduction>

        {/*섹션2-skill*/}
        <Skills id="Skills">
          <SkillsTitle>MAIN SKILLS</SkillsTitle>
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
        <ProjectsBox>
          <Link to="ProjectDetail" smooth={true} duration={600}>
            <Projects id="Projects">
              <ProjectsTitle>PROJECTS</ProjectsTitle>
              {selectedLang === "한국어" ? (
                <Expl>
                  <Span>클릭 </Span>하면 프로젝트를 자세히 볼 수 있어요!
                </Expl>
              ) : (
                <Expl>
                  <Span>Click </Span>to see details!
                </Expl>
              )}
              <ProjectsContent>
                <ProjectsContainer>
                  {selectedLang === "한국어"
                    ? projects.slice(0, displayLimit).map((data) => (
                        <Move href="#ProjectDetail">
                          <ProjectCard
                            src={
                              "https://jisoobucket.s3.ap-northeast-2.amazonaws.com/" +
                              data["name"] +
                              ".png"
                            }
                            name={data["name"]}
                            date={data["date"]}
                            type={data["type"]}
                            shortExpl={data["shortExpl"]}
                            stacks={data["stacks"]}
                            onClick={() => handleDetailCard(data)}
                          />
                        </Move>
                      ))
                    : projectsEn.slice(0, displayLimit).map((data) => (
                        <Move href="#ProjectDetail">
                          <ProjectCard
                            src={
                              "https://jisoobucket.s3.ap-northeast-2.amazonaws.com/" +
                              data["name"] +
                              ".png"
                            }
                            name={data["name"]}
                            date={data["date"]}
                            type={data["type"]}
                            shortExpl={data["shortExpl"]}
                            stacks={data["stacks"]}
                            onClick={() => handleDetailCard(data)}
                          />
                        </Move>
                      ))}
                </ProjectsContainer>
                <Element name="ProjectDetail">
                  {clickedMore ? (
                    <IconPlus onClick={handleLoadMoreProjects}>
                      <AiOutlinePlus />
                    </IconPlus>
                  ) : (
                    <Link to="Projects" smooth={true} duration={600}>
                      <Move>
                        <IconPlus>
                          <VscFoldUp onClick={handleRepresentativeProjects} />
                        </IconPlus>
                      </Move>
                    </Link>
                  )}
                </Element>
              </ProjectsContent>
            </Projects>
          </Link>

          {/*섹션3+-프로젝트 상세*/}

          <ProjectDetail>
            <DetailContent
              src={
                "https://jisoobucket.s3.ap-northeast-2.amazonaws.com/" +
                selectedProject["name"] +
                ".png"
              }
              name={selectedProject["name"]}
              date={selectedProject["date"]}
              type={selectedProject["type"]}
              expl={selectedProject["expl"]}
              stacks={selectedProject["stacks"]}
              reviews={selectedProject["reviews"]}
              function={selectedProject["function"]}
              deploy={selectedProject["deploy"]}
              velog={selectedProject["velog"]}
              github={selectedProject["github"]}
              figma={selectedProject["figma"]}
              lang={selectedLang}
            />
          </ProjectDetail>
        </ProjectsBox>

        {/*섹션4-연락처*/}
        <Contact id="Contact">
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
          © 2023. Jisoo Ahn. All rights reserved.
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
