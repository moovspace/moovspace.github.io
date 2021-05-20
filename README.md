# Spa js app
Spa js app for github pages.

### Router
main.js
```js
import Router from '/spa/router/router.js'

// Start router
let r = new Router()

// App html div id
r.AppDiv = "#app"
// Default page
r.AppMainPage = "/spa/home.js"
// Error page
r.AppErrorPage = "/spa/error/error.js"
// Show error page
r.ShowError = true
// Show console logs
r.ShowLog = true

// Add routes
r.addRoute("/", "/spa/home.js")
r.addRoute("/todos/list", "/spa/todo-list.js")
r.addRoute("/todo/{id}", "/spa/todo.js")
r.addRoute("/profil/{id}", "/spa/user.js")

// Load external links redirects
r.init()
```

### Add router
index.html
```html
<head>
	<script src="/main.js" type="module"></script>
</head>
<body id="body">
	<div id="app">
		<h2> Loading ... </h2>
		<h4> <img src="/media/loader.gif"> </h4>
	</div>
</body>
```

### Page component class
nano /spa/home.js
```js
import Component from '/spa/router/component.js'
import Event from '/spa/router/event.js'
import Store from '/spa/store.js'
import View from '/spa/view/home.js'

export class Page extends Component
{
	Setup(div)
	{
		// Document events: click, dblclick, change, keydown, contextmenu, auxclick, mouseover ...
		let e1 = Event.addDocument("#boo-click", (item,index,event) => {
			Store.FetchId(11);
		}, "click");

		let e2 = Event.addDocument(".btn", (item,index,event) => {
			alert("Path clicked: " + event.target.dataset.id);
		}, "click");

		// Window events: hashchange, load, popstate - after local link click
		let e3 = Event.addWindow((event) => {
			Store.FetchAll(0,10);
		}, 'load');

		// Page title
		document.title = 'Home page - ' + location.pathname;

		return { 'html': View.Html(), 'document_events': [e1,e2], 'window_events': [e3] }
	}
}
```

### Install with git
```sh
# Get with git
git clone https://github.com/moovspace/spa-js-router.git /var/www/html/spa.xx

# Permissions
chown -R your-user-name:www-data /var/www/html/spa.xx
chmod -R 2775 /var/www/html/spa.xx
```

### Install with composer
```sh
# cache clear
composer clearcache

# create new project in dir
composer create-project --no-dev moovspace/spa-js-router /var/www/html/spa.xx

# create new project in dir with version v7.0
composer create-project --no-dev --prefer-dist moovspace/spa-js-router=7.0 /var/www/html/spa.xx

# permissions
chown -R your-user-name:www-data /var/www/html/spa.xx
chmod -R 2775 /var/www/html/spa.xx
```

### Domain local host
nano /etc/hosts
```sh
# Add to /etc/hosts file
127.0.0.1	spa.xx www.spa.xx
```

### Nginx
```bash
# Add to file
# /etc/nginx/sites-available/default
# Restart nginx
# sudo service nginx restart

server {
	listen 80;
	listen [::]:80;
	server_name spa.xx;
	root /var/www/html/spa.xx;
	index index.html
	# Js
	location / {
		# Get file or folder or redirect uri to index.html
		try_files $uri $uri/ /index.html;

		# Get file or folder or redirect uri to url param in index.php
		# try_files $uri $uri/ /index.php?url=$uri&$args;
		# Get file or folder or error
		# try_files $uri $uri/ =404;
	}
	# Php
	location ~ \.php$ {
		include snippets/fastcgi-php.conf;
		fastcgi_pass unix:/var/run/php/php7.3-fpm.sock;
	}

	# Allow symlinks
	# disable_symlinks off;

	# File upload size
	# client_max_body_size 100M;

	# Tls redirect
	# return 301 https://$host$request_uri;
	# return 301 https://spa.xx$request_uri;
}
```

### Run from browser
```sh
http://spa.xx
```

### Apache2 .htaccess
```bash
RewriteEngine on
# RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
# Rewrite to index.html
RewriteRule ^(.*)$ /index.html [NC,L,QSA]
# Rewrite to index.php
# RewriteRule ^(.*)$ /index.php?uri=$1 [NC,L,QSA]
DirectoryIndex index.html
```
