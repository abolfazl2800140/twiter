import React from "react";
import Get from "../../Utils/api/Get";
import Post from "../../Utils/api/Post";
import { useQuery } from "@tanstack/react-query";
import Chat from "../../Components/Chat";

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

  return <div>home</div>;
};

export default Home;
