// import { Module } from '@nestjs/common';
// import { AuthclientService } from './authclient.service';
// import { AuthclientController } from './authclient.controller';

// import { JwtModule, JwtService } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { UserModule } from 'src/user/user.module';
// import { UserService } from 'src/user/user.service';
// import { JwtStrategy } from 'src/Strategy/jwt.strategy';

// @Module({ imports: [    
//   UserModule,    
//   PassportModule.register({
//       defaultStrategy: 'jwt',
//       property: 'user',
//       session: false,
//   }),
//   JwtModule.register({
//     secret:   "dhiasecretkey",
//     signOptions: {
//       expiresIn: 3600
//       },
//   }),
// ], 

// exports: [
//   PassportModule,
//   JwtStrategy,
//   AuthclientService
// ],
//   providers: [AuthclientService],
//   controllers: [AuthclientController,JwtStrategy]
// })
// export class AuthclientModule {}
