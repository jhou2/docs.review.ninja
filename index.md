---
layout: default
---

<div class="row">
	<div class="col-md-3 col-xs-3">
		{% image reviewninja-face.png width="100px" %}
	</div>
	<div class="col-md-9 col-xs-9">
		<h1>Review Ninja Documentation</h1>
	</div>
</div>

Welcome to 
[Review Ninja](https://github.com/reviewninja/review.ninja) documentation! 

Do simple code reviews for free at http://review.ninja/ or create your own private instance. 

<h1 id="quickstart">Quickstart</h1>

Go to <a href="http://review.ninja/auth/github" target="_blank">Review Ninja</a>.

Enter your Github credentials.

Your Github credentials are needed to access your code for code review.  

Note:  We follow Github's recommended best practices to secure your credentials.  All your code is stored on Github's servers.  None of it is copied or stored on Review Ninja servers.  You are welcome to check out the source code yourself and run your own instance of Review Ninja.

## Add your repository

To add a repository, click <i class="fa fa-plus-circle"></i>.  
To remove a repository, click <i class="fa fa-times"></i>.

If you have multiple organizations, click on the organization with the repository you want to add.  You must have collaborator status to add the repo.

Review Ninja loads the repositories you have write access to.  Click on the repository you want to add.

You can also type the name of the repository and click Enter.

## Basic Workflow

  1. Create a branch for your feature.
  2. Write code.
  3. Submit a pull request.
  4. Other members of the organization review the code and comment or star code as a sign of approval.
  5. Once everyone has reviewed it, the merge is commited.

## Code Review

Click the repository you want to view.
All pending pull requests in this repository appear in a list.  

Click a pull request to begin a code review.

To star a review, click <i class="fa fa-star ng-scope"></i>.

## Configuration

You can change your notification settings for pull requests, issues, and stars.

To configure your settings, click <i class="fa fa-cog"></i>.

<h1 id="installation">Installation</h1>

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


<h1 id="environment-variables">Environment Variables</h1>

You'll need the following environment variables set in a venv file:

<table class="table">
	<tr>
	<th>Environment Variable</th>
	<th>Description</th>
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
	<td>Defaults to "PROTOCOL://HOST(:PORT)?/auth/github/callback"</td>
</tr>
<tr>
	<td>GITHUB_HOST</td>
	<td>Defaults to "github.com". Warning: If this variable is set, it is assumed that Github Enterprise is used.</td>
</tr>
<tr>
	<td>GITHUB_API_HOST </td>
	<td>Defaults to "api.github.com"</td>
</tr>
<tr>
	<td>GITHUB_PATH_PREFIX</td>
	<td>For Github Enterprise, this defaults to "/api/v3". Otherwise, it defaults to empty string or "".</td>
</tr>
<tr>
	<td>GITHUB_PROTOCOL</td>
	<td>Defaults to "https".  Options: "http" or "https"</td>
</tr>
<tr>
	<td>GITHUB_AUTHORIZATION_URL</td>
	<td>Defaults to "GITHUB_PROTOCOL://GITHUB_HOST/login/oauth/authorize"</td>
</tr>
<tr>
	<td>GITHUB_TOKEN_URL</td>
	<td>Defaults to "GITHUB_PROTOCOL://GITHUB_HOST/login/oauth/access_token"</td>
</tr>
<tr>
	<td>GITHUB_PROFILE_URL</td>
	<td>Defaults to "GITHUB_PROTOCOL://GITHUB_API_HOST+GITHUB_PATH_PREFIX/user"</td>
</tr>
<tr>
	<td>GACODE</td>
	<td>Optional.  If this is not set, Google Analytics will not be recorded.</td>
</tr>
<tr>
	<td>HOST</td>
	<td>Defaults to "review.ninja"</td>
</tr>
<tr>
	<td>HOST_PORT</td>
	<td>This only needs to be set if it is a custom host port.  For example, http and https are used but not on port 80 and 443.</td>
</tr>
<tr>
	<td>MONGODB</td>
	<td>This must be set if it is not the same as the default: "mongodb://reviewninja:reviewninja@localhost:27017/reviewninja"  The default is only for development purposes.  It is not recommended.</td>
</tr>
<tr>
	<td>PORT</td>
	<td>The local port to bind to.  Defaults to 5000.</td>
</tr>
<tr>
	<td>PROTOCOL</td>
	<td>Defaults to "https".  "http" or "https".  </td>
</tr>
<tr>
	<td>SMTP_HOST</td>
	<td>if SMTP_HOST is set, then all SMTP_* variables must be set.  If they are not set, then the server's sendmail variables will be used.
	<ul>
		<li>SMTP_HOST</li>
		<li>SMTP_PORT</li>
		<li>SMTP_USER</li>
		<li>SMTP_PASS</li>
	</ul>
	</td>
</tr>
</table>
<h1 id="github-api-scope">
Review Ninja Use of Github API Scope
</h1>

In order to provide you with an effective code review, Review Ninja needs the following permissions.  Please refer to [GitHub's API documentation] (https://developer.github.com/v3/oauth/#scopes) as well for more information.

 * user:email

	We use your email address to send you notifications. We do not use your email address for anything else.

 * repo

 	We need to access your repos to show you the diff and allow you perform a code review.

 * repo:status

 	After every code review, we update the status of its commit, which is relevant for submitting a pull request. This scope gives us the permission to update the commit status.

 * read:repo_hook

 	We need granular access to act on events in your repositories. read:repo_hook grants read and ping access to hooks in public or private repositories.

 * write:repo_hook

 	We need granular access to act on events in your repositories.  write:repo_hook grants read, write, and ping access to hooks in public or private repositories.

 * read:org

 	Review Ninja shows you all of your repositories, including the ones from any organization you're part of.

	The GitHub API hides any organizations that you privately belong to without this scope. We require this scope so we can show you all of your repositories.

	Note that this scope allows access to the basic information on both private and public repositories, but not on any of the data and code stored in them.

 * write:org

 	write:org allows an application to publicize and unpublicize an organization membership.  




<h1 id="about">About</h1>

What is Review Ninja?
---------------------

Review Ninja is a lightweight tool deeply integrated with GitHub that helps you perform code reviews quickly and efficiently. Review Ninja supports hassle-free committing and merging through pull requests, with a simple voting system. Our primary focus is to make it easier to identify, review, and collaborate in code reviews.

Review Ninja stores the least amount of information from your GitHub account to make the app work. It ensures that the necessary data is up to date and the data is stored at GitHub only.  None of your code is stored with Review Ninja.  

Review Ninja integrates into GitHub.com as well as GitHub Enterprise. The application stack includes Node.js, Express, MongoDB and AngularJS.

Why should I use Review Ninja?
------------------------------

Review Ninja defines a clear process for code review in GitHub. It also provides a status overview so that team members in other departments, such as product management or design, can quickly grasp the state of the project.

<h1 id="license">License
</h1>

Copyright 2014 by [SAP AG](www.sap.com) and made available under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0). 

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

<h1 id="credits">Credits
</h1>

<p align="center">
![SAP](https://cdn.rawgit.com/reviewninja/review.ninja/master/sap_logo.png)

<p align="center">
<i class="fa fa-heart"></i> from the github team @ sap
