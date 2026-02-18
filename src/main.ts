import { homeView } from './pages/home/homeView';
import { wheelView } from './pages/wheel/wheelView';
import { errorView } from './pages/error/errorView';
import { router } from './utils/router';
import { createLayout } from './pages/layout';

const main = createLayout(['main-home-container']);

document.addEventListener('DOMContentLoaded', () => {
  router.addRoute('home', () => homeView(main));
  router.addRoute('wheel', () => wheelView(main));
  router.setErrorComponent(() => errorView(main));

  if (!location.hash) {
    router.navigate('home');
  } else {
    router.loadRoute(location.hash);
  }
});
