import Post from './Post';
import Loading from "pages/components/Loading";
import { useGetIGPostsQuery } from 'services/homeServices';

const Posts: React.FC = () => {
  const { data, isLoading } = useGetIGPostsQuery("all")

  return (
    <>
      {isLoading
        ?
        <div className="flex justify-center w-full">
          <Loading />
        </div>
        :
        (data?.map((item) => {
          const { id, location, account, avatar, photo, likes, description, hashTags, createTime } = item
          return (
            <Post
              key={id}
              account={account}
              location={location}
              avatar={avatar}
              photo={photo}
              likes={likes}
              description={description}
              hashTags={hashTags}
              createTime={createTime}
            />
          )
        }))
      }
    </>
  );
};

export default Posts;