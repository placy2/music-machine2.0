# README
## License
All source code in this project is available under the MIT license.See [LICENSE.md](LICENSE.md) for details.

## General Info
* Ruby version
  * Currently running on ruby 2.56p201
* Rails version
  * Currently running on rails 6.0.3.3

## Getting started

To get started with the app, clone the repo and then install the needed gems:

```
$ bundle install --without production
```

Then, from the project directory, run:

```
$ rails server
```

The application can then be accessed at localhost:3000.


### TODO:

* React
  * ~~Integrate React & move homepage to new architecture while preserving functionality~~
  * Set up hot reloading
  * Add audiosynth calls to React component
  * Establish a basic component hierarchy/structure for main application
* General
  * ~~Play sounds/chords via buttons triggering Javascript (audiosynth by keithwhor)~~
  * Integrate CSS library (Bootstrap, Flexbox, Material? More research required to match needs)
  * Trim down unnecessary scaffolding code & streamline Webpacker loading