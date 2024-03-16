import Background from '../assets/images/Library.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-purple-400 bg-opacity-50 text-black rounded text-3xl'>Welcome To your Library</h3>
        </div>
    </div>
  )
}

export default Home