# Nginx Reverse Proxy Example

## Main

https://github.com/jwilder/nginx-proxy

## Steps

1. Create a network for nginx-proxy and other containers

```bash
docker network create -d bridge <network-name>
```

2. Create nginx-proxy container

```bash
docker run -d --name nginx-proxy -p 80:80 \
    -v /var/run/docker.sock:/tmp/docker.sock:ro \
    --network=<network-name> jwilder/nginx-proxy
```

You can add an nginx config file by adding the volume to the above commend

```bash
-v /path/to/my_proxy.conf:/etc/nginx/conf.d/my_proxy.conf:ro
```

3. Docker compose

```bash
docker-compose up --build -d
```

## Testing

**To see if database is connected**

```bash
docker logs -f nginx_proxy_example
```

**To see if reverse proxy is configured**

```bash
curl -H 'Host: example.local' localhost
```

## External tutorials

https://blog.florianlopes.io/host-multiple-websites-on-single-host-docker/
