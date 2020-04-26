new Vue({
    el: '#app',
    data: {
        criterioDeBusquedaNomApe: '',
        criterioDeBusquedaDni: '',
        //Aquí, en este array es donde tienen que agregar su información
        personas:
            [
                { nombre: 'Daniel', apellido: 'Sánchez', dni: 20442873, correo: 'danielsanchez68@hotmail.com' },
                //Agregar aquí nombre, apellido, dni y correo
                { nombre: 'Ezequiel', apellido: 'Laboranti', dni: 33032717, correo: 'ezelaboranti@hotmail.com' },
                { nombre: 'Santiago', apellido: 'Castro', dni: 33537569, correo: 'santucastro@live.com.ar' },
                { nombre: 'Tomas', apellido: 'Melendez', dni: 39847671, correo: 'tomas6melendez@gmail.com' },
                { nombre: 'Rodrigo', apellido: 'Iglesias', dni: 29004601, correo: 'rniglesias@gmail.com' },
                { nombre: 'Gonzalo', apellido: 'Garcia Tunon', dni: 38708301, correo: 'garciatunong@gmail.com' },
                { nombre: 'Eugenio', apellido: 'Sainte Marie', dni: 38707149, correo: 'eugenio.saintemarie@gmail.com' },
                { nombre: 'Clara', apellido: 'Franzoni', dni: 36626020, correo: 'franzoniclara23@gmail.com' },
                { nombre: 'Nuevo', apellido: 'y', dni: 0, correo: 'x@y' }
            ]
    },
    computed: {
        personasFiltradas() {
            return this.personas.filter((persona) => {
                let registroNomApe = `${persona.nombre}${persona.apellido}`
                let registroDni = `${persona.dni}`
                return this.requisitoOk() && registroNomApe.toLowerCase().includes(this.criterioDeBusquedaNomApe.toLowerCase())
                && registroDni.includes(this.criterioDeBusquedaDni)
            });
        }
    },
    methods: {
        getNombreCompleto(persona) {
            return `${persona.nombre} ${persona.apellido}`
        },
        requisitoOkNomApe(persona) {
            return this.criterioDeBusquedaNomApe.length >= 3 || this.criterioDeBusquedaNomApe.length == 0;
        },
        requisitoOkDni(persona) {
            return this.criterioDeBusquedaDni.length >= 3 || this.criterioDeBusquedaDni.length == 0;
        },
        requisitoOk(persona) {
            return this.requisitoOkNomApe() && this.requisitoOkDni();
        }
    }
});



