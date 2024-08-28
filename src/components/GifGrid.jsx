import { GifItem } from "./index";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    gifs && gifs.map((gif) => (
                        <GifItem
                            key={gif.id}
                            title={gif.title}
                            images={gif.images}
                        />
                    ))
                }
            </div>
        </>
    )
}
