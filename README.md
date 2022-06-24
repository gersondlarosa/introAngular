# introAngular
Curso de angular

#Crear nuevo proyecto

Primero crearemos el directorio desde PowerShell

Yo lo tengo en la sigueinte ruta

PS C:\Users\linck> cd C:\Users\linck\OneDrive\Documentos\prueba

lo crearemos con mkdir angular

PS C:\Users\linck\OneDrive\Documentos\prueba> mkdir angular

ingresamos en la carpeta cd angular

PS C:\Users\linck\OneDrive\Documentos\prueba\angular> ng new clientes-app y nos preguntara si agregaremos el Angular routing le desimos que no luego cargamso yo lo tengo como pasteleria pero ustedes pueden ponerle cliente ya que estoy haciendo una practica diferente


![crear proyecto en angular](https://user-images.githubusercontent.com/68626555/173973001-84d0531b-a346-49a6-9cf5-c314b13a57c0.png)

entramos en nuestro proyecto y lo corremos

PS C:\Users\linck\OneDrive\Documentos\prueba\angular> cd pasteleria-app
PS C:\Users\linck\OneDrive\Documentos\prueba\angular\pasteleria-app> ng serve -o

Si lo hacemos bien lo veremos de la siguiente manera


![ng serve](https://user-images.githubusercontent.com/68626555/173974102-a6b35a48-6fcd-43c5-a181-e984bb519306.png)

![navegador](https://user-images.githubusercontent.com/68626555/173974108-2c0f547e-7ab3-499e-aa3b-874b95cd1cf2.png)



Borramos lo que tenemos en app.component.html y lo dejamos en h1

<h1>{{title}}</h1> y lo dejamos asi se modifica el app-component.html

![local](https://user-images.githubusercontent.com/68626555/173975221-e4525ab0-77ac-4656-9be7-aee5fe1a3ffa.png)

Verificamos nuestro app.components.ts vemos que en @Component tenemos el selctor, la url y el stilo

![app components ts](https://user-images.githubusercontent.com/68626555/173976923-197d6246-391a-40a4-aa44-de2f209f47bd.png)


el selector lo mandaremos llamar al index.html para que se muestre

![compo](https://user-images.githubusercontent.com/68626555/173977239-8ba4f618-b86b-4962-b85c-0683fe8ef68c.png)

Hacemos un camgio en nuestro app.components.ts en nuestra class AppComponent creamos dos variables mas de tipo string curso y profesor que se veran reflejadas en nuestro app.component

      import { Component } from '@angular/core';

      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
      })
      export class AppComponent {
        title = 'Bienveniso a Angular';

        curso: string = 'Curso de Spring 5 con Angular ';
        profesor: string = 'Joel Gerson Flores'
      }



![ts](https://user-images.githubusercontent.com/68626555/173979407-dc351a7f-ba28-4a03-8916-153911b76e96.png)


y las mandamos a llamar

      <h1>{{title}}</h1>
      <ul>
        <li>{{curso}}</li>
        <li>Profesor {{profesor}}</li>
      </ul>


![angular](https://user-images.githubusercontent.com/68626555/173979514-78a016ff-7494-4945-92d1-1cbf968deaad.png)

# Agregar BootStrap en Angular

Ingrsamos a bootstrap en la siguiente liga

https://getbootstrap.com/docs/4.6/getting-started/introduction/

copiamos los linck de css y js esto es de la version BootStrap 4.6

# CSS
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">


# JS
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>

      <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>

# INDEX

Podemos sacar la plantilla completa de la mima pagina y se ve de la siguiente manera


![BootStrap](https://user-images.githubusercontent.com/68626555/174205738-6c077eb1-b061-4270-99b3-f8f1325cea80.png)


Y en nuestro proyecto de la siguente manera

![angular2](https://user-images.githubusercontent.com/68626555/174206063-4117e522-88ad-40d4-a3fb-b9bca1ec56a8.png)

Buscanrenos un nav-bar en la pagina de BootStrap y copiaremos en nuestro app-component.html el nav mas completo




![nav](https://user-images.githubusercontent.com/68626555/174206933-0be6c79a-fed7-4aa3-89e5-035bdf7c18a4.png)

![angular3](https://user-images.githubusercontent.com/68626555/174206941-54b568f3-f225-4d01-b34d-5d1e43403eb3.png)

Recordemos que debemos de poner el popper antes del bootstrap.min

      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>


  ## Crando nuevo componente Header component

  Crearemos una carpeta nueva que se llame header dentro de la carpeta crearemos un header.coponent.ts

![headercoponent](https://user-images.githubusercontent.com/68626555/174692101-f02e3562-fe5c-47e7-855c-2690a66ef5fe.png)


  Despues crearemos un comonente con @Component y le pondremos un selector y un template y importaremos el componenente de @angular/core aun no lo podemos pcupar ya que hay que llamarlo en el app.module.ts

            import {Component} from '@angular/core';

            @Component({
              selector: 'app-header',
              template: `
                        App Angular
              `

            })

            export class HeaderComponent{
            title: string = 'App Angular'
             }

   ## Importando el header component

  Abriremos nuestro app.module y lo importalemos como al header component y en declarations lo mandamos llamar

![app module ts](https://user-images.githubusercontent.com/68626555/174692606-ca71b549-9ca3-42af-9a17-23b9c45b085c.png)

   ya que lo tenemos declarado lo que teniamos en nuestro header component lo mandamos llamar en nuestro template y declaramos un en nuestro herader component una variablde de tipo string llamada title y le pondremos de esta manera title: string = 'App Angular'

             import {Component} from '@angular/core';

            @Component({
              selector: 'app-header',
              template: `
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">{{title}}</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-                    expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled">Disabled</a>
                    </li>
                  </ul>
                  <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>
              </nav>
              `
            })
            export class HeaderComponent{
            title: string = 'App Angular'
            }


![template](https://user-images.githubusercontent.com/68626555/174693182-9d9f8ab4-99eb-4943-bfe5-12de5eb20f8d.png)


  Levantamos nuestro proyecto con ng serve -o y listo se tiene que ver de la sigueinte manera


![run](https://user-images.githubusercontent.com/68626555/174693194-8411e42a-4ff0-44b7-a4e2-a974e6883f4a.png)



## Separar el template del componente con templateUrl

Lo que aremos es quitar el  template y lo remplazaremos por el templateUrl, tendremos que crear un html que se llame header.component.html y lo que teniamos en el 
template de header component lo movemermos al html


![html](https://user-images.githubusercontent.com/68626555/174907425-ccf0cddc-6d4f-458c-96fe-61f24630fe8e.png)

y lo que teneiamo en el templa lo movemos al header.htmltcomponene.


![template02](https://user-images.githubusercontent.com/68626555/174907520-b94e917e-9c58-466f-a9cb-7c7ecd37943d.png)


y por ultimo lo mandamos a llamar con su selector que es app-header que esta en el header.component.ts que es este "selector: 'app-header'" 

![selector](https://user-images.githubusercontent.com/68626555/174907856-586d7230-c17c-4c76-8c90-0c14e0796ff7.png)

## Creando footer.component

Abrimos nuestra consola y creamos noestro footer component

![footercmd](https://user-images.githubusercontent.com/68626555/174917373-0719f97b-cd3e-440b-b7e9-121d3c1f5227.png)

se creara la carpeta de footer en nuestro proyecto y se vera de la siguiente manera

![01](https://user-images.githubusercontent.com/68626555/174917439-313c9e0b-59bd-480b-a780-734b18e7daa9.png)

Luego ingresamos a footer desde el footer component

![footercomponent](https://user-images.githubusercontent.com/68626555/174918195-c86c45e5-832a-4816-a19e-8b3c2d7d4519.png)


abriremos el footercoponent.ts marcara un erro esto es por que al crearlo te toma el . solo hay que quitarlo

![footercomponent ts](https://user-images.githubusercontent.com/68626555/174918303-bca75e74-55e6-489e-a3e4-940d0f3d2fa7.png)

hay que crear el footer.component.html y ponenmos nuestras etiquestas de footer

            <footer class="bg-dark rounded-top">
              <div class="">
                <p>
                  &copy;{{autor.nombre + '' + autor.apellido}}
                </p>
              </div>
            </footer>


![footer](https://user-images.githubusercontent.com/68626555/174918583-671e0361-c009-43dd-b309-279c2b67e6cc.png)

y lo declaramos en el app.module.ts para que se pueda ver nuestro template

![declaracion](https://user-images.githubusercontent.com/68626555/174918746-4c6d1b7a-baa2-4234-b56b-414dddda7505.png)

y lo pasamos a nuestra vista de app.component.html


![selectorfooter](https://user-images.githubusercontent.com/68626555/174918918-84732722-5a41-4818-8f7f-e5c8a0e7f3ac.png)

      <footer class="footer bg-dark rounded-top text-center">
        <div class="container py-2">
          <p class="text-white my-2">
            &copy;{{autor.nombre + '' + autor.apellido}}
          </p>
        </div>
      </footer>

se crea css de footer y se agrega al app.component como un arreglo que agregara mas css


            import { Component } from '@angular/core';

            @Component({
              selector: 'app-root',
              templateUrl: './app.component.html',
              styleUrls: ['./app.component.css']
            })
            export class AppComponent {
              title = 'Bienveniso a Angular';

              curso: string = 'Curso de Spring 5 con Angular ';
              profesor: string = 'Joel Gerson Flores'
            }


      
                  .footer{
              position: absolute;
              bottom:  0px;
              height: 60px;
              width: 100%;

            }
            
   y el app component se debe de ver de la sigueinte manera
   
            
      <app-header></app-header>
      <div class="container">
        <h1>{{title}}</h1>
        <ul>
          <li>{{curso}}</li>
          <li>Profesor {{profesor}}</li>
        </ul>
      </div>
      <app-footer></app-footer>

 
al desplegar tu proyecto se ve de la sigueitne manera




![doom](https://user-images.githubusercontent.com/68626555/174920353-1e129abe-7a31-40b7-ae5c-7420c0af001e.png)


## Directiva estructural *ngFo

Para crear un nuevo componente  dentro de nuestro proyecto crearemos con `ng g c directiva` y creara todoso los componentes y la carpeta


![1](https://user-images.githubusercontent.com/68626555/175198535-de06d767-dc7c-4a6f-b97c-073ed0edcdf3.png)

![3](https://user-images.githubusercontent.com/68626555/175198636-b1aaaf52-e11f-4e80-96ef-b042bd784ba0.png)

de igual forma ya no importara el Directivas component enapp.module

![2](https://user-images.githubusercontent.com/68626555/175198600-9788c3a5-2ae1-49d6-bc3a-2c987512e9f1.png)



En nuetro directiva.component creamos un atributo y lo llamremos lista corsoy lo meteremos eun un arreglo

      listaCurso: string[] = ['Type','JavaScript', 'Java SE', 'C#', 'PHP'];
      
      ![5](https://user-images.githubusercontent.com/68626555/175199584-67b05bac-7c5c-4807-8be3-b894aaa44842.png)

      
      

En nuestro directiva.component.html lo mandaremos crearemos una una lista en la cual agregaremos el `ngFor`

          <div class="card">
            <div class="card-header">
                Lista de cursos
              </div>
              <ul class="list-group">
                <li class="list-group-item" *ngFor="let curso of listaCurso">{{ curso }}</li>
              </ul>
           </div>


   ![6](https://user-images.githubusercontent.com/68626555/175199633-2343630c-bde2-495a-974d-37eab7223cee.png)



Se despliega nuesrto produycto y ya debe de traer el arreglo 



![html](https://user-images.githubusercontent.com/68626555/175200402-67dca6d4-b1fe-4d0a-bf03-10854b5393db.png)


# Directiva estructural *ngIf


Primer o en nuetro html crearemos un booton arriba de nutro card


       <button type="button"  class="btn btn-primary my-3">Ocultar</button>
       
En nuetro directiva.component crearemos un atributo que sera boleano habilitar: boolean = true; despues en nuetro html no iremos a nuestra ulo que sera lo que queremos que muestre y mostraremos un `*ngIf="habilitar == true"` a qui indicamos que siempre esta en verdadero


![2](https://user-images.githubusercontent.com/68626555/175438043-2e0e8c73-d26f-4ced-8ffa-d31b11f84bfa.png)

y crearemos un metodo que no retornara nada sera void y trraeremos el atributo habilitar y le diremos que si es verdadero tretornaremos false de lo contrario sera verdadero

            setHabilitar(): void{
              this.habilitar = (this.habilitar==true)? false: true;
            }



![1](https://user-images.githubusercontent.com/68626555/175437735-4b29bf3c-f2fa-4d4f-ae2b-e78774011710.png)

mandamos llamar con nuestra instruccion click al metodo habilitar y con las llaver le dieremos que si habilitar es verdadero lo oculete en caso contrario que lo muestre 

<button type="button" (click)="setHabilitar()" class="btn btn-primary my-3">{{habilitar==true? 'Ocultar': 'Mostras'}}</button>


![3](https://user-images.githubusercontent.com/68626555/175438192-93eb18aa-79c1-4a8a-8721-635c2a823242.png)

Al desplegar nuestro proyecto se mostrara a si 


![4](https://user-images.githubusercontent.com/68626555/175438278-a275857d-d38f-4961-bc3c-e92371957004.png)

y si damos click ocultara nuestra lista


![5](https://user-images.githubusercontent.com/68626555/175438314-1ca4d2c1-9857-4e0e-9e30-6677b2e8114f.png)



# Creando el componente clientes.component

Se ingresa a nuestra ruta mediante consola, yo lo estoy haciendo en atom y ya me trae la ruta de mi proyecto que es la sigueinte

PS C:\Users\linck\OneDrive\Documentos\GitHub\introAngular\clientes-app>

pondremos el siguiente comando que nos generar la carpeta

ng g c clientes no agregara los siguientes archivos

![2022-05-25 20_04_34-Project — C__Users_linck_OneDrive_Documentos_GitHub_introAngular_clientes-app — ](https://user-images.githubusercontent.com/68626555/170393979-e4947136-8edd-423d-bfa0-613b9475b788.png)

despues ingresasremos a

cd src
cd app
cd .\.clientes\

y quedaremos en la sigueinte linea y ahi ingresaremos ng g class cleinte que nos generara la clase clientes

PS C:\Users\linck\OneDrive\Documentos\GitHub\introAngular\clientes-app\src\app\clientes>ng g class que nos aparecera de la siguiente manera

![ang](https://user-images.githubusercontent.com/68626555/170394255-1ce1e09b-8646-4209-9017-d75bbe89512b.png)

de clientes.components.ts eliminarems

clientes.component.spec.ts
clientes.component.css

y quedara de la sigueitne manera


![2022-05-25 20_12_24-clientes component ts — C__Users_linck_OneDrive_Documentos_GitHub_introAngular_c](https://user-images.githubusercontent.com/68626555/170395040-7a23ccfc-c12f-4ff9-8329-172a271753d9.png)



Quitamos  ,styleUrls: ['./clientes.component.css'] ya que si no lo quitamos se quedara la congiruracion del css y marcara un error

![2022-05-25 20_12_24-clientes component ts — C__Users_linck_OneDrive_Documentos_GitHub_introAngular_c](https://user-images.githubusercontent.com/68626555/170394811-972c8381-dbd8-423d-8653-c0f8fd890089.png)
