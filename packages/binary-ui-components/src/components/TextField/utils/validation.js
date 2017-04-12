
export function getValidatedPhone(phoneNumber) {
  return phoneNumber.replace(/(?!^)\+/g, '').replace(/[^0-9+]/g, '');
}
