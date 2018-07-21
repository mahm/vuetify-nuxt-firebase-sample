export const isDebug = () => { return process.env.NODE_ENV !== 'production' }
export const check = ({ check }) => { return check.data }
export const checkId = ({ check }) => { return check.id }
