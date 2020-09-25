# demo_backend

Build a Restful CRUD API for a simple quotation application using Node.js, Express and MongoDB.

## Steps to Setup

1. Install dependencies

```bash
npm install
```

2. Run Server

```bash
node server.js
```

You can browse the apis at <http://localhost:3000>

3. Endpoints avilables

### http://localhost:3000/cotizacion  -- post create new currency define id(mongo)

```bash
{
  "moneda": "US",
  "valor": "45.0"
}
```
#### http://localhost:3000/cotizacion - get show all the currency 
