import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Charter",
  description: "Unofficial documentations for THE mod about contracts, covenants, and regrets.",
  base: '/charter-docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction/charter' },
      { text: 'Content', link: '/content' },
      { text: 'Information', link: '/info' },
    ],

    sidebar: {
      'introduction': {
        text: 'Introduction',
        items: [
          {text: 'About Charter', link: '/introduction/charter'},
          {text: 'About this wiki', link: '/introduction/wiki'},
        ]
      },
      'content': {
        text: 'Content',
        items: [
          {text: 'Getting started', link: '/content'},
          {
            text: 'Items', items: [
              item('Arm', '/content/items/arm'),
              item('Contract', '/content/items/contract'),
              item('Totem', '/content/items/totem'),
            ]
          },
          {
            text: 'Blocks', items: [
              // item('Stone', '/content/blocks/stone'),
            ]
          },
          {
            text: 'Mechanics', items: [
              // item('Arm', '/content/items/arm'),
            ]
          },
        ]
      },
      'info': {
        text: 'Information',
        items: [
          {text: 'Information & Lore', link: '/info'},
        ]
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

export function item(name: string, link: string) {
  return {text: name, link: link}
}
