import React from "react";
export default function Post(props) {

  const [coracao, setCoracao] = React.useState(false);
  const coracaoAtual = coracao ? "heart" : "heart-outline";
  const [corCoracao, setcorCoracao] = React.useState(false);
  const corCoracaoAtual = corCoracao ? "heart-red" : "heart-black";

  let [likes, setLikes] = React.useState(
    Math.floor(Math.random() * 100000) + 100000
  );

  const [salvar, clickSalvar] = React.useState(false);
  const salvarAtual = salvar ? "bookmark" : "bookmark-outline";


  function likePost() {
    setCoracao(!coracao);
    setcorCoracao(!corCoracao);
    if (!coracao) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
  }

  function likeByImg() {
    if (coracaoAtual === "heart-outline") {
      likePost();
    }
  }


  return (
    <div data-test="post" class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.urlPerfil} alt={props.usuario} />
          {props.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img
          data-test="post-image"
          onClick={likeByImg}
          src={props.urlPost}
          alt={props.altPost} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              data-test="like-post"
              onClick={likePost}
              name={coracaoAtual}
              class={corCoracaoAtual}
            >
            </ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              data-test="save-post"
              onClick={() => clickSalvar(!salvar)}
              name={salvarAtual}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/perfis/sakura.jpg" alt="sakura" />
          <div class="texto">
            Curtido por <strong>nathanandrade</strong> e{" "}
            <strong>
              outras{" "}
              <span 
                data-test="likes-number">
                {
                likes.toLocaleString("pt-BR", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                })
                } {" "}
              </span>
                 pessoas
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}