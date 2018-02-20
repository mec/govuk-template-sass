# GOV.UK Template SASS & Assets
This project includes the [GOVUK tempalate](https://github.com/alphagov/govuk_template/) project and simply extracts the assets into a src folder via gulp.

The idea is that another project can then include the assets (sass, images, etc) and recreate the template.

The GOVUK template is included as a git submodule.

## Usage
This repo has everything you need already built, use the src folder in your project by copying the assets or by npm installing this repo:

```
npm i git+https://github.com/mec/govuk-template-sass.git
```

You can then use the assets like any other package in your node_modules folder.

## Building
If you want to build the assets run:

```
npm install
npm start
``` 
from the govuk-template-sass folder, which will update the git submodule and copy the assets.
