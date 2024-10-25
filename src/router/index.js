import Homeview from '@/views/Homeview.vue';
import JobsViwe from '@/views/JobsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import AddjobView from '@/views/AddjobView.vue';
import JobView from '@/views/JobView.vue';
import EditeJobView from '@/views/EditJobView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: '/login',
      component: Login,
    },
    {
      path: '/',
      name: 'home',
      component: Homeview,
    },
    {
      path: '/jobs',
      name: 'job',
      component: JobsViwe,
    },
    {
      path: '/jobs/:id',
      name: 'jobs',
      component: JobView,
    },
    {
      path: '/jobs/add',
      name: 'add-job',
      component: AddjobView,
    },
    {
      path: '/jobs/edit/:id',
      name: 'edit-job',
      component: EditeJobView,
    },
    {
      path: '/:catchAll(.*)', // that's mean all the files that not found
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

export default router;
