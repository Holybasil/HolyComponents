module.exports = {
  base: "/HolyComponents/",
  title: "Holy Components",
  description: 'Some inexplicable components you may need',

  themeConfig: {
    // repoLabel: 'Contribute!',
    // git repo here... gitlab, github
    // repo: '',
    // docsDir: 'docs',
    // editLinks: true,
    // docsBranch: 'dev',
    // editLinkText: 'Help us improve this page!',
    // search: false,
    // sidebar: auto,
    nav: [
      { text: '指南', link: '/guide' },
      { text: '组件', link: '/components/holyList' },
      { text: 'GitHub', link: 'https://github.com/Holybasil' }
    ],
    sidebar: {
      '/components/': [
        {
          title: '组件',
          // collapsable: false,
          children: ['holyList','holyClickoutside'],
        }
      ]
    },
    lastUpdated: 'Last Updated',
        
  }
}