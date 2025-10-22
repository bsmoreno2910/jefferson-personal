# Guia de Deploy no EasyPanel

Este guia explica como fazer o deploy do site Jefferson Personal Online no EasyPanel.

## Pré-requisitos

- Conta no EasyPanel
- Repositório Git (GitHub, GitLab, etc.)
- Docker instalado (opcional, para testes locais)

## Passo 1: Preparar o Repositório

1. Faça commit de todos os arquivos do projeto
2. Faça push para o seu repositório Git

```bash
git add .
git commit -m "Site Jefferson Personal Online pronto para deploy"
git push origin main
```

## Passo 2: Configurar no EasyPanel

1. **Acesse o EasyPanel** e faça login
2. **Crie um novo projeto**:
   - Clique em "New Project"
   - Escolha "Deploy from Git"
3. **Conecte o repositório**:
   - Selecione o provedor Git (GitHub, GitLab, etc.)
   - Autorize o acesso
   - Selecione o repositório do projeto
4. **Configure o build**:
   - **Build Method**: Docker
   - **Dockerfile Path**: `Dockerfile`
   - **Port**: `80`
5. **Configure o domínio**:
   - Use o domínio fornecido pelo EasyPanel ou
   - Configure um domínio personalizado (jeffersonpersonal.online)

## Passo 3: Deploy

1. Clique em "Deploy"
2. Aguarde o build completar (pode levar alguns minutos)
3. Acesse o site através do URL fornecido

## Passo 4: Configurar Domínio Personalizado (Opcional)

Se você quiser usar o domínio `jeffersonpersonal.online`:

1. No EasyPanel, vá em "Settings" > "Domains"
2. Adicione o domínio personalizado
3. Configure os registros DNS no seu provedor:
   - Tipo: A
   - Nome: @
   - Valor: [IP fornecido pelo EasyPanel]
   - Tipo: CNAME
   - Nome: www
   - Valor: [domínio fornecido pelo EasyPanel]

## Variáveis de Ambiente (Opcional)

Se precisar configurar variáveis de ambiente:

1. No EasyPanel, vá em "Settings" > "Environment Variables"
2. Adicione as variáveis necessárias

## Teste Local com Docker

Para testar o build localmente antes do deploy:

```bash
# Build da imagem
docker build -t jefferson-personal .

# Executar o container
docker run -p 8080:80 jefferson-personal

# Acessar em http://localhost:8080
```

## Atualizações Futuras

Para fazer atualizações no site:

1. Faça as alterações no código
2. Commit e push para o repositório
3. O EasyPanel fará o deploy automático (se configurado)
   - Ou clique em "Redeploy" manualmente

## Troubleshooting

### Build falha
- Verifique os logs no EasyPanel
- Certifique-se de que todos os arquivos necessários estão no repositório
- Verifique se o Dockerfile está correto

### Site não carrega
- Verifique se a porta 80 está exposta
- Verifique os logs do nginx
- Teste o health check: `http://seu-dominio/health`

### Imagens não aparecem
- Verifique se as imagens estão na pasta `client/public`
- Verifique os caminhos das imagens nos componentes
- Limpe o cache do navegador

## Recursos

- [Documentação EasyPanel](https://easypanel.io/docs)
- [Documentação Docker](https://docs.docker.com/)
- [Documentação Nginx](https://nginx.org/en/docs/)

## Suporte

Para problemas com o site, entre em contato:
- Email: jefersonascimento.edfisica@gmail.com
- Instagram: @jefferson_personal

