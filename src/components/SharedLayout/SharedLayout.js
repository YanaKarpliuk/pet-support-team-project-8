import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";

const SharedLayout = () => {
return (
 <div>
  <Header />
  <Suspense fallback={<div>Loading...</div>}>
   <Outlet />
  </Suspense>
  {/* <Toaster position="top-right" reverseOrder={false} /> */}
 </div>
);
}

export default SharedLayout;