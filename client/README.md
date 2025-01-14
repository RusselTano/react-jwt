# Pour eviter les erreur CORS en developpement vue que le front et le back ne tourne pas sur le meme serveur

`tout ce qui est "/api" deviendra "http://localhost:3000"`

```js
server: {
  proxy: {
    "/api": {
      target: "http://localhost:3001",
      changeOrigin: true,
    },
  },
}
```