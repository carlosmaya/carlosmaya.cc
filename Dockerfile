FROM nginx
ADD index.html /usr/share/nginx/html
RUN mkdir /usr/share/nginx/css
ADD css /usr/share/nginx/css
COPY nginx/default.conf /etc/nginx/conf.d/
