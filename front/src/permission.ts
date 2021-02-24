import router from './router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Message } from 'element-ui';
import { Route } from 'vue-router';
import { UserModule } from '@/store/modules/UserModule';
import { PermissionModule } from '@/store/modules/PermissionModule';

NProgress.configure({ showSpinner: false });

const whiteList = ['/login', '/forgot', '/register'];

router.beforeEach(async(to: Route, _: Route, next: any) => {
  // Start progress bar
  NProgress.start();

  // Determine whether the user has logged in
  if (UserModule.token) {
    if (to.path === '/login') {
      // If is logged in, redirect to the home page
      next({ path: '/' });
      NProgress.done();
    } else {
      // Check whether the user has obtained his permission roles
      if (UserModule.roles.length === 0) {
        try {
          await UserModule.GetUserInfo();
          // Note: roles must be a object array! such as: ['admin'] or ['developer', 'editor']
          const roles = UserModule.roles;
          // Generate accessible routes map based on role
          //await PermissionModule.GenerateRoutes(roles);
          // Dynamically add accessible routes
          // console.log(PermissionModule.dynamicRoutes);
          // console.log(router);
          //router.addRoutes(PermissionModule.dynamicRoutes);
          // console.log(router);
          // Hack: ensure addRoutes is complete
          // Set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true });
        } catch (err) {
          // Remove token and redirect to login page
          await UserModule.ResetToken();
          Message.error(err || 'Has Error');
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      } else {
        next();
      }
    }
  } else {
    // Has no token
    if (whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next();
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach((to: Route) => {
  // Finish progress bar
  NProgress.done();

  // set page title
  document.title = to.meta.title;
});
