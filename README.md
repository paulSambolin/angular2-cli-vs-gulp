Test application using angular2, and comparing angular-cli to gulp
Files from separate branches may become interweaved

git clone https://github.com/paulSambolin/angular2-cli-vs-gulp.git

Branch angularCli
 - npm install -g angular-cli
 - cd angularApp
 - npm install
 - ng serve
 - Possibility of npm warning about @angular/*-rc.4
 
Branch testGulp
 - git fetch origin testGulp:testGulp
 - git checkout testGulp
 - npm install
 - npm run build
 - npm run start

Branch angularLib
 - git fetch origin angularLib:angularLib
 - git checkout angularLib
 - npm install
 - npm start
