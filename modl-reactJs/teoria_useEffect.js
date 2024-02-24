// El useEffect:
 
// Tiene que ver con el cliclo de vida desde que se ejecuta hasta que se pinta y actualiza "" un estado, voy a dar ejemplos de react con componentes con clases. "las funciones que se usaban antes"
 
// Se ejecuta antes de renderizar, antes teníamos la función "componentDidMount", ahora nos ejecuta el código de useEffect.
 
// Tenemos una función para cuando desmontamos el componente!! --> antes era "componentWillUnmount" cuando se cierra el component ejecuta lo que tengamos dentro.
 
// Y cuando se actualiza un estado, podemos especificar en un useEffect que se ejecute  el codigo, si tenemos este estando en el array de nuestro useEffect que controla como antes era "componentDidUpdate" tiene refrencia a useEffect
 
// Esto me he aprendido entre ayer y hoy para explicar en una entrevista.

useEffect(() => {
    effect // "componentDidMount" effect es el codigo al cargar y al actualiar el valor de input.
    return () => {
        cleanup // "componentWillUnmount" cleanup es el codigo que se ejecuta cuando se desmonta el componente "cuando cerrarmos la ventana del chrome ;), o en return de un componente quitamos un componente interno"
    };
}, [num] /* componentDidUpdate - se ejecutara cuando se cambie el valor de input, los cambiamos en este caso los hariamos con un setNum(2) usando parte de la funcionalidad del useState!*/ );