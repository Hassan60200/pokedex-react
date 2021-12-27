import React, {useRef} from 'react';
import {Box, Button, Typography, Modal} from "@material-ui/core";
import emailjs from 'emailjs-com';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const ModalForm = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_12n656s', 'template_178xquj', form.current, 'user_TcPoFZpCQsFOdtX0DL6v4')
            .then((result) => {
                alert("Votre message a bien été envoyer !!!");
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="container">
            <div style={{marginTop: '150px'}}>
                <h1 className="mt-5">Envoyer un mail à l'équipe Pokesearch</h1>
                <div>
                    <Button style={{backgroundColor: 'green', color: 'white', width: '150px', marginTop: '150px'}}
                            onClick={handleOpen}>Email</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <form onSubmit={sendEmail} ref={form}>
                                <label>Name</label>
                                <input className="form-control" type="text" name="name" />
                                <label>Email</label>
                                <input className="form-control" type="email" name="email" />
                                <label>Message</label>
                                <textarea className="form-control" name="message" />
                                <input className="btn btn-outline-success mt-2" type="submit" value="Envoyer" />
                            </form>
                        </Box>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default ModalForm;