import React from "react";
export default function Usuario() {

  const [username, attUsername] = React.useState("ninja");
  const [perfil, attPerfil] = React.useState(
    "assets/perfis/hinata.jpg"
  );

  function atualizarPerfil(){
    let novoPerfil=prompt('imagem de perfil: ');
    if(!novoPerfil){
      return;
    }
    attPerfil(novoPerfil);
  }

  function atualizarusername() {
    const novoUsername = prompt("username: ");
    if (!novoUsername) {

      return;
    }
    attUsername(novoUsername);
  }

  return (
    <div class="usuario">
      <img 
      src={perfil} 
      alt="imagem de perfil" 
      onClick={atualizarPerfil}
      />
      <div class="texto">
        <span>
          <strong>{username}</strong>
          <ion-icon
            name="pencil"
            onClick={atualizarusername}
          ></ion-icon>
        </span>
      </div>
    </div>
  )
}
