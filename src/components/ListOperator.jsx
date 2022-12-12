import DetailCard from "./DetailCard"
import { Link } from "react-router-dom";


const ListOperator = ({ searchResult}) => {
    const results = searchResult.map(data => (<Link to={{ pathname: `${data._id}` }}> <DetailCard key={data._id} data={data} /> </Link>))

    const content = results?.length ? results : <div><p>No Matching Data</p></div>
  return (
    <div class="my-10 flex flex-row flex-wrap justify-center items-center overflow-hidden grid-lines sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-auto gap-5">{content}</div>
  )
}

export default ListOperator