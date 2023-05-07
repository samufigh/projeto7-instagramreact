import Story from './Story';

export default function Stories(){
  const usuarios = [
    '9gag',
    'meowed',
    'barked',
    'nathanwpylestrangeplanet',
    'wawawicomics',
    'respondeai',
    'filomoderna',
    'memeriagourmet'
  ]

    return (
        <div class="stories">
          {usuarios.map((usuario) => (
            <Story 
            link={`assets/img/${usuario}.svg`}
            alt={usuario}
            nome={usuario}/>
          ))}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}