import React from "react";
import Get from "../../Utils/api/Get";
import Post from "../../Utils/api/Post";
import { useQuery } from "@tanstack/react-query";

type DataItem = {
  id: string;
  salam: number;
};

const Home: React.FC = () => {
  const getData = async (): Promise<DataItem[]> => {
    const response = await Get("data");
    return response;
  };

  const postData = async () => {
    const newTwite = {
      name: "abolfazl",
      email: "abolfazl@gmail.com",
      id: Date.now(),
    };
    const response = await Post("data", newTwite);
    return response;
  };

  const { data } = useQuery({
    queryKey: ["get-data"],
    queryFn: getData,
  });

  return (
    <div className="flex h-dvh w-dvw p-6 ">
      <div className="basis-1/4">
        <h1 className="text-lg font-iranyekan">توییتر فارسی</h1>
      </div>
      <div className="basis-1/2">
        <h1>Main</h1>
      </div>
      <div className="flex flex-row-reverse basis-1/4">
        <h1 className="">User Detail</h1>
      </div>
    </div>
  );
};

export default Home;
