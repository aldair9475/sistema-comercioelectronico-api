import app from "./app";

const PORT: number = 3000; 
app.listen(PORT, () => { console.log(`La app está escuchando en el puerto ${PORT}`); });