import axios from "axios"
const cdrtdevAPI = axios.create({
  baseURL: "https://cdrt2-dev-107045.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return cdrtdevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return cdrtdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_sffgg_list(payload) {
  return cdrtdevAPI.get(`/api/v1/sffgg/`)
}
function api_v1_sffgg_create(payload) {
  return cdrtdevAPI.post(`/api/v1/sffgg/`, payload)
}
function api_v1_sffgg_retrieve(payload) {
  return cdrtdevAPI.get(`/api/v1/sffgg/${payload.id}/`)
}
function api_v1_sffgg_update(payload) {
  return cdrtdevAPI.put(`/api/v1/sffgg/${payload.id}/`, payload)
}
function api_v1_sffgg_partial_update(payload) {
  return cdrtdevAPI.patch(`/api/v1/sffgg/${payload.id}/`, payload)
}
function api_v1_sffgg_destroy(payload) {
  return cdrtdevAPI.delete(`/api/v1/sffgg/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return cdrtdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return cdrtdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return cdrtdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return cdrtdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return cdrtdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return cdrtdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return cdrtdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return cdrtdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return cdrtdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return cdrtdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return cdrtdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return cdrtdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_sffgg_list,
  api_v1_sffgg_create,
  api_v1_sffgg_retrieve,
  api_v1_sffgg_update,
  api_v1_sffgg_partial_update,
  api_v1_sffgg_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}