import { BaseService } from './baseService'

class UserService extends BaseService {
  constructor() {
    const baseAPIUrl = process.env.VUE_APP_BASE_API
    super(baseAPIUrl + '/user')
  }

  async login(data) {
    var postResponse = await super.post('/login', data);
    console.log('postresponse : ' + postResponse);
    return postResponse;
  }
}

const userService = new UserService()

export { userService }
