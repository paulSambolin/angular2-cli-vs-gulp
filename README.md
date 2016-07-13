Test application using angular2, and comparing angular-cli to gulp
Files from separate branches may become interweaved

git clone https://github.com/paulSambolin/angular2-cli-vs-gulp.git

Branch angularCli
 - npm install -g angular-cli
 - cd angularApp
 - npm install
 - ng serve
 - Possibility of npm warning about @angular/*-rc.4
 
Branch angularGulp
 - git fetch origin angularGulp:angularGulp
 - git checkout angularGulp
 - npm install
 - npm run build
 - npm run start
 
Branch angularNPM (typings issues on windows)
 - git fetch origin angualrNPM:angularNPM
 - get checkout angularNPM
 - npm install
 - npm run build
 - npm run start

Branch angularLib
 - git fetch origin angularLib:angularLib
 - git checkout angularLib
 - npm install
 - npm start
