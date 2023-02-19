module.exports = {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

        try{
            await strapi.plugins['email'].services.email.send({
                to: 'omis1296@gmail.com',
                from: 'omar.noyola@ideas4learning.com', // e.g. single sender verification in SendGrid
                subject: 'Nuevo registro',
                html: `
                <div style="width: 100%; background: #f2f2f2; font-family: Arial, Helvetica, sans-serif; color: #3F4043; padding: 20px 0;">
                    <div style="width: 50%; height: auto; margin: 0 auto; background: #ffffff; box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.4); border-radius: 10px; overflow: hidden">
                        <div style="text-align: center;  background: #FAAF40;">
                            <h1 style="font-size: 42px; color: #ffffff; margin: 0; padding: 20px 0"">
                                Ceffan
                            </h1>
                        </div>
                
                        <div style="padding: 20px">
                            <p>${result.nombre} se registro al curso <span style="font-weight: 700">"${result.curso}"</span> en la modalidad <span style="font-style: italic;">${result.modalidad}</span> </p>
                            <p><span style="font-weight: 700">Contacto:</span> ${result.contacto}</p>
                            <p><span style="font-weight: 700">Informacion adicional:</span> ${result.informacion}</p>
                        </div>
                    </div>
                </div>
                `,
                
            })
        } catch(err) {
            console.log(err);
        }
    }
}