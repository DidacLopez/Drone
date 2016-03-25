@echo off
karma start "./karmaConfig.js"
start /d "C:\Program Files\Internet Explorer" IEXPLORE.EXE http://localhost:9876/
