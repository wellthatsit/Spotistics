import { Artist } from "./artist.model";

export class TopArtistsResult {
    topArtists : Artist[] = new Array<Artist>();
    accessToken : string = '';
}