 yarn add express
 yarn add typescript -D
 yarn tsc --init = criar o arquivo tsconfig.json
 yarn tsc
 yarn add @types/express
 yarn add ts-node-dev 

 yarn dev:server

   "dev:server" : "ts-node-dev --transpileOnly  --ignore-watch node_modules src/server.ts"

   yarn add eslint@6.8.0 -D
   yarn eslint --init

yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.21.2 @typescript-eslint/parser@latest -D

yarn add eslint-import-resolver-typescript -D

yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

 yarn add date-fns


### Linux (Ubuntu/Debian)

No Linux, vamos instalar o Docker utilizando o `apt`, para isso, em seu terminal, execute os comandos abaixo:

```bash
sudo apt update
sudo apt remove docker docker-engine docker.io
sudo apt install docker.io
```

Agora com o Docker instalado, vamos habilitar para que seu serviço seja iniciado automaticamente com o sistema:

```bash
sudo systemctl start docker
sudo systemctl enable docker
```

Para garantir que o Docker foi instalado da forma correta, execute no terminal:

```bash
docker version
```

Você precisará executar todos comandos do Docker utilizando o `sudo`, mas caso queira executa-los sem o `sudo`, utilize [esse guia](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user).


https://hub.docker.com/_/postgres

docker run --name some-postgres -e POSTGRES_PASSWORD_FILE=/run/secrets/postgres-passwd -d postgres
