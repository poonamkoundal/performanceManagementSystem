/*
 * @file: constants.js
 * @description: Handle constants for the application
 * @author: Poonam Koundal
 */

/************ User roles in the system *************/
export const Role = {
  VP: 1,
  // ADMIN: 2,
  MANAGER: 3,
  ASSOCIATE: 4,
  HR: 5
};

/************ Department in organization *************/
export const Department = {
  OS: 'OS',
  BD: 'BD',
  MOBILITY: 'MOBILITY',
  BDG: 'BDG',
  MOD: 'MOD'
};

/************ Project payment mode *************/
export const PaymentMode = {
  FIXED: 'fixed',
  HOURLY: 'hourly'
};