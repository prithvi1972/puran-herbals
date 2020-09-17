const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/puran-herbals-web',
    {
        branch: 'deploy',
        repo: 'https://github.com/prithvi1972/puran-herbals-web.git',
        user: {
            name: 'prithvi1972',
            email: 'prithvi.anand1972.pa@gmail.com'
        }
    },
    (err) => {
        if (err) {
            console.error(err.message)
        }
        else {
            console.log('Deploy Complete!')
        }
    }
)