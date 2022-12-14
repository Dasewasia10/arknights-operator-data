const DetailCard = ({ data }) => {
  return (
    <div className="box text-center items-center flex flex-row">
        <img 
            className="py-2 h-24 lg:h-36 w-auto rounded-2xl"
            src={data.art.Base}
            alt={data.name} />
        
        <p className="flex pl-3 pr-3 text-center">{data.name}</p>
    </div>
  )
}

export default DetailCard