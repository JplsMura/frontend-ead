import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/home/Home.vue";
import MySupports from "../views/supports/MySupports.vue";
import ModulesAndLessons from "../views/modules/ModulesAndLessons.vue";
import Auth from "../views/auth/Auth.vue";
import ForgetPassword from "../views/auth/ForgetPassword.vue";
import ResetPassword from "../views/auth/ResetPassword.vue";


const routes = [
  /* Component relacionados  a módulos, aulas e suportes na tela de aulas */
  {
    path: '/campus',
    component: () => import('@/layouts/DefaultTemplate.vue'),
    children: [
      {
        path: 'modulos',
        name: 'campus.modulos',
        component: ModulesAndLessons,
      }, {
        path: 'minhas-duvidas',
        name: 'campus.my.supports',
        component: MySupports,
      }, {
        path: '',
        name: 'campus.home',
        component: Home,
      },
    ],
  },

  /* Component relacionados a tela de login, recuperar senha e esqueceu a senha */
  {
    path: '/',
    component: () => import('@/layouts/components/auth/TemplateAuth.vue'),
    children: [
      {
        path: '/',
        name: 'auth',
        component: Auth,
      },
      {
        path: '/recuperar-senha',
        name: 'forget.password',
        component: ForgetPassword,
      },
      {
        path: '/reset-senha',
        name: 'reset.password',
        component: ResetPassword,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
