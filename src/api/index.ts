import axios from "axios";
import { useQuery } from "react-query";

const baseUrl = "https://hp-api.onrender.com/api";

export const useGetCharactors = () => {
  return useQuery("all characters ", () => axios.get(`${baseUrl}/characters`));
};

export const useGetCharacterById = ({ id }: { id?: string | null }) => {
  return useQuery(["get character by id", id], () =>
    axios.get(`${baseUrl}/character/${id}`)
  );
};
