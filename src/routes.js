import Dashboard from "./Dashboard/Dashboard";
import ProxyGenerator from "./GenerateProxy/GenerateProxy";
import RegistrationForm from "./User/CreateUser";

export const publicRoutes = [
    {
        name:'register',
        path:'/register',
        component:RegistrationForm,
    },
    {
        name:'redirection-route',
        path:'*',
        component:RegistrationForm,
        redirectRoute:true,
        navigation:'/register'
    },
];

export const privateRoutes = [
    {
        name:'dashboard',
        path:'/dashboard',
        component:Dashboard
    },
    {
        name:'proxy',
        path:'/proxy',
        component:ProxyGenerator
    },
    {
        name:'Home-page',
        path:'*',
        component:Dashboard,
        redirectRoute:true,
        navigation:'/dashboard'
    },
]