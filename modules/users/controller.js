//const User = require('../models/user');
const { getDbRef } = require('../../lib/mongo');
const COLLECTION_NAME = 'users';
let jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const jwtKey = process.env.JSON_TOKEN;

const getAllUsers = async () => {
  try {
    const users = await getDbRef()
      .collection(COLLECTION_NAME)
      .find({})
      .toArray();
    return { users };
  } catch (error) {
    return { error };
  }
};

async function getUserByUserName(username) {
  try {
    const user = await getDbRef()
      .collection(COLLECTION_NAME)
      .findOne({ username });
    return user;
  } catch (error) {
    return { error };
  }
}

async function createUser(user) {
  try {
    const { username, password, roles, email } = user;
    if (await checkIfUsernameExist(username)) {
      return {
        success: false,
        msg: 'User is already registered',
      };
    }

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await getDbRef().collection(COLLECTION_NAME).insertOne(user);
    const token = jwt.sign({ username, email }, jwtKey);
    return {
      success: true,
      data: {
        username,
        email,
      },
      token,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      msg: 'Internal error',
    };
  }
}

const checkIfUsernameExist = async (username) => {
  const existUser = await getUserByUserName(username);
  return existUser;
};

module.exports = { getAllUsers, getUserByUserName, createUser };
