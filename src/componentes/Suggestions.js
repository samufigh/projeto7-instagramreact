import Sugestao from './Suggestion';

export default function Sugestoes() {
  const usuarios = [
    'itachi',
    'neji',
    'gaara',
    'shikamaru',
    'kakashi'
  ]
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {usuarios.map((usuario) => (
        <Sugestao
          urlUser={`assets/perfis/${usuario}.jpg`}
          user={usuario}
        />
      ))}
    </div>
  )
}