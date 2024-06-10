export interface IHeaderSectionValues{
    id: number,
    title: string;
    route: string;
}
export interface INavBarText {
    title: string;
    navbutton: string;
    question: string;
    isQuestion?: boolean;
    currentQNum?: number;
    totalQuestions?: number;
    activeIndex?: number;
    showDrawer?: boolean;
    headerSectionValues: IHeaderSectionValues[];
}