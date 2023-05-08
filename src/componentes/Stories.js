import Story from './Story';

export default function Stories(){
  const usuarios = [
    'sasuke',
    'hinata',
    'omoi',
    'konan',
    'kiba',
    'tsunade',
    'temari',
    'naruto'
  ]

    return (
        <div class="stories">
          {usuarios.map((usuario) => (
            <Story 
            link={`assets/perfis/${usuario}.jpg`}
            alt={usuario}
            nome={usuario}/>
          ))}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}