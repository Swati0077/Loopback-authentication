import {AuthenticationComponent, registerAuthenticationStrategy} from '@loopback/authentication';
import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent
} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {JWTStrategy} from './authentication-strategies/jwt-strategy';
import {TokenServiceConstrants} from './keys';
import {MySequence} from './sequence';
import {BcryptHasher} from './services/hash.password.bcrypt';
import {JWTService} from './services/jwt-service';
import {MyUserService} from './services/user-services';

export {ApplicationConfig};

export class LoopbackAssignmentApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);
    //Setup Binding
    this.setupBinding();

    this.component(AuthenticationComponent)
    registerAuthenticationStrategy(this , JWTStrategy)
    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
  setupBinding(): void{
    this.bind('service.hasher').toClass(BcryptHasher);
    this.bind('round').to(10);
    this.bind('services.user.services').toClass(MyUserService)
    this.bind('services.jwt.service').toClass(JWTService);
    this.bind('auth.jwt.secretKey').to(TokenServiceConstrants.TOKEN_SECRET_VALUE)
    this.bind('auth.jwt.expireIn').to(TokenServiceConstrants.TOKEN_EXPIRE_IN_VALUE)
  }
}
