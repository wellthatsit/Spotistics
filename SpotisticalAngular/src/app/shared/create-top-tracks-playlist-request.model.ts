export class CreateTopTracksPlaylistRequest {
    userID : string = '';
    accessToken : string = '';
    trackUris : string[] = new Array<string>();
    playlistName : string = '';
}