import timeago from 'timeago.js';
import axios from 'axios';
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

import InstallerIssues from './components/InstallerIssues';

Vue.config.productionTip = false;
Vue.use(VueMaterial);

function formatTimeAgo(date) {
  if (!date) {
    return '';
  }
  return timeago().format(new Date(date));
}
Vue.filter('formatTimeAgo', formatTimeAgo);

axios.defaults.baseURL = 'http://localhost:8000';

/* eslint-disable no-new */
new Vue({
  el: '#issues',
  components: { InstallerIssues },
});
