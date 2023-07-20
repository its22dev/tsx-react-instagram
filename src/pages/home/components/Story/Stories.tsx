import Story from "./Story"
import Loading from "pages/components/Loading";
import { useGetIGStoiesQuery } from "services/homeServices";

const Stories: React.FC = () => {
  const { data, isLoading } = useGetIGStoiesQuery("all")
  return (
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto shadow-md overflow-y-hidden no-scrollbar lg:my-8">
      {isLoading
        ? <div className="flex justify-center w-full">
          <Loading />
        </div>
        :
        (data?.map((item) => {
          const { id, name, avatar } = item
          return <Story key={id} name={name} avatar={avatar} />
        }))
      }
    </div>
  );
};

export default Stories;