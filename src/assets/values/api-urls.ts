export const apiUrl = Object.freeze({
    LOGOUT: '/logout',

    //-------------------- Dashboard -------------------------------
    DASHBOARD: '/dashboard',
    GET_ALL_SCHEDULE_REPORTS: '/dashboard-schedules',
    GET_ALL_FUTURE_SCHEDULES: '/dashboard-future-schedules',
    GET_ALL_GENERATED_REPORTS: '/dashboard-generated-reports',
    GET_ALL_FAILED_REPORTS: '/dashboard-failed-reports',
    GET_ALL_RUNNING_SCHEDULES: '/dashboard-running-schedules',
    GET_BREADCRUM: '/dashboard-breadcrum',

    //-------------------- Access Management -----------------------

    //  user
    POWER_USERS: '/powerusers',
    ADD_POWER_USER: '/add-power-user',
    GET_POWER_USERS: '/powerusers',
    EDIT_POWER_USER: '/edit-power-user',
    DELETE_USER: '/delete-poweruser',
    POWER_USER_PERMISSION: '/poweruser-permission',
    EDIT_USER_PERMISSION: '/add-user-permission',

    // review user group

    USER_GROUPS: '/reportusergroups',
    ADD_REPORT_USER_GROUP: '/add-reportusergroup',
    GET_REPORT_USER_GROUP: '/reportusergroups',
    EDIT_REPORT_USER_GROUP: '/edit-reportusergroup',
    DELETE_REPORT_USER_GROUP: '/delete-report-user-group',
    USER_GROUP_FEATURE_CODE: '/reportusergroup-featurecode',
    EDIT_USER_GROUP_FEATURE_CODE_PERMISSION: '/add-report-usergroup-featurecode',

    //-------------------- Access Management -----------------------

    GET_CONFIGURATION_PARAMS: '/configurationparams',
    GET_CONFIGURATION_PARAMS_DETAILS: '/configurationparams',
    EDIT_CONFIGURATION_PARAM_DETAILS: '/edit-configuration-param',
    GET_CONFIGURATION_PARAM_HISTORY_DETAILS: '/configurationparams-history',

    //-------------------- Report Schedules -----------------------
    GET_INSTANCE_STATUS_LIST: '/instancestatus',
    GET_REPORT_GROUP_LIST: '/reportgroups',
    GET_SCHEDULE_STATUS_LIST: '/schedulestatus',
    GET_REPORT_NAMES_CORRESPONDING_TO_REPORT_GROUP: '/reportgroups-reports',
    REPORT_SCHEDULE_SEARCH_ACTION: '/reportschedule',
    GET_RECURRENCE_TYPE_LIST: '/recurrenceType',
    GET_SCHEDULE_TYPE_LIST: '/scheduletype',
    GET_PARAM_LIST_CORRESPONDING_TO_REPORT_NAME: '/reportschedule-params',
    POST_CREATE_NEW_REPORT_SCHDEULE: '/add-reportschedule',
    GET_REPORT_SCHEDULE_DETAILS: '/reportschedule-edit',
    POST_UPDATE_REPORT_SCHEDULE_STATUS: '/reportschedule-update-schedulestatus',
    GET_SUCCESS_SCHEDULE_REPORT_LIST: '/reportschedule-success-reports',
    GET_FAILURE_SCHEDULE_REPORT_LIST: '/reportschedule-failed-reports',
    GET_DOWNLOAD_REPORT_SCHEDULE_REPORT: '/reportschedule-downloadreports',
    POST_DELETE_REPORT_SCHEDULE_REPORT: '/delete-reports',
    POST_REPORT_SCHEDULE_TERMINATE_STATUS_UPDATE: '/reportschedule-terminate',
    GET_REPORT_GROUP_NAME: '/reports-reportgroups',

    //-------------------- Report -----------------------
    GET_REPORT_DETAILS: '/reports-params'
})