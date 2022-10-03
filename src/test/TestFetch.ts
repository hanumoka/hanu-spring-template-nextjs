import { useAxios } from "../api/AxiosProvider";
import { useQuery } from "react-query";

interface IFetchAllProjectsResponse {}

export default function () {
  // Get our Axios instance from our previously created Hook
  const axios = useAxios();

  // Create a query with the key `projects`
  return useQuery('projects', async () => {
    // Fetch data from our API using Axios. We'll talk about the typing below
    return await axios.get<IFetchAllProjectsResponse>('/v1/account');

    // Return the data from the Axios response
    // return data;
  });
}