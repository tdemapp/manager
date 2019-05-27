import Snackbar from '../components/App/Snackbar';

export default {
  install(Vue, opts){   
    Vue.prototype.$snackbar = (text, icon, color) => {
      const cmp = new Vue({
        render: (h) => h(Snackbar, {
          props: {
            icon,
            text,
            color,
          }
        })
      });
      document.body.appendChild(cmp.$mount().$el);
    }
  }
}
