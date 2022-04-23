export interface IAlbum {
    userId: string;
    id: string;
    title: string;
}

export interface IPhoto {
    albumId: string;
    id: string;
    title: string;
    url: string;
    thumbnailUrl: string;
}
