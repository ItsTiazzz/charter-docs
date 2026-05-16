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

    logo: "/logo.png",

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/ItsTiazzz/charter-docs/edit/master/docs/:path'
    },

    externalLinkIcon: true,

    sidebar: {
      'introduction/': [{
        text: 'Introduction',
        items: [
          {text: 'About Charter', link: '/introduction/charter'},
          {text: 'About this wiki', link: '/introduction/wiki'},
        ]
      }],
      'content/': [{
        text: 'Content',
        items: [
          {text: 'Getting started', link: '/content'},
          {
            text: 'Items', items: [
              item('Arm'),
              item('Contract'),
              item('Gauntlets'),
              item('Hoarder Maw'),
              item('Merchant Effigy'),
            ],
            collapsed: true
          },
          {
            text: 'Blocks', items: [
              block('Charter Stone'),
              block('Pawn'),
            ],
            collapsed: true
          },
          {
            text: 'Entities', items: [
              entity('Bloodfly'),
              entity('Chains'),
            ],
            collapsed: true
          },
          {
            text: 'Mechanics', items: [
              mech('Charters'),
              mech('Debt'),
            ],
            collapsed: true
          },
          {
            text: 'Leaks', items: [
              leak('Charter Borders'),
              leak('Commands'),
              leak('Entities'),
              leak('Other'),
            ],
            collapsed: true
          },
        ]
      }],
      'info': [{
        text: 'Information',
        items: [
          {text: 'Information & Lore', link: '/info'},
        ]
      }],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
})

export function item(name: string) {
  return {text: name, link: '/content/items/' + name.toLowerCase().replace(' ', '-')}
}

export function block(name: string) {
  return {text: name, link: '/content/blocks/' + name.toLowerCase().replace(' ', '-')}
}

export function entity(name: string) {
  return {text: name, link: '/content/entities/' + name.toLowerCase().replace(' ', '-')}
}

export function mech(name: string) {
  return {text: name, link: '/content/mechanics/' + name.toLowerCase().replace(' ', '-')}
}

export function leak(name: string) {
  return {text: name, link: '/content/leaks/' + name.toLowerCase().replace(' ', '-')}
}

