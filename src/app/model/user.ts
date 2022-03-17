import {RoleType} from "./role-type";

export class User {
  public userId: number=0;
  public email: string ="";
  public userName: string | undefined;
  public encryptedPassword: string | undefined;
  public userRole: RoleType | undefined;
}
