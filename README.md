# POC of Multi Error Handling via express router

## Installation
> npm i

## Running

> npm start

## Test API

```js
curl http://localhost:8989/ping # { "ok": true }

curl http://localhost:8989/v1/users # [{"name":"foo"},{"name":"bar"}]

curl http://localhost:8989/v1/users/2 # {"error":"something wrong v1-users: User inactive"}

curl http://localhost:8989/v1/users/3 # {"error":"User not found"}

```

