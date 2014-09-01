---
layout: default
---

<h1>ReviewNinja Documentation</h1>
Welcome to 
[ReviewNinja](https://github.com/reviewninja/review.ninja) documentation! 

Start reviewing code at http://review.ninja/ or [create your own private instance]({{ site.baseurl }}/installation). 

Both the appication and the documentation are under active development, so changes may occur without prior notice.

<h1 id="quickstart">Quickstart</h1>

Go to <a href="http://review.ninja/auth/github" target="_blank">ReviewNinja</a>.

Enter your GitHub credentials.

We authenticate all sessions with GitHub's provided OAuth service.  We never store code in our own data persistence.  We do store user tokens (provided by OAuth), name (GitHub handle), and email.  All other information stored is specific to ReviewNinja.

## Add your repository

If you have multiple organizations, click on the organization with the repository you want to add.  You must have collaborator or owner status to add the repo.

ReviewNinja loads the repositories that you have write permissions for.  Click on the repository you want to add.

To add a repository, click <i class="fa fa-plus-circle"></i>.  
To remove a repository, click <i class="fa fa-times"></i>.

You can also type the name of the repository and click Enter.

## Basic Workflow

  1. Create a branch for your feature.
  2. Write code.
  3. Submit a pull request.
  4. Other members of the organization review the code and comment or star the code as a sign of approval.
  5. The collaborator decides if sufficient code review has occurred and commits the merge.

## Code Review

Compare diffs and add your comments.  ReviewNinja provides a convenient way to add your comments either for a pull request as a whole or on specific line numbers.

Click the repository you want to view.
All pending pull requests in this repository appear in a list.  

Click a pull request to begin a code review.

## Issue Management

Any time you discover something that needs fixing, ReviewNinja opens a GitHub issue. 

To create an issue, click Issues <i class="fa fa-plus"></i>.

You must enter a title for the issue.  Entering a description is optional.  To link the issue to a line number, click the line number.  An icon <span class="octicon octicon-issue-opened text-warning"></span> appears beside the line.

Click on other issues to view them, add comments, or close the issues.  The corresponding GitHub issue will also be closed.  

## Starring

ReviewNinja understands that often in code review what matters most is *who* did the review.  By starring a pull request, it shows that the reviewer has seen the code change and has approved it.

To star a review, click the ninja <i class="fa fa-star ng-scope"></i>.

## Merge with Confidence

The Merge pull request button changes color to signal the level of confidence in the merge.

If there is at least one star with no open issues, the Merge pull request button appears green.  
If there are no stars, the Merge pull request button appears orange.  
If there are open issues, the Merge pull request button appears red.


## Configuration

You can change your notification settings for pull requests, issues, and stars.  In contrast to GitHub, ReviewNinja email notifications are "opt-in".  You will only receive email notifications if you select the appropriate checkboxes. 

To configure your settings, click <i class="fa fa-cog"></i>.

You can choose to receive email notifications for the following:

  * Pull requests
  * Issues
  * Ninja stars

You can also enter specific branches that you want to "watch".  You will receive email notifications about the branch whenever there is an action related to it.


<h1 id="license">License
</h1>

Copyright 2014 by [SAP SE](http://www.sap.com) and made available under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0). 

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