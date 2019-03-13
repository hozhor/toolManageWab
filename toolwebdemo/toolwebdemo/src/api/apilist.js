const localJSON = true;
const localJsonPath = '/token.json';
const ApiList = {
    token: (localJSON) ? localJsonPath : 'yusp-app-single/oauth/token',
    info: (localJSON) ? localJsonPath : 'yusp-app-single/api/session/info',
    logout:(localJSON) ? localJsonPath : 'yusp-app-single/api/session/info',
    slide: (localJSON) ? localJsonPath : 'yusp-app-single/api/slideinformation/querySlideInformation',
    notice:(localJSON) ? localJsonPath : 'yusp-app-single/api/noticeinformation/query',
    toolsList: (localJSON) ? localJsonPath : 'yusp-app-single/api/toolinformation/querybyType',
    toolDetail:(localJSON) ? localJsonPath : 'yusp-app-single/api/toolinformation/queryDetails',
}
export {ApiList}