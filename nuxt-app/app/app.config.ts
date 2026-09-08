export default defineAppConfig({
  tailwind: {
    prefix: 'tw'
  },  
  gardners: {
    theme: {
      components: {
        button: {
          types: {
            default: {
              classes: {
                base: 'btn',
                icon: 'btn__icon',
                text: 'btn__text',
              },
              config: {
                classModifierPattern: '-'
              }
            },
          },
        },
      },
    },
  },
})