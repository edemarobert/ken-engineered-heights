export interface ImageInterface {
    id: number;
    attributes: {
        name: string;
        alternativeText: string;
        caption: string;
        width: number;
        height: number;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formats: any;
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string;
        provider: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        provider_metadata: any;
        created_at: string;
        updated_at: string;

    }
}


export interface ProjetsInterface {
    id: number;
    attributes: {
        title: string;
        year: number;
        location: string;
        description: string;
        created_at: string;
        updated_at: string;
        published_at: string;

        images: {
            data: ImageInterface[];
        }
    }
}