import { GifItem } from "./index";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    gifs && gifs.map(({ id, title, images }) => (
                        <GifItem
                            key={id}
                            title={title}
                            images={images}
                        />
                    ))
                }
            </div>
        </>
    )
}
