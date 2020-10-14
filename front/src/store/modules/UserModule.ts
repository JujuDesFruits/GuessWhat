import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators';
import { getToken, removeToken } from '@/utils/cookies';
import store from '@/store';
import { IUser } from '@/types/User';

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUser {
  public id = -1;
  public mail = '';
  public token = getToken() || '';
  public roles : string[] = [];
  public firstName = '';
  public lastName = '';
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

  @Mutation
  private SET_FIRSTNAME(firstName: string) {
    this.firstName = firstName;
  }

  @Mutation SET_LASTNAME(lastName: string) {
    this.lastName = lastName;
  }

  @Action
  public ResetToken() {
    removeToken();
    this.SET_TOKEN('');
    this.SET_ROLES([]);
  }
}

export const UserModule = getModule(User);
