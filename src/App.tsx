import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { UserAuthProvider } from "./assets/context/userAuthContext";

const App = () => {
  return (
    <UserAuthProvider>
      <RouterProvider router={router} />
    </UserAuthProvider>
  );
};

export default App;
