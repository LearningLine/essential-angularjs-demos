@IF EXIST node_modules GOTO start-bower
	call npm install

:start-bower
@IF EXIST bower_components GOTO start-server
	call npm install bower -g
	call bower install

:start-server
call npm run gulp
npm start
