import Post from './Post';

export default function Posts(){
  const posts = [
    'naruto',
    'sasuke',
    'hinata'
]

    return (
        <div class="posts">
          {posts.map((post) => (
            <Post 
            urlPerfil={`/assets/perfis/${post}.jpg`}
            usuario={post}
            urlPost={`/assets/publicacoes/${post}.jpg`}
            altPost={post}
            />
          ))}
          
        </div>
    )
}