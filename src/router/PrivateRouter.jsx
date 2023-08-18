import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  //!const user = true; dummy olursa bu şekilde
  //? destruct etmeden açıkça yazarak consume etme
  const user = useSelector((state) => state.auth.user);
  //? destruct ederek consume etme
  //const {user} = useSelector((state) => state.auth)

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
