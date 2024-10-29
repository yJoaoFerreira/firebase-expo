# Usando o Expo Localmente

Este guia tem o objetivo de te ensinar a usar o Expo no seu computador localmente, sem a necessidade de plataformas online como o **Snack.Expo**. Para isso, você precisará do **Node.js** e de um editor de código.

Decidi fazer este pequeno guia para que você não passe pela mesma dor de cabeça e frustração que passei ao iniciar meus projetos mobile usando react-native no expo.

## Requisitos

- **Node.js**: Versão 20 ou superior
- **Editor de código**: Qualquer editor de sua preferência (recomendo o [VSCode](https://code.visualstudio.com/))


## Etapas para Configuração

### Etapa 1: " Editor de Código "

Abra seu editor de código no diretório que deseja utilizar para o projeto. Não é necessário um editor específico para que este guia funcione, estarei fazendo no VSCode apenas por uma questão de conforto pessoal.

![Passo 1](criar-projeto/passo1.png)

### Etapa 2: " Iniciando o Projeto "

Execute o seguinte comando no terminal:

```bash
npx create-expo-app . --template
```

Isso deve retornar os templates do expo.

![Passo 2](criar-projeto/passo2.png)

### Etapa 3: " Escolhendo o Template "

No terminal, selecione:

```bash
> Blank - a minimal app as clean as an empty canvas
```

![Passo 3](criar-projeto/passo3.png)

### Etapa 4: " Esperando a Instalação "

Aqui não tem segredo, basta esperar o projeto iniciar.

![Passo 4](criar-projeto/passo4.png)

### Etapa 5: " Projeto Criado "

Você verá que no seu diretório alguns arquivos serão criados, isso significará que tudo deu certo.

![Passo 5](criar-projeto/passo5.png)


### Etapa 6: " Abrindo seu Projeto (ou tentando) "

Para iniciar o seu projeto, execute:

```bash
npx expo start --web
```

Um erro ocorrerá, mas relaxe! Isso é normal, falta uma dependência ainda.

![Passo 6](criar-projeto/passo6.png)

### Etapa 7: " Dependência Metro-Runtime "

Você irá perceber que o terminal irá exibir um comando junto do erro, copie-o.

```bash
npx expo install react-native-web react-dom @expo/metro-runtime
```

Execute o comando dado no terminal.

![Passo 7](criar-projeto/passo7.png)


### Etapa 8: " Terminando a Instalação "

Agora seu projeto já está pronto para ser iniciado! para isso, use o comando abaixo:

```bash
npx expo start --web
```

![Passo 8](criar-projeto/passo8.png)

### Etapa 9: " Iniciando o App "

Após usar o comando no terminal, seu projeto começará a carregar.

![Passo 9](criar-projeto/passo9.png)


### Etapa 10: " Quase Pronto "

Você verá um QRCode na tela, ele serve para caso você queira ver pelo celular, mas é necessário estar na **mesma rede** que o seu celular. Além disso, é necessário baixar o App **Expo Go** na playstore para ler o QRCode.

![Passo 10](criar-projeto/passo10.png)

### Etapa 11: " Sucesso "

Caso você veja uma mensagem verde igual essa sublinhada, significa que seu App foi inicializado sem erros e abriu no seu navegador para visualização.

![Passo 11](criar-projeto/passo11.png)


### Etapa 12: " Navegador Aberto "

Você pode visualizar que seu aplicativo está aberto e sendo hosteado localmente no seu navegador, se você alterar alguma coisa no projeto e recarregar a guia, o app irá atualizar.

![Passo 12](criar-projeto/passo12.png)

<!--

### Passo 13: Debugging

Utilize as ferramentas de desenvolvimento do seu navegador para inspecionar e debugar seu aplicativo.

![Passo 13](criar-projeto/passo13.png)

### Passo 14: Parando o Servidor

Para parar o servidor de desenvolvimento, pressione `Ctrl + C` no terminal.

![Passo 14](criar-projeto/passo14.png)

### Passo 15: Publicando o Aplicativo

Quando estiver pronto para publicar, use:

```bash
expo publish
```

![Passo 15](criar-projeto/passo15.png)

## Conclusão

Parabéns! Agora você configurou o Expo no seu computador e pode começar a desenvolver seus aplicativos móveis localmente. Se você tiver alguma dúvida ou encontrar problemas, sinta-se à vontade para abrir uma issue neste repositório ou entrar em contato comigo em alguma rede social, ficarei feliz em ajudar ^^ -->