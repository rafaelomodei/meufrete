# meufrete.com

Trabalho final - Tecnologia em Desenvolvimento de Sistemas

**Descrição:**

O sistema meufrete.com, é uma plataforma, onde as companias podem cadastrar seus fretes e motoristas de veículos de cargas podem efetuar esses fretes.

---

## Cargas

### Cadastro de cargas

**Requisitos Funcionais**

- [ ] Deve ser possivel cadastar uma nova carga

**Regra de Negócio**

- [ ] Não deve ser possível cadastrar uma carga com o mesmo nome
- [ ] Não deve ser possível alterar o nome da carga para um nome já cadastrado
- [ ] A compania (empresa) é responsável pelo cadastro de uma nova carga.
- [ ] A carga não precisa estar associada a uma compania

---

## Compania

**Requisitos Funcionais**

**Requisitos Não Funcionais**

**Regra de Negócio**

- [ ] Não deve ser possível cadastrar uma empresa com o mesmo nome
- [ ] Não deve ser possível alterar o nome da empresa para um nome já cadastrado

---

## Rota

**Requisitos Não Funcionais**

- [ ] O sistema deve calcular a distancia em KM, entre a cidade de origem e a cidade de destino


**Regra de Negócio**

- [ ] Deve ser possível calcular a distancia entre duas cidades
- [ ] Deve ter somente uma rota para cada frete

---

## Frete

### Lista de fretes 

**Requisitos Funcionais**

- [ ] Deve ser possivel listar todos os fretes disponíveis
- [ ] Deve ser possivel listar todos os fretes disponíveis pelo nome da carga
- [ ] Deve ser possivel listar todos os fretes disponíveis pelo nome da compania de origem
- [ ] Deve ser possivel listar todos os fretes disponíveis pelo nome da compania de destino
- [ ] Deve ser possivel listar todos os fretes disponíveis pelo nome da cidade de origem
- [ ] Deve ser possivel listar todos os fretes disponíveis pelo nome da carga de destino

**Requisitos Não Funcionais**

- [ ] O motorista precisa estar logado no sistema

**Regra de Negócio**

### Pegar de fretes 

**Requisitos Funcionais**

- [ ] O motorista deve sr capas de pegar frete

**Requisitos Não Funcionais**

- [ ] O sistema não deve deixar o motorista pegar mais de um frete

**Requisitos Não Funcionais**

- [ ] O motorista pode pegar somente um frete

