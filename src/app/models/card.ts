export class Card{
    buttons:string[];
    content: string;
    icons: string[];
    imageUrl: string;
    subtitle: string;
    title: string;
    constructor(buttons:string[], content: string,icons:string[],imageUrl: string,subtitle: string,
        title: string){
            this.buttons=buttons;
            this.content=content;
            this.icons=icons;
            this.imageUrl=imageUrl;
            this.subtitle=subtitle;
            this.title=title;

    }
}