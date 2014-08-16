Contribute
----------

> If you want to contribute to design or want to test locally follow these
> steps

You need to install ruby >1.9.3 and nodejs and clone the repository. Open a
terminal and `cd` into the repository directory.

Install all necessary ruby libraries:

	bundle install

Once that's done, you are ready to contribute to the documentation.

You can add/edit the markdown files and compile it to html and start a small
http server to look at it in your browser with `rake serve`.

> this automaticatlly compiles all files when you make changes, so no need to
> restart the server

If you are a collaborator, you can also publish the documentation with `rake
publish`.
