#!/usr/bin/env sh

cd dist/

git init
git config user.name 'zhaohaodang'
git config user.email 'zhaohaodang@gmail.com'
git add -A
git commit -m 'deploy'

git push -f git@github.com:vue2-wechat/vue2-wechat.github.com.git master
echo '======push success[github.com:vue2-wechat/vue2-wechat.github.com]======'

git push -f git@gitee.com:zhaohd/vue2-wechat.git master
echo '======push success[gitee.com:zhaohd/vue2-wechat]======'
cd -