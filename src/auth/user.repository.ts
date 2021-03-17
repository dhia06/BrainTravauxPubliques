import { EntityRepository, Repository } from 'typeorm';
import * as Bcrypt from 'bcrypt';

import { User } from './user.entity';
import { AuthCredentialsDto } from './DTO/auth-credentials.dto';
import { ConflictException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  /*async signUp(signUpDTO: AuthCredentialsDto): Promise<{ email: string }> {
    const {email, password} = signUpDTO;
    const user = new User();
    user.email = email;
    user.salt = await Bcrypt.genSalt();

    user.password = await Bcrypt.hash(password, parseInt(user.salt));
    try {
      await user.save();
      return {email};
    } catch(error) {
      if(error.code == 'ER_DUP_ENTRY') {
        throw new ConflictException('email already exists');
      } else {
        throw new InternalServerErrorException("Problème au niveau du serveur veuillez consulter l'administrateur");
      }
    }
  }*/

  async signIn(signInDTO: AuthCredentialsDto): Promise<User> {
    const {email, password} = signInDTO;

    const user = await User.findOne({email});

    if (user && await user.verifyPassword(password)) {
      return user;
    } else {
      return user;
    }

  }
}
