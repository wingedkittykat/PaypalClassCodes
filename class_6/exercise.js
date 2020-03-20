const fetch = require('node-fetch');

const dataUrl  = 'https://api.github.com/orgs/google';

// GET request
const employees = fetch(dataUrl);

var repo, members,issues

employees
  .then((res) => res.json())
  .then((list) => {
      repo = fetch(list['repos_url'])
      return(repo)
    })
   .then((res) => res.json())
   .then((list)=>{
       list.forEach(element => {
            repName = element['name'];
            console.log("Repo: "+repName)
            // console.log(element.issues_url.split('{')[0])
            issues = fetch(element.issues_url.split('{')[0])
            issues    
                .then((res) => res.json())
                .then((issue)=>{
                    issues.forEach(element =>{
                        console.log(issue['title']);
                        console.log('-----------------------------------------')
                    })
                    
                })

       });
    //    console.log(list)
    })
  .catch((err) => console.log(err))
  .finally(() => console.log('done'))