import { Header, LandingCards, LandingTitle } from "../../components/landing";
import Container from "../../components/shared/Container";

const Landing = () => {
  return (
    <div className="bg-gray-800 h-screen overflow-hidden">
      <Container fluid>
        <Header />
        <LandingTitle />
        <LandingCards />
      </Container>
    </div>
  );
};

export default Landing;
