import Container from "pages/components/Containers";
import Header from "pages/components/Header";
import User from "pages/components/User";
import { useAppSelector } from "hooks";

const Following: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer)
  const friends = friendReducer.friends

  return <>
    <Header />
    <Container>
      <p className="my-8 font-bold text-2xl px-4 box-border">Following</p>
      <div className="shadow-md mt-8 mx-2 box-border">
        {friends.map((item) => {
          const { id, account, avatar, isFollowing, location } = item;
          return (
            <div className="-mt-3" key={id}>
              <User
                key={id}
                id={id}
                account={account}
                avatar={avatar}
                location={location}
                isFollowing={isFollowing}
                showFollow
              />
            </div>
          );
        })}
      </div>
    </Container>
  </>
};

export default Following;
