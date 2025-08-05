import { createApp } from 'vue'
import dkfdsvue3 from 'dkfds-vue3'
import dkfdsvue3Extra from 'dkfds-vue3/extra'
import App from './App.vue'
import router from './router'
import store from './store'

import FdsXtndNavItemRoute from './components/fds-xtnd-nav-item-route.vue'
import InfoTable from './components/info-table.vue'
import TopNavigation from './components/TopNavigation.vue'
import KomponentMenu from './components/KomponentMenu.vue'
import LinkDkfds from './components/link-dkfds.vue'
import LinkDv3 from './components/link-dv3.vue'
import CustomTooltip from './components/custom-tooltip.vue'

const app = createApp(App)

app
  .use(store)
  .use(router)

  .use(dkfdsvue3 as any)
  .use(dkfdsvue3Extra as any)
  .component('fds-xtnd-nav-item-route', FdsXtndNavItemRoute)
  .component('info-table', InfoTable)
  .component('top-navigation', TopNavigation)
  .component('komponent-menu', KomponentMenu)
  .component('link-dkfds', LinkDkfds)
  .component('link-dv3', LinkDv3)
  .component('custom-tooltip', CustomTooltip)
  .mount('#app')
