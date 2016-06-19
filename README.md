# Tabs Template

An application using Apache Cordova, Ionic Framework, and Typescript. Currently supporting iOS and Android.

## Requirements
 1. [node.js](https://nodejs.org/)
 2. Cordova and Ionic - ```[sudo] npm install -g cordova ionic```
   - Or install the ionic beta `[sudo] npm install -g ionic@beta`
 3. TypeScript - ```[sudo] npm install -g typescript```
 4. Gulp - ```[sudo] npm install -g gulp```
 5. Bower - ```[sudo] npm install -g bower```

### Set up
1. Navigate via the terminal (or cmd) to the root directory
2. ```[sudo] npm install``` (Installs dependencies)
3. ```bower install``` (Installs library components)
4. ```ionic state reset``` (Removes all plugins, if any, and re-adds them.  Grabs list from package.json)
5. ```gulp tsc``` (Compiles typescript)
6. ```ionic serve [--lab]``` (Serves app in a node instance)

#### Architecture
 - The architecture of this template is a modified MVC framework. All application code is contained in the /www/app folder.
 - Models are placed in a models folder (e.g. /www/app/models/). 
 - Views and Controllers are placed in their own folder together (e.g. /www/app/chat/). 
 - Services are placed in the common folder (e.g. /www/app/common/).  
 - Main app views, models, and controller are just placed in the /www/app/ folder (e.g. /www/app/app-controller.ts).

#### Extras
 - When adding a plugin, make sure to use ```ionic plugin add <plugin>``` rather than ```cordova plugin add <plugin>``` in order to ensure that the plugin is added to the package.json.
 - To add a plugin without saving it to the package.json, add the --nosave argument to the add plugin command (e.g. ```ionic plugin add <plugin> --nosave ```)
 - [Install typings](https://github.com/typings/typings)
   - ```npm install typings -g```
   - Using typings
		- ```cd www/app```
		- ```typings init``` (this creates the typings folder and the typings.json file
	- Installing the defintion files
		- ```typings install dt~ionic -DG``` (Installs the ionic definition files as a global dev dependency. Read more on the [typings github page](https://github.com/typings/typings).)

## Updating npm packages
1.	```sudo npm install –g npm-check-updates```
	- installs npm-check-updates package
2.	```sudo rm –rf node_modules/```
	- removes the node_modules folder so we can update it.
3.	```npm-check-updates –u```
	- updates your package.json with the latest npm packages
4.	```sudo npm install```
	- installs latest node packages from your package.json to the newly created node_modules folder.

## Updating bower packages
1.	```sudo npm install –g npm-check-updates```
	- installs npm-check-updates package
2.	```sudo rm –rf www/lib/```
	- removes the lib folder so we can update it.
3.	```npm-check-updates -m bower –u```
	- updates your package.json with the latest npm packages
4.	```bower install```
	- installs latest node packages from your package.json to the newly created node_modules folder.