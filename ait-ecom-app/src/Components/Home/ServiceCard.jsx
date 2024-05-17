

function ServiceCard({title, description, icon, cardColor}) {
  return (
    <div className={`${cardColor} py-7 flex flex-col gap-4 items-center`}>
        <div className="bg-secondary p-2 rounded-full text-2xl">
            {icon}
        </div>

        <h4 className="text-lg font-semibold">{title}</h4>
        <p>{description}</p>
    </div>
  )
}

export default ServiceCard