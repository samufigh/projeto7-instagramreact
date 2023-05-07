export default function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.link} alt={props.alt} />
            </div>
            <div class="usuario">
                {props.nome}
            </div>
        </div>
    )
}
