# Etapa 1: Build
FROM node:18 AS builder

# Definir o diretório de trabalho
WORKDIR /app

# Copiar arquivos necessários
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do projeto
COPY . .

# Build da aplicação
RUN npm run build

# Etapa 2: Servir com um servidor web
FROM nginx:alpine

# Copiar os arquivos buildados para o servidor NGINX
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar o arquivo de configuração do NGINX (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor a porta
EXPOSE 80

# Comando de inicialização
CMD ["nginx", "-g", "daemon off;"]
