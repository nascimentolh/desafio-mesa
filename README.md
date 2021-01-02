# DESAFIO MESA

- O usuário autenticado poderá cadastrar um novo local;

- O usuário autenticado poderá visualizar os locais já cadastrados por ele e por outros usuários em formato de mapa e lista;

  - obs.: No modo "Lista", a API deverá retornar os locais em ordem alfabética; no modo "Mapa", deverá retornar os locais ordenados por proximidade.

- O usuário autenticado poderá avaliar um local, com rating e comentário;

- O usuário autenticado poderá visualizar as avaliações de um local;

- O usuário autenticado poderá também visualizar seu perfil, alterar e-mail, alterar senha e fazer logout.

# RUN APP

- docker run --name desafio-mesa -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

- docker run --name redis-mesa -p 6379:6379 -d -t redis:alpine
