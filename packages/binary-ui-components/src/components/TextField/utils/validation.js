
export function isNumberMaskValid(mask) {
  return mask.replace(/\s/g, '').length === mask.length;
}

export function validatePhone(phoneNumber) {
  return phoneNumber.replace(/(?!^)\+/g, '').replace(/[^0-9+]/g, '');
}
