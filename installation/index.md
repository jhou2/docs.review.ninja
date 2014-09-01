---
layout: default
title: ReviewNinja Installation
---
<h1 id="installation">Installation</h1>

We use salt provisioning to get you installed and ready to go as hassle-free as possible.  

Set up the environment
----------------------

Prerequisites:

  * NodeJS
  * MongoDB
  * Linux or Mac OSX
  * [Salt](http://www.saltstack.com/) 


Basic steps:

  1. Install Node
  2. Install MongoDB
  3. Create MongoDB user
  4. Create MongoDB database 
  4. Install ReviewNinja
 
Clone this repository:

	git clone https://github.com/reviewninja/review.ninja.git

Run [salt](http://www.saltstack.com/) provisioning.  The salt formula sets up MongoDB.

The app is located in `/home/review.ninja`.  

	cd ~/review.ninja

Install npm and bower dependencies:

	npm install
	bower install

To configure the application, copy the `.env.example` file to `venv`:

	cp .env.example venv

You need to [register the application on
GitHub](https://github.com/settings/applications/new). The callback is
http://localhost:5000/auth/github/callback.  Fill out the name and homepage 
as you wish.

Set the `GITHUB_CLIENT` and `GITHUB_SECRET` environment variables accordingly in the `venv` file.

The following environment variables are mandatory: 

  * `MONGODB`
  * `GITHUB_CLIENT`
  * `GITHUB_SECRET` 

The `MONGODB` default in the `.env.example` file is correct unless you have an alternative configuration.

Start the application
---------------------

Use grunt to start up the app and compile the sass files
whenever they are changed.

	grunt serve

If you need to compile the sass files on demand, run `grunt sass`.

Contribute to this repo
-----------------------

Any feedback or contributions on customizations are very welcome.

If you like any other provisioning provider better and can contribute your
script, feel free to open an issue and we are happy to create a repository for
it.

<h1 id="environment-variables">Environment Variables</h1>

The following are the environment variables you can configure in the venv file:
<div class="table-responsive">
<table class="table">
	<tr>
	<th>Environment Variable</th>
	<th>Description</th>
</tr>
<tr>
	<td><code>GITHUB_CLIENT</code></td>
	<td>Required</td>
</tr>
<tr>
	<td><code>GITHUB_SECRET</code></td>
	<td>Required</td>
</tr>
<tr>
	<td><code>GITHUB_CALLBACK</code></td>
	<td>Defaults to "PROTOCOL://HOST(:PORT)?/auth/github/callback"</td>
</tr>
<tr>
	<td><code>GITHUB_HOST</code></td>
	<td>Defaults to "github.com". Warning: If this variable is set, it is assumed that GitHub Enterprise is used.</td>
</tr>
<tr>
	<td><code>GITHUB_API_HOST</code> </td>
	<td>Defaults to "api.github.com"</td>
</tr>
<tr>
	<td><code>GITHUB_PATH_PREFIX</code></td>
	<td>For GitHub Enterprise, this defaults to "/api/v3". Otherwise, it defaults to empty string or "".</td>
</tr>
<tr>
	<td><code>GITHUB_PROTOCOL</code></td>
	<td>Defaults to "https".  Options: "http" or "https"</td>
</tr>
<tr>
	<td><code>GITHUB_AUTHORIZATION_URL</code></td>
	<td>Defaults to "GITHUB_PROTOCOL://GITHUB_HOST/login/oauth/authorize"</td>
</tr>
<tr>
	<td><code>GITHUB_TOKEN_URL</code></td>
	<td>Defaults to "GITHUB_PROTOCOL://GITHUB_HOST/login/oauth/access_token"</td>
</tr>
<tr>
	<td><code>GITHUB_PROFILE_URL</code></td>
	<td>Defaults to "GITHUB_PROTOCOL://GITHUB_API_HOST+GITHUB_PATH_PREFIX/user"</td>
</tr>
<tr>
	<td><code>GACODE</code></td>
	<td>Optional.  If this is not set, Google Analytics will not be recorded.</td>
</tr>
<tr>
	<td><code>HOST</code></td>
	<td>Defaults to "review.ninja"</td>
</tr>
<tr>
	<td><code>HOST_PORT</code></td>
	<td>This only needs to be set if it is a custom host port.  For example, http and https are used but not on port 80 and 443.</td>
</tr>
<tr>
	<td><code>MONGODB</code></td>
	<td>This must be set if it is not the same as the default: "mongodb://reviewninja:reviewninja@localhost:27017/reviewninja"  The default is only for development purposes.  It is not recommended.</td>
</tr>
<tr>
	<td><code>PORT</code></td>
	<td>The local port to bind to.  Defaults to 5000.</td>
</tr>
<tr>
	<td><code>PROTOCOL</code></td>
	<td>Defaults to "https".  "http" or "https".  </td>
</tr>
<tr>
	<td><code>SMTP_HOST</code></td>
	<td>if SMTP_HOST is set, then all SMTP_* variables must be set.  If they are not set, then the server's sendmail variables will be used.
	<ul>
		<li><code>SMTP_HOST</code></li>
		<li><code>SMTP_PORT</code></li>
		<li><code>SMTP_USER</code></li>
		<li><code>SMTP_PASS</code></li>
	</ul>
	</td>
</tr>
</table>
</div>