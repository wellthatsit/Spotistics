import { Track } from './track.model'

export class TopTracksResult {
    constructor() {
        this.topTracks = new Array<Track>();
    }

    public topTracks : Track[];
    public accessToken : string = '';
}