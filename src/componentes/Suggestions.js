import Sugestao from './Suggestion';

export default function Sugestoes() {
  const usuarios = [
    'bad.vibes.memes',
    'chibirdart',
    'razoesparaacreditar',
    'adorable_animals',
    'smallcutecats'
  ]
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {usuarios.map((usuario) => (
        <Sugestao
          urlUser={`assets/img/${usuario}.svg`}
          user={usuario}
        />
      ))}
    </div>
  )
}