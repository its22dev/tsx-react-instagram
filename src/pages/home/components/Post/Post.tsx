import User from "pages/components/User";
import Comment from "./Comment";

type PostProps = {
  account: string;
  location: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
}

const Post: React.FC<PostProps> = ({ account, location, avatar, photo, likes, description, hashTags, createTime }) => {
  return (
    <div className="shadow-md pb-4 lg:mb-8">
      <User
        account={account}
        location={location}
      />
      <img src={photo} />
      <Comment
        likes={likes}
        description={description}
        hashTags={hashTags}
        createTime={createTime}
        account={account}
      />
    </div>
  );
};

export default Post;