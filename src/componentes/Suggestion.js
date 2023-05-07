export default function Sugestao(props) {

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.urlUser} alt={props.user} />
                <div class="texto">
                    <div class="nome">{props.user}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}