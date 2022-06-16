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


