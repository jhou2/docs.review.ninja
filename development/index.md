---
layout: default
title: ReviewNinja Development
---
<h1 id="development">Development</h1>

To get started developing ReviewNinja, go to https://github.com/reviewninja/vagrant.review.ninja.  This is a vagrant box/salt provisioning to get you set up as quickly as possible.

Set up the environment
----------------------

Prerequisites:

  * [Virtualbox](https://www.virtualbox.org/) 
  * [Vagrant](https://www.vagrantup.com/)

Clone this repository:

	git clone https://github.com/reviewninja/vagrant.review.ninja.git

Run:

	vagrant up

This downloads a puppetlabs/ubuntu-14.04-64-puppet image if you don't have it 
and starts up the virtual machine. 

Run [salt](http://www.saltstack.com/) provisioning.  The salt formula also sets up MongoDB.

If anything fails (network failure, or any other cause), run `vagrant
provision` to get the machine into the correct state.

You can now ssh into the machine:

	vagrant ssh

The app is located in `/home/vagrant/review.ninja`.  

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

## Pre-commit hooks (optional)

We have some pre-commit hooks to aid in development.  You might need to add sudo, depending on your configuration.

	pip install pre-commit  
	pre-commit install

For more information, see http://pre-commit.com/.


Contribute to this repo
-----------------------

Any feedback or contributions on customizations are very welcome.

If you like any other provisioning provider better and can contribute your
script, feel free to open an issue and we are happy to create a repository for
it.

