import React from 'react'
import Card from '../Card'
import Button from '../Button/Button';
import classes from './ErrorModal.css'
function ErrorModal(props) {
    return (
        <div>
            <div className={classes.backdrop}
            onClick={props.onClick}
            >

            </div>
            <Card className={classes.modal}>
            <header>{props.title}</header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onClick}>Okay</Button>
            </footer>
        </Card>
        </div>
    )
}

export default ErrorModal
