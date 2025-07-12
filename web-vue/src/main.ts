import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import Skeleton from 'primevue/skeleton'
import Button from 'primevue/button'
import Drawer from 'primevue/drawer'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import ScrollPanel from 'primevue/scrollpanel'
import Tooltip from 'primevue/tooltip'

import App from './App.vue'
import Index from './Index.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope, faRightLong, faBars, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faVuejs, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  SiTypescript,
  FaAngular,
  FaReact,
  SiNextdotjs,
  SiTailwindcss,
  FaNodeJs,
  FaJava,
  SiSpring,
  SiSpringboot,
  SiApachemaven,
  FaPython,
  SiOracle,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiPuppeteer,
  FaFigma,
  FaGit,
  FaGithub,
  FaGitlab,
  FaJenkins,
  SiRailway,
  SiVercel,
  SiVuedotjs,
} from 'oh-vue-icons/icons'

addIcons(
  FaHtml5,
  FaCss3,
  FaJs,
  SiTypescript,
  FaAngular,
  FaReact,
  SiNextdotjs,
  SiTailwindcss,
  FaNodeJs,
  FaJava,
  SiSpring,
  SiSpringboot,
  SiApachemaven,
  FaPython,
  SiOracle,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiPuppeteer,
  FaFigma,
  FaGit,
  FaGithub,
  FaGitlab,
  FaJenkins,
  SiRailway,
  SiVercel,
  SiVuedotjs,
)

/* add icons to the library */
library.add(faEnvelope)
library.add(faVuejs)
library.add(faRightLong)
library.add(faGithub)
library.add(faLinkedin)
library.add(faBars)
library.add(faGlobe)

// const app = createApp(App)
const app = createApp(Index)

app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.use(router)
app.directive('tooltip', Tooltip)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('v-icon', OhVueIcon)
app.component('Skeleton', Skeleton)
app.component('Button', Button)
app.component('Drawer', Drawer)
app.component('Tabs', Tabs)
app.component('TabList', TabList)
app.component('Tab', Tab)
app.component('TabPanels', TabPanels)
app.component('TabPanel', TabPanel)
app.component('ScrollPanel', ScrollPanel)
app.mount('#app')
