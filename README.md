# My Personal Website

Hi :blush:

[mannar.ch](http://www.mannar.ch) was a simple personal website that i did in 2018 (v1.0) through which i learned HTML, CSS , SASS & JS.

*   In 2021 April, i integegrated Webppack to boost performance, tagged it with v2.0.

*  Then i applied the best practices of web perfomance optimization, which i tagged it with v2.1.

![](/mannar.ch-responsive.png)

## Which Build tool did i use?
To compile and create the distribution files of the website i used Webpack 5.35 and webpack dev server 3.11
## Which plugins/node packages did i use?
1.  JS loader:  @babel/core 7.13
2.  Styles loader: sass-loader and style-loader, along with the html-loader & html-webpack-plugin
3.  Image comprission & optimization: image-minimizer-webpack-plugin, imagemin-mozjpeg, imagemin-pngquant, imagemin-svgo
4.  Template partials: created with html-webpack-partials-plugin
5.  Linting: eslint 7.25
6. Extracting the css with mini-css-extract-plugin 1.5
7.  Tetrix game: blockrain 0.2
8.  Filtering blog posts with isotope-layout 3.0


## Performance Comparision before & after
### v1.0
![](/mannar.ch-performance-v1.0.png)
-   the old website (v1.0) used to start render after 5.9s and it takes 111s to fully load (1min51sec).
-   Google Lighthouse rating was 63 (the best rating is 100).
### v2.1
![](/mannar.ch-performance-v2.1.png)
-   the new website (v2.1) with the webpack and applied web perfromance optimization pratices starts rendering in just 1.5s and loads fully in 24s.
-   Google Lighthouse rating is pushed to 85.

## Resources used
*   [Performance Audit at web.dev](https://web.dev/lighthouse-performance/)

*   [Build Faster Websites Tutorial by Luke Harrison](https://www.udemy.com/course/building-faster-websites-getting-started-with-web-performance/)

## Thanks
The project is open source, if you have question to the webpack config, don't hesitate to get in touch with me.

Cheers :wave: :sparkles: