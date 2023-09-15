const simpleGit = require('simple-git');
const moment = require('moment');
const fs = require('fs');

const git = simpleGit();
const dates = JSON.parse(fs.readFileSync('data.json', 'utf8'));

(async () => {
  for (let date of dates) {
    const commitDate = moment(date).format('YYYY-MM-DDTHH:mm:ss');
    fs.writeFileSync('dummy.txt', commitDate);
    await git.add('./*');
    await git.commit('go green commit', { '--date': commitDate });
    console.log(`Committed for ${commitDate}`);
  }
})();
