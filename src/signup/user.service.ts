import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import * as bcrypt from 'bcrypt';
// import { confirmEmailLink } from 'src/auth/utils/confirmEmailLink';

import * as nodemailer from 'nodemailer';
import { User } from 'src/Model/user.entity';
import { sendEmaillink } from 'src/auth/utils/sendEmaillink';
import { redis } from './redis';
import { v4 } from 'uuid';
import { Guser } from 'src/Model/guser.entity';




@Injectable()
export class UserService {


  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }


  sendEmail = async (email: string, link: string)  => {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'apikey', // generated ethereal user
        pass: process.env.SENDGRID_API_KEY, // generated ethereal password
      },
    });

    // send mail with defined transport object
 await transporter.sendMail({
      
      from: '"Brain Consulting 👻" <brainconsulting21@gmail.com>', // sender address
      to: email, // list of receivers
      subject: 'Confirmez votre adresse e-mail ', // Subject line
      text: 'Nous sommes très heureux de vous avoir parmi nous', // plain text body
      html: `<b>
      <h1> Bienvenue sur Brain Consulting </h1>
     <h2> Nous voulons vérifier qu'il s'agit bien de votre adresse e-mail pour pouvoir protéger votre compte.
     <br>
     Vous y êtes presque ,confirmez votre compte ci-dessous pour finaliser la création de votre compte :</h2>
      <a href="${link}"><h3>Confirmer votre compte<h3></a>
      <h2>
      Assurez-vous de ne pas partager ce lien publiquement !
      Vous recevrez un autre courrier pour poursuivre votre processus d'inscription dans les plus brefs délais.
      </h2>
      </b>
      <br><h3>Des questions?

      <br> Visitez notre centre d'assistance
  
       <br>Email: Brainconsulting21@gmail.com
  
       <br>Adresse : Rue Lac Leman 1053 Berges du lac
  
       <br>Telephone: (+216)52884352 (+33)0699942007 </h3>`




, // html body
    });
  
    console.log('Message sent: %s');
  
  };

  
// </b> <a href="${url}">${url}</a>


  async showAll() {
    return await this.userRepository.find();
  }


//  confirmEmailLink= async (userId: string,user:User) => {
//     const id = v4();
   
//     if (user.confirmed = false) {
//       user.confirmed = true
//     }
//     await redis.set(id, userId,'ex', 60 * 60 * 15);
//     return `${process.env.BACKEND_HOST}`;
//   };


  
 confirmEmailLink= async (user:User) => {


  await this.userRepository.update(user.id, user);
  return `${process.env.BACKEND_HOST}`;



};


confirmEmailLinkk= async (user:User) => {


  await this.userRepository.update(user.id, user);
  return `${process.env.BACKEND_HOSTt}`;

};

 async Verify(user: User): Promise<User> {

     await this.userRepository.update(user.id, user);
    return null
   }




  async update(user: User): Promise<User> {

    await this.userRepository.update(user.id, user);
    await sendEmaillink(user.email, await this.confirmEmailLinkk(user));
    return null
  }

  
  // async updateC(user: User): Promise<User> {

  //   await this.userRepository.update(user.id, user);
  //   await sendEmaillink(user.email, await confirmEmailLink(JSON.stringify(user.id)));
  //   return null
  // }

  async create(user: User): Promise<User> {
    await this.userRepository.save(user);
    this.sendEmail(user.email, await this.confirmEmailLink(user));
    return null
  }

  async readAll(): Promise<User[]> {
    return await this.userRepository.find();
  }


 



  async hashPassword(pswd) {
    let password = await bcrypt.hash(pswd, 10);
    return password;
    //const isMatch =  await bcrypt.compare(pwd,hash)
  }

  async finduserById(id: number) {

    const cv = await this.userRepository.findOne(id);

      return null;
 
  
      
  }

  async delete(id): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }



}
