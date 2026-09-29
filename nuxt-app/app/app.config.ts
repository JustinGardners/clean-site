import type { CardConfig } from '#layers/base/app/types'

export default defineAppConfig({
  tailwind: {
    prefix: 'tw'
  },  
  gardners: {
    theme: {
      components: {
        hero: {
          types: {
            default: {
              config: {
                title: {
                  size: 'display-sm'
                },
                fluid: true,
                mergeConfig: true,
                surface: 'dark',
                directionLayout: {
                  col: {
                    alignItems: 'center'
                  }
                },
                backdrop: true
              } satisfies CardConfig
            }
          }
        },
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