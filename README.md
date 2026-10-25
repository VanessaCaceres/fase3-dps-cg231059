# Mi App – Versión móvil (Primera entrega)

Aplicación móvil desarrollada con **React Native (Expo)** y **React Navigation**, basada en los mockups de Figma de la Etapa 1.

## Funcionalidades
- Login y registro de usuarios con validaciones de formulario.
- Navegación: flujo de autenticación (Login ↔ Registro) y módulo principal con pestañas (Inicio, Perfil) y pantalla de detalle.
- Cerrar sesión.
- Diseño centralizado en `src/theme.js`.

## Validaciones
- Nombre obligatorio (mínimo 3 caracteres).
- Correo obligatorio y con formato válido.
- Contraseña obligatoria, mínimo 8 caracteres y al menos un número.
- Confirmación de contraseña igual a la contraseña.
- Mensaje de error si el correo ya está registrado o las credenciales son incorrectas.

## Cómo ejecutar
```bash
npm install
npx expo start
```
Escanea el QR con la app **Expo Go** o abre un emulador.

**Cuenta de prueba:** `demo@correo.com` / `Demo1234`

## Estructura
```
App.js
src/
  components/   Input, Button
  context/      AuthContext (autenticación simulada)
  navigation/   RootNavigator, MainTabs
  screens/      Login, Register, Home, Detail, Profile
  utils/        validators
  theme.js      colores y espaciados
```

## Nota
La autenticación es simulada en memoria (sin backend) para esta primera entrega.

## Integrantes
-VANESSA IVETTE CACERES GUZMAN CG231059
