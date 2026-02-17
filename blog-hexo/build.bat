@echo off
chcp 65001 >nul

echo [正在执行] npm run build
call npm run build

echo [正在执行] scp -r public root@43.143.14.69:/usr/local/nginx/html/blog
call scp -i "%USERPROFILE%\.ssh\id_rsa_blog" -r public root@43.143.14.69:/usr/local/nginx/html/blog

echo [正在执行] nginx -s reload
call ssh -i "%USERPROFILE%\.ssh\id_rsa_blog" root@43.143.14.69 "/usr/local/nginx/sbin/nginx -s reload"