import History from './history'

// funcion que facilita la rediccionar a otras paginas se pasa la nueva ruta y es opcional el state que son datos que puedes compartir con la ruta seleccionada
export const RedirectPage = (route, state) => {
    History.replace(route, {...state})
}
