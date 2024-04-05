# Projeto Expo SQLite Next

Este é um projeto de exemplo que demonstra como usar o `expo-sqlite-next` para interagir com um banco de dados SQLite em um aplicativo Expo. Este projeto inclui uma classe `ClienteRepository` que demonstra operações básicas de CRUD (Create, Read, Update, Delete) em uma tabela de clientes.

## ⚙️ Instalação

1. Certifique-se de ter o ambiente Expo configurado em seu sistema. Você pode seguir as instruções [aqui](https://docs.expo.dev/get-started/installation/) para configurar o ambiente Expo, se ainda não o fez.

2. Clone este repositório:

   ```bash
   git clone https://github.com/gabrielsouzas/react-native-expo-next.git
   ```

3. Navegue até o diretório do projeto:

   ```bash
   cd react-native-expo-next
   ```

4. Instale as dependências do projeto:

   ```bash
   npm install
   ```

## ▶️ Uso

Importe o ClienteRepository e use-o em seu código para interagir com o banco de dados SQLite.

```javascript
import ClienteRepository from './ClienteRepository';

// Exemplo de criação de um cliente
const novoCliente = {
  nome: 'John Doe',
  telefone: '123456789',
  endereco: '123 Main Street',
};

ClienteRepository.create(novoCliente)
  .then((id) => {
    console.log('Novo cliente criado com ID:', id);
  })
  .catch((error) => {
    console.error('Erro ao criar cliente:', error);
  });

// Exemplo de busca de todos os clientes
ClienteRepository.all()
  .then((clientes) => {
    console.log('Lista de clientes:', clientes);
  })
  .catch((error) => {
    console.error('Erro ao buscar clientes:', error);
  });

// Outras operações CRUD também estão disponíveis, como atualizar, buscar por ID e remover.
```

## 📚 Documentação

- [Documentação do Expo SQLite Next](https://docs.expo.dev/versions/latest/sdk/sqlite-next/)

- Para mais detalhes sobre o uso do ClienteRepository, consulte o código fonte em ClienteRepository.ts.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar uma pull request.

## 📄 Licença

Este projeto é licenciado sob a [MIT License](https://opensource.org/license/mit).
