// validation rules
const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const MSG_INVALID = (field: string) => `${field} is invalid`
const MSG_REQUIRED = (field: string) => `${field} is required`
const MSG_ALL_FIELDS_REQUIRED = 'All fields are required'
const MSG_CHECK_ALL = (field: string[]) => field.filter(f => !!f).join(', ')

export { EMAIL_PATTERN, MSG_INVALID, MSG_REQUIRED, MSG_ALL_FIELDS_REQUIRED, MSG_CHECK_ALL }
