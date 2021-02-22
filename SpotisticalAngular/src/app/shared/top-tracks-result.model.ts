import { Track } from './track.model'

export class TopTracksResult {
    constructor() {
        this.TopTracks = new Array<Track>();
    }

    public TopTracks : Track[];
    public AccessToken : string = '';
}