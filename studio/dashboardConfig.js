export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe4c08f11f328a834c9c826',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-e8fxp8pv',
                  apiId: '20d64c93-719a-44fe-ada1-8960098b2e65'
                },
                {
                  buildHookId: '5fe4c08f500f90a036c36857',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-i7bqdmsa',
                  apiId: '5bbbed59-77b1-409d-ab88-819919e23f51'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomtomdu73/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-i7bqdmsa.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
