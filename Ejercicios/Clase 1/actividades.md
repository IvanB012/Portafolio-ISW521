ACTIVIDAD 1

1.	El rector menciono solo que publiquen el sistema en internet, en parte esta bien. Pero el solo lo menciona desde un concepto básico, pero realmente internet es un mundo muy complejo que no determina como se accederá a esa app. Porque podría ser por una app de escritorio conectado a un servidor o la incluso web. Ahora la distinción del director de TI es importante porque el responde desde la realidad técnica, porque el habla que, de desplegar el sistema por WWW, además menciona algo muy importante que define la seguridad del mismo proyecto, si el WWW será publica o no.  
2.	Esta utilizando ambos, utiliza el internet porque depende de la red global para acceder al sitio web. Y el WWW lo utiliza para protocolos HTTP para transmitir la información por los navegadores.
3.	Ambos organismos coexisten en capas diferentes, el W3C es para la parte de interfaz y frontend y IFTF es importante para la comunicación y el backend, define el comportamiento del protocolo HTTP. 


ACTIVIDAD 2

a.	Respuesta de la primera pregunta:
1.	Internet: se utiliza para el sitio de información pública, permitiendo que cualquier persona pueda acceder a la plataforma web de manera global, sin presentar credenciales o alguna conexión privada a la organización. 
2.	Intranet: Se implementa para el área de RRHH debido a que gestiona datos financieros confidenciales. El acceso queda restringido exclusivamente a la red interna y en caso de teletrabajo, se exige el uso obligatorio de una VPN para mantener una conexión cifrada.
3.	Extranet: Esta diseñada para que los usuarios externos específicos y autenticados con anterioridad, puedan acceder de forma controlada a recursos privados del municipio.
b.	Extranet ya que conlleva datos importantes de la base de datos y sistemas internos de municipio. Por esto lleva una inversión compleja y alta, para asegurar accesos e identidades. (El profe añadió: Intranet, porque requiere de alta seguridad por los datos personales y salarios que están legalmente protegidos)
c.	Sí, mediante aislamiento lógico, como utilizando Máquinas Virtuales o contenedores como Docker para hacer cada entorno por separado. De este modo, si un atacante logra comprometer el sitio público, quedará contenido en ese entorno que ataco y se evita que ataque los otros sistemas. No obstante, para asegurar esto se debe implementar segmentación de red y se debe tener en cuenta que no es la opción óptima para un entorno de producción real, ya que introduce un riesgo de SPOF, si el hardware del servidor físico falla, los tres servicios se caerían al mismo tiempo.

 
ACTIVIDAD 3

1.	https://api.github.com:443/repos/bryancs/isw521/issues?state=open&labels=semana1#comentarios 
a.	https es el protocolo
b.	host el dominio github
c.	puerto es el 443
d.	path: repos/bryancs/isw521/issues
e.	parametros son los querys para la base de datos del sistema: state=open&labels=semana1
f.	fragmento: la sección comentarios donde se quiere dirigir la url
2.	https://campus.utn.ac.cr/sedes/san-carlos/periodos/2026-ii/cursos/isw-521, correcto: https://campus.utn.ac.cr/cursos/isw-521/2026-ii/san-carlos
3.	https://campus.utn.ac.cr/estudiantes/2022-0001
4.	https://campus.utn.ac.cr/cursos/isw-521/semanas/3/materiales

 
ACTIVIDAD 4

Respuestas de la primera:
1.	campus.utn.ac.cr.cr: TDL: .cr (ccTLD) - SLD: utn - Subdominio: campus
2.	www.netflix.com: TDL: .com (gTLD) - SLD: netflix - Subdominio: www
3.	api.github.io: TDL: .io (ccTLD) - SLD: github - Subdominio: api
4.	app.maravilla.co.cr: Tipo: .cr (ccTLD) - SLD: Maravilla - Subdominio: app

Respuestas de la segunda:
1.	Lo administra NIC Costa Rica, que es una unidad de la Academia Nacional de Ciencias de Costa Rica.
2.	Lo opera y administra la empresa Verisign, bajo la supervisión y políticas de la ICANN.
3.	No. Una vez que una organización compra y es dueña del dominio principal, tiene control total sobre su propia zona. Aunado a ello, puede crear los subdominios que quiera de forma interna y gratuita sin pedirle permiso a la ICANN ni a ningún agente externo.

Respuesta de la tercera:
No, no lo necesita pagar. Porque la UTN ya es la propietaria legítima del dominio raíz utn.ac.cr. Crear egresados es nada más agregar una línea nueva.

Respuesta de la cuarta:
Registro A, es un nombre de dominio directamente a una dirección IP física. Y el Registro CNAME es un nombre de dominio a otro nombre de dominio.
