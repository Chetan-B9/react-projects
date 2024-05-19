
function ServiceCard({title, subtitle, icon, bg}) {
  return (
    <div className={`py-7 flex flex-col gap-4 items-center`} style={{background: bg}}>
        <div className="bg-secondary p-2 rounded-full text-2xl">
            {icon}
        </div>

        <h4 className="text-lg font-semibold">{title}</h4>
        <p>{subtitle}</p>
    </div>
  )
}

export default ServiceCard