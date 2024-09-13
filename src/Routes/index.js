import AboutUs from "../components/AboutUs/AboutUs";
import AutoParts from "../components/AutoParts/AutoParts";
import ContactAto from "../components/ContactAto/ContactAto";
import HomePage from "../components/HomePage";
import ServiceAto from "../components/ServiceAto/ServiceAto";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/gioi-thieu',
        page: AboutUs,
        isShowHeader: true
    },
    {
        path: '/phu-tung-o-to',
        page: AutoParts,
        isShowHeader: true
    },
    {
        path: '/dich-vu',
        page: ServiceAto,
        isShowHeader: true
    },
    {
        path: '/lien-he',
        page: ContactAto,
        isShowHeader: true
    },
]