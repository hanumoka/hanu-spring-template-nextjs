import { useMutation } from "react-query";
import UserApi from "../api/UserApi";

type signInType = {
  userEmail: string,
  password: string,
}


export function signInAction() {
  // return useMutation(() => UserApi.signin(email, password));
  return useMutation((param:signInType) => UserApi.signin(param.userEmail, param.password));
}


// import { useQuery } from "react-query";
// const res = await UserApi.signin(email, password);

// import axios from "axios";
//
// const getPostById = async (postId: string) => {
//   const { data } = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`
//   );
//   return data;
// };
//
// export default function useAuthRQ(postId: string) {
//   return useQuery(["post", postId], () => getPostById(postId));
// }
