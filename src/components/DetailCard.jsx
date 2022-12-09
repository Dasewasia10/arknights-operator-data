const DetailCard = ({ data }) => {
  return (
    <div class="box text-center items-center flex flex-row">
        <img 
            class="py-2 h-36 w-auto rounded-2xl"
            src={data.art.Base}
            alt={data.name} />
        
        <p class="flex pl-3 pr-3 text-center">{data.name}</p>
    </div>
  )
}

export default DetailCard