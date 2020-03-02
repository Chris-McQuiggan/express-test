# express-test

```port: 5001```

GET, POST, PUT, DELETE endpoints:
```/test/test```

Responds with 
```
{
    message: "... test success",
    sentHeaders: req.headers,
    sentRawHeaders: req.rawHeaders,
    sentMethod: req.method,
    sentParams: req.params,
    sentQuery: req.query,
    sentBody: req.body
  }
  ```
