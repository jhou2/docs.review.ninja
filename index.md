---
layout: default
---

Review Ninja Documentation
=========================

This is the user documentation page for
[Review Ninja](https://github.com/reviewninja/review.ninja). This documentation applies to both the public instance at http://review.ninja/ and your private instances.  

Quickstart Guide
----------------

Go to http://review.ninja/auth/github.

Enter your Github credentials.

Your Github credentials are needed to access your code for code review.  We follow Github's recommended best practices to secure your credentials.  All your code is stored on Github's servers.  None of it is copied or stored on Review Ninja servers.  You are welcome to check out the source code yourself and run your own instance of Review Ninja.

### Add your repository

Click on the organization name with the repository you want to add.  You must have collaborator status to add the repo.

Review Ninja loads the repositories you have write access to.  Click on the repository you want to add.

You can also type the name of the repository and click Enter.

### Code Review

Click the repository you want to view.
Click the Pull Requests tab.
All pending pull requests appear in this list.
Click a pull request to begin a code review.


## Installation Guide

	git clone git://github.com/review.ninja.git

You'll need nodejs, grunt, and bower.  If you don't have them already, install them with the following commands:

	npm install -g grunt-cli
	npm install -g bower

To run locally:

	npm install
	bower install
	gem install compass
	source venv
	grunt sass
	grunt serve


# Environment Variables

You'll need the following environment variables set in a venv file:

<table>
	<tr>
	<th>Environment Variable</th>
	<th>Description</th>
</tr>
<tr>
	<td>PORT</td>
	<td>local port to bind to, defaults to 5000</td>
</tr>
<tr>
	<td>PROTOCOL</td>
	<td>"http" or "https", default: "https"</td>
</tr>
<tr>
	<td>HOST</td>
	<td>defaults to "review.ninja"</td>
</tr>
<tr>
	<td>HOST_PORT</td>
	<td>only needs to be set if custom (e.g. http/https but not on port 80/443)</td>
</tr>
<tr>
	<td>MONGODB</td>
	<td>must be set if not same as default (default not recommended, only for development purposes): "mongodb://reviewninja:reviewninja@localhost:27017/reviewninja"</td>
</tr>
<tr>
	<td>GITHUB_CLIENT</td>
	<td>Required</td>
</tr>
<tr>
	<td>GITHUB_SECRET</td>
	<td>Required</td>
</tr>
<tr>
	<td>GITHUB_CALLBACK</td>
	<td>defaults to "PROTOCOL://HOST(:PORT)?/auth/github/callback"</td>
</tr>
<tr>
	<td>GITHUB_HOST</td>
	<td>defaults to "github.com", warning: if this variable is set, it is assumed, that github enterprise is used</td>
</tr>
<tr>
	<td>GITHUB_API_HOST </td>
	<td>defaults to "api.github.com"</td>
</tr>
<tr>
	<td>GITHUB_PATH_PREFIX</td>
	<td>defaults to "/api/v3" if enterprise "" if not</td>
</tr>
<tr>
	<td>GITHUB_PROTOCOL</td>
	<td>"http" or "https", defaults to "https"</td>
</tr>
<tr>
	<td>GITHUB_AUTHORIZATION_URL</td>
	<td>defaults to "GITHUB_PROTOCOL://GITHUB_HOST/login/oauth/authorize"</td>
</tr>
<tr>
	<td>GITHUB_TOKEN_URL</td>
	<td>defaults to "GITHUB_PROTOCOL://GITHUB_HOST/login/oauth/access_token"</td>
</tr>
<tr>
	<td>GITHUB_PROFILE_URL</td>
	<td>defaults to "GITHUB_PROTOCOL://GITHUB_API_HOST+GITHUB_PATH_PREFIX/user"</td>
</tr>
<tr>
	<td>GACODE</td>
	<td>optional if not set, no google analytics will be recorded</td>
</tr>
<tr>
	<td>SMTP_HOST</td>
	<td>if SMTP_HOST is set, then all SMTP_* must be set if its not set, then the servers sendmail will be used
	<ul>
		<li>SMTP_HOST</li>
		<li>SMTP_PORT</li>
		<li>SMTP_USER</li>
		<li>SMTP_PASS</li>
	</ul>
	</td>
</tr>
</table>
# Review Ninja Use of Github API Scope

	* user:email

	* repo

	* repo:status

	* read:repo_hook

	* write:repo_hook

	* read:org

	* write:org



What is Review Ninja?
---------------------

Review Ninja is a lightweight tool deeply integrated with GitHub that helps you perform code reviews quickly and efficiently. Review Ninja supports hassle-free committing and merging through pull requests, with a simple voting system. Our primary focus is to make it easier to identify, review, and collaborate in code reviews.

Review Ninja stores the least amount of information from your GitHub account to make the app work. It ensures that the necessary data is up to date and the data is stored at GitHub only.  None of your code is stored with Review Ninja.  

Review Ninja integrates into GitHub.com as well as GitHub Enterprise. The application stack includes Node.js, Express, MongoDB and AngularJS.

Why should I use Review Ninja?
------------------------------

Review Ninja defines a clear process for code review in GitHub. It also provides a status overview so that team members in other departments, such as product management or design, can quickly grasp the state of the project.