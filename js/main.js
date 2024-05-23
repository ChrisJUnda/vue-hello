'use strict'

console.log('vue hello');

console.log(window.Vue)


const { createApp } = Vue

const optionObj = {

    data() {
        return {
          title: '',
        }
    },

    methods: {
        prova(){
            console.log('sono la funzione prova')
            this.title = 'Nuovo messaggio'  
        },
    },

    beforeCreate(){
        console.log(this.title)
        console.log('beforeCreate')
    },

    created(){
        console.log(this.title);
        console.log('created');
    },

    beforeMount(){
        console.log(this.title)
        console.log('beforeMount')
    },

    mounted(){
        console.log(this.title);
        console.log('mounted')
    },

}

  
const app = createApp(optionObj)

  app.mount('#app')