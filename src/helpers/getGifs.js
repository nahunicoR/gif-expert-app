import { APIKEY } from '../main'

export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        images: gif.images.downsized_medium.url
    }));

    return gifs;
}