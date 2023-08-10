 export const AppConstants = {
     SCHEMA: {
         NOTE_SCHEMA: 'notes',
         USER_SCHEMA: 'users',
         ROLE_SCHEMA: 'roles',
         PERMISSION_SCHEMA: 'permission',
     },
     STATUS_CODE: {
         SUCCESS: 200,
         SERVER_ERROR: 500,
         UNAUTHORIZED: 401,
         RESOURCE_NOT_FOUND: 404
     },
     ROUTES: {
         NOTES: {
             ADD: '/add-note',
             ALL_NOTES: '/all-notes',
             DELETE_NOTES: '/delete',
             UPDATE_NOTES: '/update'
         },
         USER: {
             ADD: '/add-user',
             ALL_USERS: '/all-user',
             DELETE_USER: '/delete-user',
             UPDATE_USER: '/update-user'
         }
     }
 }
 export const STATUS_CODES = AppConstants.STATUS_CODE;
 export const NOTE_ROUTES = AppConstants.ROUTES.NOTES;
 export const USER_ROUTES = AppConstants.ROUTES.USER;