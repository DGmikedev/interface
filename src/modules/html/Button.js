import PropTypes from "prop-types"

export function Buttonm({texto, song}){

    if(!texto) console.error("texto es de tipo string, no hay valor por defecto")
    if(!song) console.error("user es de tipo string, no hay valor por defecto")
    return <button>
        {texto} - {song}
    </button>
}

Buttonm.prototype = {
    texto: PropTypes.string
}

