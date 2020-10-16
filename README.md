### Redundant Robot

Deploy with subdirectory `process.env.REACT_APP_DEPLOY_DIRECTORY`

#### Build

`REACT_APP_DEPLOY_DIRECTORY=abcdef yarn build`

#### Deploy with `scp`

`$ scp -r <local-directory> <username@site.com>:<remote-directory>`

`/home/username/domains/site.com/public_html/subdirectory`

#### htaccess

example to allow direct linking to sites with react-router
place the `.htaccess` file within the directory you want this to work for (in the actual subdirectory)

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /<SUBDIRECTORY>/index.html [L]
</IfModule>
```
