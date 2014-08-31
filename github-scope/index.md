---
layout: default
title: ReviewNinja Use of GitHub API Scope
---
<h1 id="github-api-scope">
ReviewNinja Use of GitHub API Scope
</h1>

We authenticate all sessions with GitHub's provided OAuth service.  We never store code in our own data persistence.  We do store user tokens (provided by OAuth), name (GitHub handle), and email.  All other information stored is specific to ReviewNinja.  ReviewNinja is a "client-heavy" application, meaning that every request for GitHub data is piped to GitHub and subject to their security mechanisms.

The following are the activities that ReviewNinja does with the GitHub permissions:

  1. Create Issues
  2. Set statuses
  3. Read the email address of the user
  4. Create/Delete webhooks
  5. "Reading" and displaying for code review

ReviewNinja requests the following permissions.  Please refer to [GitHub's API documentation] (https://developer.github.com/v3/oauth/#scopes) as well for more information.  The app is still in active development, and some of these permissions will likely be eliminated in the near future.

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

 	ReviewNinja shows you all of your repositories, including the ones from any organization you're part of.

	The GitHub API hides any organizations that you privately belong to without this scope. We require this scope so we can show you all of your repositories.

	Note that this scope allows access to the basic information on both private and public repositories, but not on any of the data and code stored in them.

 * write:org

 	write:org allows an application to publicize and unpublicize an organization membership.  

