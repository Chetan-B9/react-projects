import SearchImage from "../../assets/Images/search.png"
function NotFound() {
  return (
    <section className="px-14 pb-10 md:px-36 lg:px-64 flex flex-col items-center justify-center text-main-text">
        <div>
            <img src={SearchImage} alt="Notfound image"  width={320} height={320}/>
        </div>
        <div className="text-center">
            <h2 className="text-7xl font-semibold mt-5">OOPS!</h2>
            <h3 className="text-xl font-semibold mt-4">Product Not Found</h3>
        </div>
    </section>
  )
}

export default NotFound