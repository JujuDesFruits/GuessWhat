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
  public async ResetToken() {
    await new Promise((resolve, reject) => {
      removeToken();
      this.SET_TOKEN('');
      this.SET_ROLES([]);
      resolve({});
    });
  }
}

export const UserModule = getModule(User);
