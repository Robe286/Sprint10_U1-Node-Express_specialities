// - Crea rutas para la página principal (/) y diferentes especialidades como marketing (/marketing), developers (/developers), QAs (/QAs) y ventas (/ventas)
// - Implementa el manejo de errores 404 para rutas no definidas.
// - En la ruta "/" puedes crear una navegación que vaya a cada una de las páginas y en cada página puedes repetir esa navegación o solo un volver a home "/".
// Generación de Páginas HTML:
  // - Utiliza literal string para construir páginas HTML directamente en el código..
  // - Crea una página para cada especialidad que muestre el título de la página, el número de personas y los detalles de cada usuario.

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <main>
                <h1>Conjunto de datos de usuarios</h1>
                <a href="/marketing">Marketing</a>
                <a href="/developers">Developers</a>
                <a href="/QAs">QAs</a>
                <a href="/ventas">Ventas</a>
                <a href="/contact">Contact</a>
            </main>
        </body>
    </html>    
    `)
})

app.get('/marketing', (req, res) => {
    res.send(`
    <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <header>
                <a href="/">Home</a>
            </header>
            <main>
                <h1>Título de la página</h1>
                <h2>Número de personas</h2>
                <ul>Detalles</ul>
            </main>
            <footer>
                <a href="/developers">Developers</a>
                <a href="/QAs">QAs</a>
                <a href="/ventas">Ventas</a>
            </footer>
        </body>
    </html>
    `)
})

app.get('/developers', (req, res) => {
    res.send(`
    <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <header>
                <a href="/">Home</a>
            </header>
            <main>
                <h1>Título de la página</h1>
                <h2>Número de personas</h2>
                <ul>Detalles</ul>
            </main>
            <footer>
                <a href="/marketing">Marketing</a>
                <a href="/QAs">QAs</a>
                <a href="/ventas">Ventas</a>
            </footer>
        </body>
    </html>   
    `)
})

app.get('/QAs', (req, res) => {
    res.send(`
    <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <header>
                <a href="/">Home</a>
            </header>
            <main>
                <h1>Título de la página</h1>
                <h2>Número de personas</h2>
                <ul>Detalles</ul>
            </main>
            <footer>
                <a href="/marketing">Marketing</a>
                <a href="/developers">Developers</a>
                <a href="/ventas">Ventas</a>
            </footer>
        </body>
    </html>
    `)
})

app.get('/ventas', (req, res) => {
    res.send(`
    <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <header>
                <a href="/">Home</a>
            </header>
            <main>
                <h1>Título de la página</h1>
                <h2>Número de personas</h2>
                <ul>Detalles</ul>
            </main>
            <footer>
                <a href="/marketing">Marketing</a>
                <a href="/developers">Developers</a>
                <a href="/QAs">QAs</a>
            </footer>
        </body>
    </html>    
    `)
})

app.use((req, res) => {
    res.status(404).send(`<h1>Página no encontrada</h1><a href="/">Home</a>`)
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Node.js esta escuchando en el puerto ${PORT} `)
})



/*
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
*/