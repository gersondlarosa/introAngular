# introAngular
Curso de angular





#Creando el componente clientes.component

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


