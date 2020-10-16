### Redundant Robot

Deploy with subdirectory `process.env.REACT_APP_DEPLOY_DIRECTORY`

#### Build

`REACT_APP_DEPLOY_DIRECTORY=abcdef yarn build`

#### Deploy with `scp`

`$ scp -r <local-directory> <username@site.com>:<remote-directory>`

`/home/username/domains/site.com/public_html/subdirectory`
