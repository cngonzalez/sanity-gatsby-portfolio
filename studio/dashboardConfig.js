export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '609bed18e5ac7c4794e8ebaa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-3vr4wmy2',
                  apiId: '9c27f86a-07f6-4662-8be0-a30345af73f2'
                },
                {
                  buildHookId: '609bed18817c1a331a3c2532',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9jb29h8q',
                  apiId: '27161223-1248-45ac-891e-5f8920b15ea6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cngonzalez/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9jb29h8q.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
