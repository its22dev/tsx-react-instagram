import Container from "pages/components/Containers";
import Header from "pages/components/Header";
import Stories from "./components/Story/Stories";
import Profile from "./components/Profile/Profile";
import Posts from "./components/Post/Posts";


const Home: React.FC = () => {
  return <>
    <Header />
    <Container>
      <div className="flex lg:justify-center">
        <div className="w-full lg:w-[600px]">
          <Stories />
          <Posts />
        </div>
        <div className="hidden lg:block lg:w-[424px]">
          <Profile />
        </div>
      </div>
    </Container>
  </>
};

export default Home;
