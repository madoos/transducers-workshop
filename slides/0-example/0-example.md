## Transducers

--

los Transducers son funciones de transformación de datos compositivas y eficientes que no crean colecciones intermedias.

--
En algunos idiomas, esta optimización se conoce como loop fusion or stream fusion. . Sin embargo, los transductores ofrecen mucho más que eso (a un costo de ser puramente optimización en tiempo de ejecución).

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
into([], xf((acc, val) => acc.concat(val)), [1, 2, 3, 4])
```

![Alt Text](https://cdn-images-1.medium.com/max/1600/1*rEOyWd0MTPv_NZvzDaFbkA.gif)

--

Especifican solo la esencia de la transformación en términos de un elemento individual.

--

Los Transducers son transformaciones logarítmicas componibles.
Son independientes sus fuentes de entrada y salida.
Especifican solo la esencia de la transformación en términos de un elemento individual.

--

los Transducers están desacoplados de las fuentes de entrada o salida, se pueden usar en muchos procesos diferentes: colecciones, flujos, canales, observables, etc. Los transductores se componen directamente, sin conocimiento de la entrada o creación de agregados intermedios.
