# CORS Bypass server

Projeto desenvolvido para quando é necessário fazer uma requisição http para APIs de terceiros através do browser e não se tem controle sobre o servidor destino para adicionar os headers Access-Control-Allow-Origin' e 'Access-Control-Allow-Headers' na response e evitar o erro de allow-strict-origin.

O server fica escutando na porta 3000 e aguarda receber uma request contendo o header 'destination-url', após isso fará o papel de proxy encaminhando a request para o destino informado e responderá para o cliente, incluíndo os headers do CORS para o navegador não barrar a response.

### Pré-Requistos
Node.js > v20.13.1

### Instalação
Clonar o projeto:
```
git clone https://github.com/RMRib/Cors_bypass.git
```

No diretório do projeto, instalar os pacotes node: 
```
npm install express cors axios
```
Executar
```
node cors_bypass_server.js
```

