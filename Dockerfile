FROM nginx
RUN mkdir /usr/share/nginx/css
ADD index.html css /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/
