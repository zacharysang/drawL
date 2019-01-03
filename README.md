# drawL
A project using antlr that will hopefully get a better name in the future

# To make a similar antlr project (Sorry, this is a pretty involved process at the moment)
* Use an environment with mvn installed
* Clone this repo and delete the `.git` directory (so you can start your project fresh)
* Change values in pom.xml to match your project name
* Delete files in `webapp_src/parser` (these are used to add custom functionality to the generated parser)
* Update other files in `webapp_src` to remove references to DrawL and define new functionality for your own language
* Change `src/main/antlr4/com/<authorname>/<projectname>/<projectname.g4>` with your new grammar (cannot have a blank grammar on build)
