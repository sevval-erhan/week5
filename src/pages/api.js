import axios from 'axios';

const baseURL = "https://thronesapi.com/api/v2";

const axiosInstance = axios.create({
  baseURL,
});

export const fetchCharacters = async () => {
  const response = await axiosInstance.get(`/Characters`);
  console.log(response)
  return response;
};

export const fetchCharacter = async (id) => {
  const response = await axiosInstance.get(`/Characters/${id}`);
  console.log((response))
  return (response);
};

export const fetchCharacterWithSearch = async (searchText, searchBy) => {
  const response = await axiosInstance.get(
    `/character/?${searchBy}=${searchText}`
  );
  if (response.data && response.data.results) {
    return response.data.results;
  }
};