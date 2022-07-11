import PageNotFound from "../pages/PageNotFound";
import { lazy } from "react";

const routesList = [
  {
    path: "*",
    component: PageNotFound,
  },
  {
    path: "/not-found",
    component: PageNotFound,
  },
  {
    path: "/",
    component: lazy(() => import("../pages/Home")),
  },
  /* {
    path: "/contact-us",
    component: lazy(() => import("../pages/Contact")),
    children: [
      {
        isIndex: true,
        path: "/",
        component: lazy(() => import("../pages/Contact/NestedChildOne")),
      },
      {
        path: "test2",
        component: lazy(() => import("../pages/Contact/NestedChildTwo")),
      },
    ],
  }, */
];

export default routesList;
