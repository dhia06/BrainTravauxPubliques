import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rdv } from 'src/entities/Rdv.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import * as nodemailer from 'nodemailer';
import { UserEntity } from 'src/entities/user.entity';
@Injectable()
export class RdvService {


    constructor(
        @InjectRepository(Rdv)
        private rdvRepository: Repository<Rdv>
    ) { }
//methodes asynchrone de creation d'un service
    async create(rdv: Rdv): Promise<any> {
        return await this.rdvRepository.save(rdv);
    }
    //methodes asynchrone de get d'un service
    async  readAll(): Promise<Rdv[]> {
        return await this.rdvRepository.find();
    }
//methodes asynchrone d update d'un service
    async update(rdv: Rdv): Promise<UpdateResult> {

        return await this.rdvRepository.update(rdv.id_rdv,rdv);
    }
//methodes asynchrone de supp d'un service
    async delete(id_rdv): Promise<DeleteResult> {
        return await this.rdvRepository.delete(id_rdv);
    }



    confirmEmailLink = async () => {


        // await this.rdvRepository.update(user.id, user);
        return `${process.env.BACKEND_HOSTo}`;
    
      };


      async createe(us: any){

    
        console.log("maiiil",us.email);
        console.log("steppr2222222o",this.confirmEmailLink());

    await  this.sendEmail(us.email, await this.confirmEmailLink());
     
      }

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
          subject: 'Lien meet ', // Subject line
          text: 'Nous sommes très heureux de vous avoir parmi nous', // plain text body
          html: `<b>
            <h2> Bonjour Madame/Monsieur, </h2>
           <h3>
           Nous sommes l'équipe de Brain Consulting et nous revenons vers vous pour vous informer que votre demande de réunion avec notre expert a été  confirmée .
           <br>
<h3>Par ailleurs ,suite à la crise sanitaire et les restrictions liées aux réunions publiques nous tenons à vous informer 
que notre réunion va se passer en ligne à la date discutée.
<br>Voici le lien de votre meet:
            <a href="${"https://meet.google.com/gxo-mmyo-kwh"}"><h4>https://meet.google.com/gxo-mmyo-kwh<h4></a>
            <h3>
            Assurez-vous de venir à l'heure et de ne pas partager ce lien publiquement !
    
          <br>  
        <h3>Bien cordialement.</h3>
            </b>
            <br><h3>Des questions?
      
            <br> Visitez notre centre d'assistance
        
             <br>Email: Brainconsulting21@gmail.com
        
             <br>Adresse : Rue Lac Leman 1053 Berges du lac
        
             <br>Telephone: (+216)52884352 (+33)0699942007 </h3>`
    
    
      // ,
      //   attachments: [ {   path: 'src/App2.pdf'}]
}),
    
        console.log('Message sent: %s');
    
      };





      async Repondreappdoffre(us: any){
        await  this.RepondreAppOffre(us.email, await this.confirmEmailLink());
        console.log("maiiil",us.email);
         
          }
    
    
    
          RepondreAppOffre = async (email: string, link: string) => {
            // create reusable transporter object using the default SMTP transport
            const transporter = nodemailer.createTransport({
              host: 'smtp.sendgrid.net',
              port: 465,
              secure: true, // true for 465, false for other ports
              auth: {
                user: 'apikey', // generated ethereal user
                pass: process.env.SENDGRID_API_KEY1, // generated ethereal password
              },
            });
        
            // send mail with defined transport object
            await transporter.sendMail({
        
              from: '"Iheb Boubaker " <iheb.boubaker21@gmail.com>', // sender address
         
              to: 'brainconsulting21@gmail.com', // list of receivers
              subject: 'Réponse à un appel d offres ', // Subject line
              text: 'Nous sommes très heureux de vous avoir parmi nous', // plain text body
              html: `<b>
               Monsieur,Madame,
               Suite à votre appel d'offres, je me permets de répondre à celui-ci.
               <br>
               J'ai le grand plaisir d'annoncer que votre offre me correspond 
              parfaitemnt.
               <br>Veuillez trouvez ci-joint les documents qui peuvent vous intéresser.
               <br>Je me tiens à votre disposition pour toute information complémentaire.
               <br> En vous remerciant d’avance, je vous prie d’agréer, Madame, Monsieur, mes respectueuses salutations.  
               <br>Bien cordialement.
               
                <br>  
                <br> 
               Email: iheb.boubaker21@gmail.com   
              <br>Adresse : La Soukra II. 62 Av de l'UMA Immeuble Nesma - Route de la Soukra 2036 Ariana.    
              <br>Telephone: (+216)29903250   `
        
       ,
           attachments: [ {   path: 'src/App (35).pdf'}]
    }),
    //console.log("ggggggg",email);
            console.log('Message sent: %s');
        
          };





}
