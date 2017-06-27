Vue.component('task-list', {
    template: '<p><task v-for="task in tasks"> {{ task.description }} </task></p>',

    data() {
        return {
            tasks: [{
                    description: 'Go to the store',
                    completed: true
                },
                {
                    description: 'Finish Screencast',
                    completed: false
                },
                {
                    description: 'finir arctrek',
                    completed: false
                },
                {
                    description: 'Make dinner',
                    completed: true
                },
                {
                    description: 'clean flat',
                    completed: false
                }
            ]
        };
    }
});
Vue.component('task', {
    template: '<li><slot></slot></li>'
});

Vue.component('message', {

    props: ['title', 'body'],

    data(){
      return{
        show : true
      }
    },

    template: `<div class="container">
                <article class="message" v-show="show">
                  <div class="message-header">
                    {{title}}
                    <button class="delete" @click="show = false"></button>
                  </div>
                  <div class="message-body">
                    {{body}}
                  </div>
                </article>
              </div>`

});

Vue.component('modal', {


  template: `<div class="modal is-active">
              <div class="modal-background"></div>
                <div class="modal-content">
                  <div class="box">
                    <p>
                      Any other Bulma elements you want
                    </p>
                  </div>
                </div>
                <button class="modal-close" @click="$emit('close')"></button>
            </div>`
});

Vue.component('tabs', {
  template: `<div>
              <div class="tabs">
                  <ul>
                    <li class="is-active"><a>Pictures</a></li>
                    <li><a>Music</a></li>
                    <li><a>Videos</a></li>
                    <li><a>Documents</a></li>
                  </ul>
              </div>

              <div class="tabs_details">
                <slot></slot>
              </div>
            </div>`,

  mounted(){
    console.log(this.$children);
  }
});

Vue.component('tab', {
  template: `
      <div><slot></slot></div>
  `,

  name(){
    required: true
  }
});

new Vue({
    el: '#root',

    data(){
      return{
        show: true
      }
    }
});
