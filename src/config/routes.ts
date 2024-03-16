import Home from '../pages/Home.tsx'
import Dashboard from '../pages/Dashboard.tsx'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/Dashboard",
      component: Dashboard,
      name: "Dashboard",
    },
];

export default routes