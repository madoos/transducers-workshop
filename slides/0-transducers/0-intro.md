## Transducers

--

Los transducers son funciones de transformación de datos compositivas y eficientes que no crean colecciones intermedias.

--

En algunos idiomas, esta optimización se conoce como loop fusion o stream fusion.
Sin embargo, los transductores ofrecen mucho más que eso (a un costo de ser puramente optimización en tiempo de ejecución).

--

```js
;[1, 2, 3, 4]
  .map(plus)
  .map(double)
  .filter(isPair)
```

![Alt Text](https://cdn-images-1.medium.com/max/2000/1*mJicJiOZT4M9jwv6kMkwRg.gif)

--

```js
const xf = compose(
  map(plus),
  map(double),
  filter(isPair)
)
const concat = (acc, val) => acc.concat(val)

transduce(xf, concat, [], [1, 2, 3, 4])
```

![Alt Text](https://cdn-images-1.medium.com/max/1600/1*rEOyWd0MTPv_NZvzDaFbkA.gif)

--

Los Transducers son:

- Transformaciones logarítmicas componibles.
- Son independientes sus fuentes de entrada y salida.
- Especifican solo la esencia de la transformación en términos de un elemento individual.

--

```javascript
const xf = compose(
  map(plus),
  map(double),
  filter(isPair)
)

const concat = (acc, val) => acc.concat(val)

const input = [1, 2, 3, 4]
const output = []

transduce(xf, concat, output, input)
```

--

los Transducers están desacoplados de las fuentes de entrada o salida, se pueden usar en muchos procesos diferentes: colecciones, flujos, canales, observables, etc. Los transductores se componen directamente, sin conocimiento de la entrada o creación de agregados intermedios.

--

## Benchmark

![alt text](https://benediktmeurer.de/images/2016/measure-20161216.jpg)

--

## Enfoques

- Loop
- Nativo
- ramda
- transducers

```js
program([1, 2, 3, 4]) // 124
```

--

## Loop

```js
const program = xs => {
  let result = 0

  for (let i = 0; i <= xs.length; i++) {
    let n = xs[i] * 2
    n = n * n
    if (n % 2 === 0) {
      result = n + 1 + result
    }
  }

  return result
}

program([1, 2, 3, 4]) // 124
```

--

## Nativo

```js
const program = xs =>
  xs
    .map(n => n * 2)
    .map(n => n * n)
    .filter(n => n % 2 === 0)
    .map(n => n + 1)
    .reduce((a, b) => a + b, 0)

program([1, 2, 3, 4]) // 124
```

--

## Ramda

```js
const { pipe, map, filter, reduce } = require("ramda")

const program = pipe(
  map(n => n * 2),
  map(n => n * n),
  filter(n => n % 2 === 0),
  map(n => n + 1),
  reduce((a, b) => a + b, 0)
)

program([1, 2, 3, 4]) // 124
```

--

## Transducers

```js
const { map, filter, comp, transduce } = require("transducers-js")

const xf = comp(
  map(n => n * 2),
  map(n => n * n),
  filter(n => n % 2 === 0),
  map(n => n + 1)
)

const sum = (x, y) => x + y
const program = xs => transduce(xf, sum, 0, xs)
program([1, 2, 3, 4]) // 124
```

--

## Live coding

Implementar transducers para entender transducers

![alt text](https://cdn-images-1.medium.com/fit/t/1600/672/0*n-2bW82Z6m6U2bij.jpeg)
