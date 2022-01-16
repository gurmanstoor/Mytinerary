
import styled from "styled-components";
import bg from "../assets/Background.png";
import Jans from "../assets/Janny.png"
import GT from "../assets/Gurman.png"
import JS from "../assets/Jordan.png"
import NavBar from "./NavBar.js"

function AboutUs() {


  return (
    <Container bg={bg}>
      <NavBar />
      <Wrapper>
        <Text>
          <Header>
            Our Team
          </Header>
          <BodyText>
            We are a group of electrical engineering students at the University of British Columbia. We designed this project for nwhacks 2022.
          </BodyText>
        </Text>
        <Bios>
          <Picture>
            <img src ={Jans}/>
            Janahan Dhushenthan
          </Picture>
          <Picture>
            <img src ={GT}/>
            Gurman Toor
          </Picture>
          <Picture> 
            <img src ={JS}/>
            Jordan Schneider
          </Picture>
        </Bios>
      </Wrapper>

    </Container>

    
    // {/* <Router>
    //     <Routes>
    //         <Route path="/AboutUS" component={AboutUs}/>
    //     </Routes>
    // </Router>  */}

  );
  
};


const Img = styled.img`
  width: 100%;
`;

const Text = styled.div`
  max-width = 100%;
  align-items: center;
  justify-content: center;
`;

const Bios = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Picture = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  padding: 0rem 0rem 0rem 0rem;
  flex-wrap: wrap;

  img {
    max-width: 75%;
    height: auto;  
  }

`;

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
  margin: auto;
  width: 100%;

  background-image: url(${({ bg }) => bg});
  background-size: fill;
  background-position: center;
  overflow-x: hidden;
  background-color: #000;
`;

const Wrapper = styled.div`
    padding: 10rem 0rem 10rem 2rem;
    color: #FFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Header = styled.div`
    padding: 1rem 0rem;
    font-size: 3rem;
`;

const BodyText = styled.div`
    padding: 1rem 0rem 2rem 0rem;
    font-size: 1.5rem;
`;

const Button = styled.button`
  font-size: 1.5rem;
  background: #FF3636;
  border: none;
  padding: 0.8rem 1.1rem;
  color: #fff;
  border-radius: 0.75rem;
  box-shadow: 0px 13px 24px -7px ##FF3636;
  transition: all 0.2s ease-in-out;
  margin-left: 0rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:
  @media (max-width: 670px) {
    /* width: 100%; */
    padding: 0.3;
  }
`;

export default AboutUs;