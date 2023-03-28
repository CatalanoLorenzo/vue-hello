const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        img:{
            class: 'image',
            src: './asset/img/img.jpeg',
            alt: 'cat'
        },
      }
    }
  }).mount('#app')