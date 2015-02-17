@IF EXIST node_modules GOTO start-server
	call npm install

:start-server
explorer http://localhost:8080
npm start
