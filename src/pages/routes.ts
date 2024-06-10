interface IROUTE {
    [key: string]: string;
}

export const routes: IROUTE = {
    'HOME': '/',
    'ABOUT': '/about',
    'SOCIALS': '/socials',
    'IDEENBAK': '/ideenbak',
    'START_MOKUMMATCH': '/mokummatch',
    'QUESTIONNAIRE': '/mokummatch/questionnaire/:id',
    'TOP_THREE':'/mokummatch/topthree'
}

export const getRouteById = (route: string, id: any) =>{
    return route.replace(':id', id);
}