const fetch = require('node-fetch');

const dataUrl  = 'https://api.github.com/orgs/google';

// GET request
const employees = fetch(dataUrl);

var repo, members

employees
  .then((res) => res.json())
  .then((list) => {
      repo = fetch(list['repos_url'])
      return(repo)
    })
   .then((res) => res.json())
   .then((list)=>console.log(list))
  .catch((err) => console.log(err))
  .finally(() => console.log('done'))