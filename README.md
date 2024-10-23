# produto-api
Uma API Express simples para a disciplina de Desenvolvimento móvel do curso de Bacharelado em Ciência da Computação da Universidade Tecnológica Federal do Paraná

# Setup

```bash
# Clone o repositório
git clone https://github.com/afmireski/OPT120-produto-api.git 
    # ou
git clone git@github.com:afmireski/OPT120-produto-api.git

cd ./OPT120-produto-api

# Prepare dois arquivos .env
cp .env.example .env && cp .env.example .env.docker &&

# Defina as variáveis de ambiente que desejar
```

## Local
```bash
# Defina a versão do node
## Marca o .mise.toml como confiável
mise trust

## Instala a versão do node
mise install

# Instale as dependências
npm install

# Passe a url do seu banco na .env: DATABASE_URL

# Realize a migração do banco
npm run migrate

# Popule o banco
npm run seed

# Execute o projeto
npm run start:dev
```

- Instalar o [mise](https://mise.jdx.dev/getting-started.html)

## Docker
Defina as variáveis de ambiente do container:
```env
#.env.docker

NODE_ENV=development
PORT=3004

# A url deve ser exatamente essa, para apontar para o container
DATABASE_URL=postgres://postgres:123456@produtos-db:5432/postgres?schema=public
```
Defina as variáveis de ambiente locais:
```env
#.env

NODE_ENV=development
PORT=3004

# A porta 5432 local aponta para a porta 5432 do container do banco
DATABASE_URL=postgres://postgres:123456@localhost:5432/postgres?schema=public
```

```bash
# Configure os arquivos de .env

# Suba os containers
docker-compose up -d

## Caso tenha problemas com a pasta .docker na hora do build
sudo rm -r .docker

# Realize a migração do banco
npm run migrate

# Popule o banco
npm run seed

# A API estará acessível via http://localhost:3004
```

- **Mude as portas e hosts como preferir, essa é só a configuração padrão**


