/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  {
    path: '/dashboard',
    name: 'dashboard.index',
    component: () => import('@/pages/dashboard/dashboard'),

    meta: {
      auth: false,
    },
  },

  {
    path: '/devices',
    name: 'devices.index',
    component: () => import('@/pages/devices/devices'),

    meta: {
      auth: false,
    },
  },

  {
    path: '/assets',
    name: 'assets.index',
    component: () => import('@/pages/assets/assets'),

    meta: {
      auth: false,
    },
  },

  {
    path: '/videos',
    name: 'videos.index',
    component: () => import('@/pages/videos/videos'),

    meta: {
      auth: false,
    },
  },

  {
    path: '/users',
    name: 'users.index',
    component: () => import('@/pages/users/users'),

    meta: {
      auth: false,
    },
  },

  {
    path: '/',
    redirect: '/dashboard',
  },

  {
    path: '/*',
    redirect: '/dashboard',
  },
];
