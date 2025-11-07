# BACKEND_2

next video

1.

express generator
its generate all the files in only one commands means its make a folder structure and also give the basic code ok for the time saving
do not make a folder its also give the folder

steps to use express generator

1.  npm i express-generator -g

2.  to create a new app anywere :
    open cmd move to desktop :
    for creating new app :
           express appname --view=ejs

now use two commands
cd appname
npm i
open it on code editor

------------------------------------------------------

 sessions

create
req.session.anyname

read
req.session.name

delete
req.session.destory


_____________________________________________

cookies

cookie setup
res.cookies("name",value);

cookies reading 
req.cookies.name;

cookies delete
res.ClearCookies("name);