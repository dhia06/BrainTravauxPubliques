import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentials2Dto } from 'src/Authentification/DTO/auth-credentials2.dto';
import { PayloadInterface } from 'src/Authentification/Interfaces/payload.interface';
import { UserPrRepository } from './UserPr.repository';
import { UserPRepository } from 'src/Authentification/signin/user.repository';
import { AuthCredentialsDto } from 'src/Authentification/DTO/auth-credentials.dto';

import * as bcrypt from 'bcrypt';
import { UserPr } from 'src/Model/UserPr.entity';
import { UserP } from 'src/Model/user.entity';
import * as nodemailer from 'nodemailer';
import { Role } from 'src/entities/role';
import { sign } from 'node:crypto';
import { BeforeInsert } from 'typeorm';


@Injectable()
export class LoggerService {
  constructor(
    @InjectRepository(UserPrRepository) private userRepository: UserPrRepository,
    @InjectRepository(UserPRepository) private ProRepository: UserPRepository,
    private jwtService: JwtService) { }

  confirmEmailLink = async (user: UserP) => {


    await this.ProRepository.update(user.id, user);
    return `${process.env.BACKEND_HOST}`;

  };


  confirmEmailLinkk = async (user: UserP) => {


    await this.userRepository.update(user.id, user);
    return `${process.env.BACKEND_HOSTt}`;

  };

  sendEmail = async (email: string, link: string) => {
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


  // async createPr(us: UserPr): Promise<any> {

  //   await this.guserRepository.save(us);
  //  // this.sendEmail(us.email, await this.confirmEmailLink(us));
  //   return null
  // }


  async create(usa: UserPr): Promise<any> {
    console.log("step1")
    await this.userRepository.save(usa);
    console.log("step2")

    console.log("step3")


  }


  async createProff(us: UserP){

    console.log("stepproooooooooooooooooooooooo")

    us.role == Role.professionnel;
    await this.ProRepository.save(us);

    console.log("maiiil",us.email);
    console.log("steppr2222222o",this.confirmEmailLink(us));
    // await  this.sendEmail(us.email,    `${process.env.BACKEND_HOST}`       );
await  this.sendEmail(us.email, await this.confirmEmailLink(us));
 
  }


  // async create(user: User): Promise<User> {
  //   await this.guserRepository.save(user);
  //   this.sendEmail(user.email, await this.confirmEmailLink(user));
  //   return null
  // }

  async getAll(): Promise<UserPr[]> {
    return await this.userRepository.find();
  }





  async showshow() {
    return await this.userRepository.find(({ where: { role: 'professionnel' }, }));
  }


  //   async checkPassword(email: string, password: string){
  //     var userFromDb = await this.ProRepository.findOne({ email: email});
  //     if(!userFromDb) throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND);
  //     return await bcrypt.compare(password, userFromDb.password);
  // }

  // async checkPasswordg(email: string, password: string){
  //   var userFromDb = await this.userRepository.findOne({ email: email});
  //   if(!userFromDb) throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND);
  //   return await bcrypt.compare(password, userFromDb.password);
  // }

  async hashPassword(password) {
    const passwordk = await bcrypt.hash(password, 12);
    console.log("loool",passwordk)
    return passwordk ;
    
  
  }

  async signIn( signInDTO: AuthCredentials2Dto): Promise<any> {
    const {email, password} = signInDTO;
   const user = await this.userRepository.findOne({ password:password } &&{ email:email } );
   const salt =await bcrypt.genSalt();
       const hashedpasswordd = await bcrypt.hash(password, salt); 
     
      console.log('DBpasswd',user.password);
      console.log('passwd',hashedpasswordd);
    const isMatch = await bcrypt.compare(user.plainTextPassword,hashedpasswordd);
    console.log("seeee is match:",isMatch)
      
  
      if (user && isMatch ) {
        console.log("je suis laaaaaaaaaaaa",user.password)
        console.log("jaaaa",signInDTO.password)
        return user;
    } else {
     throw new HttpException('verfier vos coordonnées',HttpStatus.UNAUTHORIZED);
     }
     
    
    }



    async signIn2(credentials: AuthCredentials2Dto): Promise<PayloadInterface> {
      const user = await this.signIn(credentials);
      if (user) {
        const payload = {email: user.email,password:user.password,role:user.role,id:user.id};
        const accessToken = await this.jwtService.sign(payload);
        const role = user.role;
        const firstname = user.firstname;
        const lastname = user.lastname;
        const id =user.id;
        console.log("access token :"+accessToken);
        console.log("role :"+role);
        console.log("firstname :"+firstname);
        console.log("lastname :"+lastname);
  
        return {accessToken,role,firstname,lastname};
    
      } 
      else {
        
        throw new UnauthorizedException('Please confirm your email to login');
      }
    }





}