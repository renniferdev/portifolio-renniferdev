DOCKER LOCAL
Terminal 1 — Backend completo
cd C:\SISTEMAS\app-Allcanci\backend-api
docker compose up -d
docker start mapa-backend-local

Para conferir:

docker compose ps 
docker ps --filter "name=mapa-backend-local" 
curl.exe http://localhost:3002/health

ACESSAR TUNEL PARA FUNC FORA DO FUNIL
ssh -i "$HOME\.ssh\id_ed25519" `
  -N `
  -o ServerAliveInterval=30 `
  -o ServerAliveCountMax=3 `
  -o ExitOnForwardFailure=yes `
  -L 5434:database-1.c1ewe2cw4pav.us-east-2.rds.amazonaws.com:5432 `
  ubuntu@18.189.19.239  



Terminal 2 — Frontend 
cd cd C:\SISTEMAS\app-Allcanci\front-end-appallcanci
npm run web
  
Quando alterar código  
   
Se alterar apenas o backend principal:

cd C:\SISTEMAS\app-Allcanci\backend-api 
docker compose up -d --build    

Se alterar o mapa-backend:

cd C:\SISTEMAS\app-Allcanci\backend-api\mapa-backend
docker rm -f mapa-backend-local
docker build -t mapa-backend-local:dev -f .\Dockerfile .
docker run -d `
  --name mapa-backend-local `
  --restart unless-stopped `
  -p 3002:3002 `
  --env-file .\.env-container-temp `
  --add-host=host.docker.internal:host-gateway `
  -e BACKEND_API_BASE_URL=http://host.docker.internal:4000 `
  mapa-backend-local:dev

REINICIAR MAPA-BACKEND

Recriar após alterar código do mapa-backend
cd C:\SISTEMAS\app-Allcanci\backend-api\mapa-backend 

docker rm -f mapa-backend-local 

docker build -t mapa-backend-local:dev -f .\Dockerfile . 

docker run -d ` 
  --name mapa-backend-local ` 
  --restart unless-stopped `
  -p 3002:3002 `
  --env-file "C:\SISTEMAS\app-Allcanci\backend-api\mapa-backend\.env" `
  --add-host=host.docker.internal:host-gateway `
  -e BACKEND_API_BASE_URL=http://host.docker.internal:4000 `
  mapa-backend-local:dev

Depois valide:

docker logs --tail 50 mapa-backend-local
curl.exe http://localhost:3002/health

TUNEL UBUNTO
ssh -i "$HOME\.ssh\id_ed25519" -N `
  -o ServerAliveInterval=30 `
  -o ServerAliveCountMax=3 `
  -o ExitOnForwardFailure=yes `
  -L 5434:database-1.c1ewe2cw4pav.us-east-2.rds.amazonaws.com:5432 `
  ubuntu@18.189.19.239



--------
#MOBILE
gerar apk - entrar na pasta android em front, comando: ./gradlew assembleRelease

iniciar o projeto 
web
npx expo start --web

Android via USB/emulador:

adb devices

npx expo run:android

GITHUB - GITHUB

Se você quer trazer a main para a sua branch atual:

git fetch origin
git merge origin/main

no terminal: 

Pressione Esc
Digite:
:wq
Pressione Enter
