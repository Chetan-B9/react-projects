import emptyImage from '../../assets/Images/Empty-amico.png'

function EmptyCart() {
  return (
    <section className="px-14 pb-10 md:px-36 lg:px-64 flex flex-col items-center justify-center text-main-text">
        <div className='opacity-80'>
            <img src={emptyImage} alt="Notfound image"  width={280} height={280}/>
        </div>
        <div className="text-center">
            <h3 className="text-2xl text-[#757575] font-semibold mt-4">Cart is empty!</h3>
        </div>
    </section>
  )
}

export default EmptyCart