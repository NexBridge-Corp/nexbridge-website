# Despliegue en DigitalOcean App Platform — NexBridge Website

Guía para publicar el sitio usando DigitalOcean App Platform con deploy automático desde GitHub.

---

## Requisitos previos

- Cuenta en [DigitalOcean](https://cloud.digitalocean.com)
- Repositorio `NexBridge-Corp/nexbridge-website` conectado a GitHub
- Dominio configurado (registro DNS)

---

## 1. Crear la App

1. Ir a [cloud.digitalocean.com/apps](https://cloud.digitalocean.com/apps)
2. **Create App**
3. Seleccionar **GitHub** como fuente
4. Repositorio: `NexBridge-Corp/nexbridge-website`
5. Branch: `main`
6. Activar **Autodeploy** ✅
7. Click **Next**

---

## 2. Configurar el recurso

En la pantalla de configuración:

1. DigitalOcean detectará el proyecto. Seleccionar tipo: **Static Site**
2. Configurar:
   - **Build Command:** `npm ci && npm run build`
   - **Output Directory:** `dist`
3. El app spec ([.do/app.yaml](.do/app.yaml)) ya incluye esta configuración
4. Click **Next**

---

## 3. Configurar dominio personalizado

1. En la app creada, ir a **Settings → Domains**
2. Click **Add Domain**
3. Ingresar tu dominio (ej: `nexbridge.com`)
4. DigitalOcean te dará un registro **CNAME** para configurar en tu proveedor DNS:

```
Tipo     Host    Valor                              TTL
CNAME    @       <tu-app>.ondigitalocean.app.       300
CNAME    www     <tu-app>.ondigitalocean.app.       300
```

> **Nota:** Algunos proveedores no permiten CNAME en el apex (@). En ese caso, usa un registro **ALIAS** o **ANAME**, o configura solo `www` y redirige el apex.

5. DigitalOcean gestiona el **SSL automáticamente** con Let's Encrypt

---

## 4. Deploy automático

Con **Autodeploy** activado:

- Cada push a `main` despliega automáticamente la nueva versión
- No necesitas configurar secrets ni SSH
- El workflow `deploy.yml` valida el build en GitHub Actions como paso adicional de seguridad

---

## 5. Verificación

- [ ] La app aparece como **Active** en el dashboard de DigitalOcean
- [ ] El sitio carga en `https://<tu-app>.ondigitalocean.app`
- [ ] El dominio personalizado resuelve correctamente
- [ ] El certificado SSL está activo (candado verde)
- [ ] Un push a `main` dispara un nuevo deploy automáticamente

---

## 6. Costos

| Plan          | Precio   | Incluye                        |
|---------------|----------|--------------------------------|
| Starter       | Gratis   | 3 static sites, 1 GiB storage |
| Basic         | $3/mes   | Más bandwidth y storage        |

El plan **Starter gratuito** es suficiente para empezar.

---

## Troubleshooting

### El build falla en App Platform

Revisar los logs en **App → Activity → Build Logs**. Causas comunes:
- Versión de Node.js incorrecta (configurar en Environment)
- Dependencias faltantes

### El dominio no resuelve

- Verificar registros DNS con `dig tudominio.com`
- Los cambios DNS pueden tardar hasta 48h en propagar
- Verificar que el CNAME apunta a `<tu-app>.ondigitalocean.app`

### SSL no se genera

- El dominio debe resolver al App Platform primero
- Esperar unos minutos después de configurar el dominio
