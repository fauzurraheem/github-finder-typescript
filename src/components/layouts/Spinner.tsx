import spinner from './assets/spinner.gif'


function Spinner() {
  return (
    <div>
        <img 
        width={180} 
        src={spinner} alt='Loading' className='text-center mx-auto' />
    </div>
  )
}

export default Spinner