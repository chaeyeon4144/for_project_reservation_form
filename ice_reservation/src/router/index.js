import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import FAQ from "@/views/FAQ.vue";
import Contact from "@/views/Contact.vue";
import MyReservation from "@/views/MyReservation.vue";
import ReservationForm from "@/views/ReservationForm.vue";
import ServiceInfo from "@/views/ServiceInfo.vue";
import ReservationStatus from "@/views/ReservationStatus.vue";

const routes = [
  {
    path: "/",
    name: "Home",

    component: Home,
  },
  {
    path: "/login",
    name: "Login",

    component: Login,
  },
  {
    path: "/faq",
    name: "FAQ",

    component: FAQ,
  },
  {
    path: "/contact",
    name: "Contact",

    component: Contact,
  },
  {
    path: "/myReservation",
    name: "MyReservation",

    component: MyReservation,
  },
  {
    path: "/reservationForm",
    name: "ReservationForm",

    component: ReservationForm,
  },
  {
    path: "/ServiceInfo",
    name: "ServiceInfo",

    component: ServiceInfo,
  },
  {
    path: "/reservation-status",
    name: "ReservationStatus",

    component: ReservationStatus,
  },
];

const router = createRouter({
  history: createWebHistory(), // 히스토리 모드
  routes,
});

export default router;
