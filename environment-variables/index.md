---
layout: default
title: ReviewNinja Environment Variables
---

<h1 id="environment-variables">Environment Variables</h1>

The following are the environment variables you can configure in the venv file:

 * <code>GITHUB_CLIENT</code>:  Required

 * <code>GITHUB_SECRET</code>:  Required

 * <code>GITHUB_CALLBACK</code>:  Defaults to "PROTOCOL://HOST(:PORT)?/auth/github/callback"

 * <code>GITHUB_HOST</code>:  Defaults to "github.com". Warning: If this variable is set, it is assumed that GitHub Enterprise is used.

 * <code>GITHUB_API_HOST</code>:  Defaults to "api.github.com"
 
 * <code>GITHUB_PATH_PREFIX</code>	- For GitHub Enterprise, this defaults to "/api/v3". Otherwise, it defaults to empty string or "".
 * <code>GITHUB_PROTOCOL</code>:  Options are "http" or "https".  Defaults to "https".  
 * <code>GITHUB_AUTHORIZATION_URL</code>:  Defaults to "GITHUB_PROTOCOL://GITHUB_HOST/login/oauth/authorize"
 * <code>GITHUB_TOKEN_URL</code>:  Defaults to "GITHUB_PROTOCOL://GITHUB_HOST/login/oauth/access_token"
 * <code>GITHUB_PROFILE_URL</code>:  Defaults to "GITHUB_PROTOCOL://GITHUB_API_HOST+GITHUB_PATH_PREFIX/user"
 * <code>GACODE</code>:  Optional.  If this is not set, Google Analytics will not be recorded.
 * <code>HOST</code>:  Defaults to "review.ninja"
 * <code>HOST_PORT</code>:  This only needs to be set if it is a custom host port.  For example, http and https are used but not on port 80 and 443.
 * <code>MONGODB</code>:  This must be set if it is not the same as the default: "mongodb://reviewninja:reviewninja@localhost:27017/reviewninja"  The default is only for development purposes.  It is not recommended.
 * <code>PORT</code>:  The local port to bind to.  Defaults to 5000.
 * <code>PROTOCOL</code>:  Defaults to "https".  "http" or "https".  
 * <code>SMTP_HOST</code>:  if SMTP_HOST is set, then all SMTP_* variables must be set.  If they are not set, then the server's sendmail variables will be used.
 	* <code>SMTP_HOST</code>
 	* <code>SMTP_PORT</code>
 	* <code>SMTP_USER</code>
 	* <code>SMTP_PASS</code>

	
