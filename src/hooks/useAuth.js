import { useSelector } from "react-redux";

export default function useAuth() {
  //   const stateValue = useSelector((state) => state[value]);
  const user = useSelector((state) => state.user);
  return user;
}
