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

Basic steps:

  1. Install Node
  2. Install MongoDB
  3. Create MongoDB user
  4. Create MongoDB database 
  4. Install ReviewNinja
 
Clone this repository:

	git clone https://github.com/reviewninja/review.ninja.git

The app is located in `/home/review.ninja`.  

	cd ~/review.ninja

Install npm and bower dependencies:

	npm install
	bower install

To configure the application, copy the `.env.example` file to `.env`:

	cp .env.example .env

You need to [register the application on
GitHub](https://github.com/settings/applications/new). The callback is
http://localhost:5000/auth/github/callback.  Fill out the name and homepage 
as you wish.

Set the `GITHUB_CLIENT` and `GITHUB_SECRET` environment variables accordingly in the `.env` file.

The following environment variables are mandatory: 

  * `MONGODB`
  * `GITHUB_CLIENT`
  * `GITHUB_SECRET` 

The `MONGODB` default in the `.env.example` file is correct unless you have an alternative configuration.

Once that is done you can start the application with:

	npm app.js
	

Contribute to this repo
-----------------------

Any feedback or contributions on customizations are very welcome.

If you like any other provisioning provider better and can contribute your
script, feel free to open an issue and we are happy to create a repository for
it.

