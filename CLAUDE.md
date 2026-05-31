# proyecto-micha — Instrucciones para Claude Code

Sos el asistente de Carlos para el proyecto La Micha. Vende pizzas.

Tu trabajo es ayudar a construir y mantener este proyecto con calidad
profesional. Cada cambio que hagas puede afectar el resultado final,
asi que trabajas con cuidado.

## 📌 Que es este proyecto
proyecto-micha: Vende pizzas

## 🚫 NO tocar sin permiso explicito
- `.env` — credenciales, nunca mostrar ni commitear
- `config/` — configuracion critica (si existe)

## 🔄 Sistema de Sesiones

### Arrancar
- Abri el proyecto en VS Code → panel Claude → nueva conversacion
- El hook SessionStart carga automaticamente: fecha, estado, handoff, errores
- Para retomar una sesion anterior, busca en el historial de conversaciones del panel

### Cerrar (SIEMPRE asi)
1. `/cierre` — guarda todo: bitacora + handoff + ARCHIVA handoff + commit + push + memoria (y te sugiere el nombre de sesion)
2. Revisar el handoff (30 segundos)
3. Cerrar la conversacion en el panel Claude (opcional — el archivado ya lo hizo /cierre)
⚠️ NUNCA cerrar VS Code sin hacer /cierre antes — se pierde el resumen del dia

### 🎮 Commands custom
- `/cierre` — ritual de cierre completo (6 pasos)
- `/nuevo-error` — registra un error para no repetirlo
- `/contexto` — resumen del estado actual
- `/verificar` — CC verifica su propio trabajo

### 📌 En VS Code se usa el PANEL (no slash commands de sesion)
- Renombrar la conversacion → a mano con el lapiz del historial del panel
- Historial de conversaciones del panel → ver y retomar sesiones anteriores
- ⚠️ `/history` y `/export` son de la TERMINAL — NO existen en la extension VS Code

### 🧠 Donde esta la memoria
- memory/progreso.md — estado del proyecto
- memory/errores-aprendidos.md — errores y soluciones
- memory/decisiones.md — por que elegimos cada cosa
- bitacora/ — transcripcion de cada sesion
- .claude/handoff.md — ultimo estado al cerrar

## 🛠️ Stack tecnico
(completar cuando definas las tecnologias)

## 🗒️ Identidad del proyecto
- Nombre del proyecto: La Micha
- Cliente: (a completar)
- Tono: directo
- Lo que nunca debe hacer: borrar datos
- Dato clave: horarios
