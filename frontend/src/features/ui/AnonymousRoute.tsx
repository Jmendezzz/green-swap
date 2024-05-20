import { useUserContext } from "@/context/UserContext";
import { Outlet, useNavigate } from "react-router-dom";



function AnonymousRoute() {
    const { user } = useUserContext();
    const navigate = useNavigate();

    if(user){
        navigate(-1);
        return;
    }

  return (
    <Outlet />
  )
}

export default AnonymousRoute