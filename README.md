# tw-follow-card

Una tarjeta de seguimiento de Twitter (Twitter Follow Card) como componente de React. 
Este proyecto fue creado como ejercicio práctico para aprender sobre componentes reutilizables, props y manejo de estado en React.

## Características

- Muestra el avatar, nombre y usuario de Twitter.
- Permite seguir o dejar de seguir a un usuario simulando la funcionalidad de Twitter.
- Interfaz visual atractiva inspirada en las tarjetas de usuario de Twitter.
- Personalizable mediante props.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/NoeliaPodmoguilny/tw-follow-card.git
   ```
2. Ingresa al directorio:
   ```bash
   cd tw-follow-card
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

Puedes importar y utilizar el componente `TwitterFollowCard` en tu aplicación React:

```jsx
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        userName="midudev"
        name="Miguel Ángel Durán"
        initialIsFollowing={false}
      />
    </section>
  )
}
```

### Props

- `userName` (string): Nombre de usuario de Twitter (sin @).
- `name` (string): Nombre completo del usuario.
- `initialIsFollowing` (boolean): Estado inicial (siguiendo/no siguiendo).

## Scripts

- `npm start`: Corre la app en modo desarrollo.
- `npm run build`: Genera una build de producción.
- `npm run lint`: Ejecuta linter para mantener la calidad del código.

## Estructura del Proyecto

```
tw-follow-card/
├── src/
│   ├── TwitterFollowCard.jsx
│   └── App.jsx
├── public/
│   └── index.html
├── package.json
└── README.md
```

## Licencia

MIT
