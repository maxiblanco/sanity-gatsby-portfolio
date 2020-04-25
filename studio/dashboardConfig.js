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
                  buildHookId: '5ea454673ea009cfde4ef34f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-skcm6d3g',
                  apiId: '9609f22d-665f-4720-a1d2-dcf9e8f2976a'
                },
                {
                  buildHookId: '5ea45467d0093b64062f0baf',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-h72hc739',
                  apiId: 'aabdcc83-a555-4d3a-820f-34ca291c202a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maxiblanco/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-h72hc739.netlify.app',
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
