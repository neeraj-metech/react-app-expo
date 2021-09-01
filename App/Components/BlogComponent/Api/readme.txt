run jsonserver in local machin
1. you have to create a folder jsonserver outside the project folder.
2. run command: npm init
3. press enter for all question.
4. run command: npm i json-server ngrok
5. created db.json file on root
6. add this under package.json file
     "scripts": {
        "db": "json-server -w db.json",
        "tunnel":"ngrok http 3000"
    }
7. run command: npm run db

8. then go to you project director and run command
npm statr