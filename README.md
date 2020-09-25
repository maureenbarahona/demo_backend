# demo_backend

Build a Restful MVC API  using Node.js, Express and MongoDB.

## Steps to Setup

1. Install dependencies

```bash
npm install
```


```bash
node server.js
```

You can browse the apis at <http://localhost:3000>

3. Endpoints avilables

1. /cotizacion/dolar
2. /cotizacion/euro
3. /cotizacion/real

### Endpoins CRUD with MongoDB define id(mongo)

* http://localhost:3000/monedas  -- post, get, getOne(id), update, delete (mongo) -- la base esta en la nube

```bash
{
  "moneda": "US",
  "valor": "45.0"
}
```
#### http://localhost:3000/cotizacion - get show all the currency 
