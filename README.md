# ReviewNinja Documentation

This is still very much a work in progress.  To give feedback, please create an issue or pull request.

Contribute
----------

Fork this repo, make your changes to the markdown files and create a pull
request. You only need to read on if you want to test locally.

Getting ready to Contribute
---------------------------

> If you want to contribute to design or want to test locally follow these
> steps. Otherwise just edit the markdown files and open a pull request.

You need to install ruby >1.9.3 and clone the repository. Open a terminal and
`cd` into the repository directory. (if you have osx or linux you should
already have that, on windows I recommend this http://rubyinstaller.org/)

Install all necessary ruby libraries:

	bundle install

Once that's done, you are ready to contribute to the documentation.

You can add/edit the markdown files and compile it to html and start a small
http server to look at it in your browser with `rake serve`.

> this automaticatlly compiles all files when you make changes, so no need to
> restart the server

If you are a collaborator, you can also publish the documentation with `rake
publish`.
