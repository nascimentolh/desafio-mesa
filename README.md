# DESAFIO MESA API

### Teconologias

- Node Js
- Express
- Typescript
- TypeORM
- JWT
- Babel
- PostgreSQL
- Redis
- Jest

### Como Utilizar

Acesse https://mesa-app-challenge.herokuapp.com

```sh
POST /users
    Descrição: Rota utilizada para criar um usuário novo, e
    poder utilizar os demais recursos

    Request Body:
    {
        "name": "Jhon Doe", string
        "email": "jhon@doe.com", string
        "passowrd": "your password here" string
    }
```

```sh
POST /auth
    Descrição: Rota autenticar o usuário

    Request Body:
    {
        "email": "Jhon Doe",
        "password": "your password here"
    }
```

```sh
GET /profile
    Descrição: Rota que retorna o perfil do usuário cadastrado.

    Request Header:
        Authorization: Bearer TOKEN_JWT
```

```sh
PUT /profile
    Descrição: Rota para atualizar o perfil do usuário logado.

    Request Header:
        Authorization: Bearer TOKEN_JWT

    Request Body:
        {
            "name": "Seu novo nome para atualizar", string
            "email": "Seu novo email para atualizar", string
            - Caso for atualizar a senha devera fornecer a
            senha antiga. Do contrario os campos abaixo são
            dispensavéis
            "old_password": "Sua senha antiga", string
            "password": "Sua nova senha para atualizar" string
        }
```

```sh
POST /localizations
    Descrição: Rota para inserir uma localização

    Request Header:
        Authorization: Bearer TOKEN_JWT

    Request Body:
        {
            "name": "Nome para sua localizacao", string
            "lng": "Longitude da localizacao", float
            "lat": "Latitude da localizacao", float
        }
    -- Pode ser utilizado localizaçoes fornecidas pelo google maps ao clicar sobre os locais para fazer um banco de dados com mais realidade.
```

```sh
GET /localizations
    Descrição: Rota para consultar as localizações já cadastradas por você
    e por outros usuários.

    Query Params:
        ?type=map (Opcional)
        -Retorna as localizações ordenadas pela distancia que elas se encontram do solicitante da requisição.

    Request Header:
        Authorization: Bearer TOKEN_JWT
```

```sh
POST /ratings
    Descrição: Rota para cadastrar uma avaliação para uma localização

    Request Header:
        Authorization: Bearer TOKEN_JWT

    Request Body:
    {
        "localization_id": "ID da localização a ser avaliada", string
        "rating": 4.6, float (máx 5)
        "comment": "Um comentário sobre sua avaliacão", string (Opcional)
    }
```
