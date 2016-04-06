@echo off
start /d "C:\Program Files\Internet Explorer" IEXPLORE.EXE http://localhost:9876/
node "../node_modules/karma/bin/karma" start "./karmaConfig.js"

