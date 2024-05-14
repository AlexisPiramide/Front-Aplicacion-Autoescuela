FROM node:latest

RUN apt update && apt install -y apache2  

WORKDIR /app
  
RUN git clone https://github.com/AlexisPiramide/Front-Aplicacion-Autoescuela .

RUN npm install

RUN npm run build

RUN cp -r dist/* /var/www/html/

CMD ["apachectl", "-D", "FOREGROUND"]
