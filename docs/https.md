# SSL certificate
https://blog.cloudboost.io/everything-about-creating-an-https-server-using-node-js-2fc5c48a8d4e
https://www.digitalocean.com/community/tutorials/openssl-essentials-working-with-ssl-certificates-private-keys-and-csrs

## Generate a Private Key and a CSR
openssl req -new -newkey rsa:2048 -nodes -out mydomain.csr -keyout private.key

Generating a 2048 bit RSA private key
-----
Country Name (2 letter code) []:ZH
State or Province Name (full name) []:Shanghai
Locality Name (eg, city) []:Shanghai
Organization Name (eg, company) []:Autodesk
Organizational Unit Name (eg, section) []:AutoCAD
Common Name (eg, fully qualified host name) []:acad-web
Email Address []:bill.wu@autodesk.com
A challenge password []:autodesk


### 1. Generate a Private Key and a CSR

```
openssl req \
       -newkey rsa:2048 -nodes -keyout domain.key \
       -out domain.csr
```

### 2. Generate a Self-Signed Certificate from an Existing Private Key and CSR
Use this method if you already have a private key and CSR, and you want to generate a self-signed certificate with them.

This command creates a self-signed certificate (domain.crt) from an existing private key (domain.key) and (domain.csr):

```
openssl x509 \
       -signkey domain.key \
       -in domain.csr \
       -req -days 365 -out domain.crt
```


### 3. Verify a Private Key

```
openssl rsa -check -in domain.key
```

### 4. Verify a Private Key Matches a Certificate and CSR

```
openssl rsa -noout -modulus -in domain.key | openssl md5
openssl x509 -noout -modulus -in domain.crt | openssl md5
openssl req -noout -modulus -in domain.csr | openssl md5
```