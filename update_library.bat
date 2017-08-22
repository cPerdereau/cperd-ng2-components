rmdir /Q /S dist
cd src
call npm version patch
cd..
git add *
git commit -m "no message"
git config credential.helper store
git push https://github.com/cPerdereau/cperd-ng2-components.git
call npm version patch
call npm run build
call npm publish dist