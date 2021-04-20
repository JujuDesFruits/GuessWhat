import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators';
import {getToken, removeToken, setToken} from '@/utils/cookies';
import store from '@/store';
import {IUser, UserLoginOptions} from '@/types/User';
import UserAPI from "@/api/UserAPI";

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUser {
  public id = -1;
  public mail = '';
  public token = getToken() || '';
  public roles: string[] = [];
  public username = '';
  public createdAt = new Date();
  public points = 0;

  /** Mutations **/
  @Mutation
  private SET_ID(id: number) {
    this.id = id;
  }

  @Mutation
  private SET_MAIL(mail: string) {
    this.mail = mail;
  }

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token;
  }

  @Mutation
  private SET_USERNAME(name: string) {
    this.username = name;
  }

  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles;
  }

  @Mutation
  private SET_CREATEDAT(createdAt: Date) {
    this.createdAt = createdAt;
  }

  @Mutation
  private SET_POINTS(points: number) {
    this.points = points
  }


  /** Actions **/
  @Action({ rawError: true })
  public async Login(userInfo: UserLoginOptions) {
    await UserAPI.login(userInfo).then((response: any) => {
      const user: any = response.data
      setToken(user.jwt);
      this.SET_TOKEN(user.jwt);
      this.SET_ROLES([user.user.role.name])
    });
  }

  @Action
  public async GetUserInfo() {
    if (this.token === '') {
      throw Error('GetUserInfo: token is undefined!');
    }
    await UserAPI.getUserInfo()
      .then((response: any) => {
        const user: any = response.data
        this.SET_ROLES([user.role.name])
        this.SET_USERNAME(user.username)
        this.SET_MAIL(user.email)
        this.SET_ID(user.id)
        this.SET_CREATEDAT(user.createdAt)
        this.SET_POINTS(user.points)
      })
  }

  @Action
  public async ResetToken() {
    await new Promise((resolve) => {
      removeToken();
      this.SET_TOKEN('');
      this.SET_ROLES([]);
      resolve({});
    });
  }
}

export const UserModule = getModule(User);
