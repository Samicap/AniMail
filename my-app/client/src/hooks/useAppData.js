import { useEffect, useState } from "react";
import axios from "axios";

function useAppData() {
  const [state, setState] = useState({
    user: "Sam",
    users: [],
  });
  const setUser = (user) => setState({ ...state, user });

  useEffect(() => {
    return Promise.all([
      axios.get("http://localhost:8080/api/users"),


    ]).then((res) => {
      console.log("Users", res);
      setState((prev) => ({
        ...prev,
        users: res[0].data,
      }));
    });
  }, []);


  return { state, setUser };
}

export default useAppData;