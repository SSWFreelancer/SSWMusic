import { Component, Vue } from "vue-property-decorator";
import { IMusic } from "./index";
function getAudioSource(fileName: string) {
    return require(`@/assets/musics/${fileName}`);
}
@Component
export default class Musics extends Vue {
    musics: IMusic[] = [
        {
            "id": "1",
            "name": "Mendirman",
            "singer": "Ozodbek Nazarbekov",
            "image": "https://storage.kun.uz/source/3/VxbKRvgXfohBQWQj0TQdRV80oiuMG7id.jpg",
            "source": getAudioSource('mendirman.mp3'),
        },    
        {
            "id": "2",
            "name": "Vatanim",
            "singer": "Sevara Nazarxon",
            "image": "",
            "source": getAudioSource('vatanim.mp3'),
        },   
        {
            "id": "3",
            "name": "Starman",
            "singer": "David Bowie",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCb32AwcGZacXbm8XMKxVSKF8G2sgZLwvDxA&s",
            "source": getAudioSource('starman.mp3'),
        }                                
    ]
}


