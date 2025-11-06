class Notificacion {
    constructor(destinatario) {
        this.destinatario = destinatario;
    }
    enviar() {
        throw new Error("El método enviar() debe ser implementado por las subclases");
    }
}
class Email extends Notificacion {
    enviar() {
        console.log(`Enviando Email a ${this.destinatario}...`);
    }
}
class SMS extends Notificacion {
    enviar() {
    console.log(`Enviando SMS a ${this.destinatario}...`);
    }
}
class Push extends Notificacion {
    enviar() {
        console.log(`Enviando Notificación Push a ${this.destinatario}...`);
    }
}
function enviarTodasLasNotificaciones(notificaciones) {
    for (const notificacion of notificaciones) {
        notificacion.enviar();
    }
}
const notificaciones = [
    new Email("usuario@email.com"),
    new SMS("+123456789"),
    new Push("user_token_abc")
];

enviarTodasLasNotificaciones(notificaciones);