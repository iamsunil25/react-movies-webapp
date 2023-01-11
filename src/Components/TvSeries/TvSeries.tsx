import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getAlltvSeries } from '../../ApiIntegration/TheMoviesDbAPi';
import { MoviesApiResponse } from '../../utility/ApiResponseInterface';
import moment from 'moment';
import Paginate from '../../utility/Paginate';
type TvSeriesItem = {
	id:number
	first_air_date:string
	original_title:string
	original_name:string
	name:string
	title:string
	poster_path:string
  }
export const TVSeries = () => {
	const [page, setpage] = useState(1);
	const navigate = useNavigate();
	const posterImageBaseUrl = "https://image.tmdb.org/t/p/w1280";
	const  {data, isError,isLoading}  = useQuery<MoviesApiResponse, Error>({ queryKey: ['tvSeriesList',page],queryFn:()=> getAlltvSeries(page) })
	console.log("data tv series", data);
  return (
	<>

<Paginate page={page} setPage={setpage}  />

<div style={{display:"flex",justifyContent:"center",flexWrap:'wrap'}} >
{
 isLoading ? <div style={{display:"flex",justifyContent:"center"}}>
 ...loading
</div>:

data?.results.map((item:TvSeriesItem)=>(

<div style={{width:'220px', height:'265px',opacity:'.9', cursor:'pointer'}} key={item.id} className="hoverMovieCard w-full m-2 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" onClick={()=>navigate('/tvseries/'+ item?.id)}>
	
      <div style={{display:"flex",justifyContent:"center"}} >

	    <img className="m-1 movieCard"  src={posterImageBaseUrl+item?.poster_path } alt={item?.original_title || item?.title || "movie"} />
		</div>

         <div className="px-5 pb-5">
            <p className="font-semibold tracking-tight text-gray-900 dark:text-white" style={{color:'rgb(22 83 175)'}}>{item?.original_title || item?.title || item?.name || item?.original_name  || "-"}</p>
            <span className="font-semibold text-gray-900 dark:text-white" style={{color:'dimgray'}}>{moment(item.first_air_date).format('DD-MM-YYYY')}</span>
	</div>
</div>

))
}





</div>	
</>
  )
}
