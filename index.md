---
layout: default
---

Review Ninja Documentation
=========================

This is the user documentation page for
[Review Ninja](https://github.com/reviewninja/review.ninja). This documentation applies to both the public instance at http://review.ninja/ and your private instances.  

What is Review Ninja?
---------------------

Review Ninja is a lightweight tool deeply integrated with GitHub that helps you perform code reviews quickly and efficiently. Review Ninja supports hassle-free committing and merging through pull requests, with a simple voting system. Our primary focus is to make it easier to identify, review, and collaborate in code reviews.

Review Ninja also lets you add automatic voters, or "bots" in addition to regular human voters. "Bots" can be any application or step in your continuous delivery system.  For example, a Jenkins "bot" can vote down pull requests if they break the build. 

Review Ninja stores the least amount of information from your GitHub account to make the app work. It ensures that the necessary data is up to date and the data is stored at GitHub only.  None of your code is stored with Review Ninja.  

Review Ninja integrates into GitHub.com as well as GitHub Enterprise. The application stack includes Node.js, Express, MongoDB and AngularJS.

Why should I use Review Ninja?
------------------------------

Review Ninja defines a clear process for code review in GitHub. It also provides a status overview so that team members in other departments, such as product management or design, can quickly grasp the state of the project.

Quickstart Guide
----------------

Go to http://review.ninja/auth/github.

Enter your Github credentials.

Your Github credentials are needed to access your code for code review.  We follow Github's recommended best practices to secure your credentials.  All your code is stored on Github's servers.  None of it is copied or stored on Review Ninja servers.  You are welcome to check out the source code yourself and run your own instance of Review Ninja.

### Add your repository

To add repositories, click "Configure".

To add a specific repository, click the "On/Off" slider.

### Code Review

Click the repository you want to view.
Click the Pull Requests tab.
All pending pull requests appear in this list.
Click a pull request to begin a code review.

#### Vote

#### Create an issue

#### View Commits

Click the Commits tab.
Click a commit you're interested in.
The Commit information page displays 

#### The ninja.json file


#### Create a bot

Go to the repository you want to work on.
Click the "Bots" tab.
Click + to create a bot.
Enter a name for the bot.
Click the "On/Off" slider to activate the bot.


#### Bot development