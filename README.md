<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub - Formulario de Registro</title>
</head>
<body>
    <header>
        <h1>Bienvenido a GitHub</h1>
        <p>Plataforma de alojamiento de repositorios y colaboración en proyectos</p>
    </header>

    <main>
        <section>
            <h2>Acerca de GitHub</h2>
            <p>
                <strong>GitHub</strong> es la plataforma más popular para desarrolladores de software en todo el mundo. 
                Aquí puedes <em>crear</em>, <strong>compartir</strong> y <em>colaborar</em> en proyectos de código abierto.
            </p>
            <p>
                Nuestro servicio permite que miles de desarrolladores trabajen juntos de manera eficiente. 
                <strong>La colaboración es fundamental</strong> en el desarrollo moderno, y con GitHub lo hacemos <em>más fácil que nunca</em>.
            </p>
        </section>

        <section>
            <h2>Formulario de Registro</h2>
            <p>Por favor, completa el siguiente formulario para crear tu cuenta:</p>
            
            <form action="#" method="POST">
                <div class="form-group">
                    <label for="nombre">Nombre Completo:</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Juan Pérez" required>
                </div>

                <div class="form-group">
                    <label for="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" placeholder="tu@email.com" required>
                </div>

                <div class="form-group">
                    <label for="contrasena">Contraseña:</label>
                    <input type="password" id="contrasena" name="contrasena" placeholder="Contraseña segura" required>
                </div>

                <div class="form-group">
                    <label for="edad">Edad:</label>
                    <input type="number" id="edad" name="edad" min="13" max="120" placeholder="18">
                </div>

                <div class="form-group">
                    <label for="website">Sitio Web (Opcional):</label>
                    <input type="url" id="website" name="website" placeholder="https://tuwebsite.com">
                </div>

                <div class="form-group">
                    <label for="color">Color Favorito:</label>
                    <input type="color" id="color" name="color" value="#24292e">
                </div>

                <div class="form-group">
                    <label for="fecha">Fecha de Nacimiento:</label>
                    <input type="date" id="fecha" name="fecha" required>
                </div>

                <div class="form-group">
                    <label for="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono" placeholder="+34 123 456 789">
                </div>

                <div class="form-group">
                    <label for="experiencia">Experiencia:</label>
                    <select id="experiencia" name="experiencia" required>
                        <option value="">Selecciona tu nivel</option>
                        <option value="principiante">Principiante</option>
                        <option value="intermedio">Intermedio</option>
                        <option value="avanzado">Avanzado</option>
                        <option value="experto">Experto</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="comentarios">Comentarios Adicionales:</label>
                    <textarea id="comentarios" name="comentarios" placeholder="Cuéntanos sobre ti..."></textarea>
                </div>

                <button type="submit">Registrarse</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Rogelio. Todos los derechos reservados.</p>
        <p><em>Construyendo el futuro del software en colaboración</em></p>
    </footer>
</body>
</html>