import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import classes from './Structure.module.css'

const structure = (props) => {
    return(
        <Auxiliary>
            <div>
                Toolbar, Sidebar, Backdrop
            </div>
            <main className = {classes.Content}> 
                {props.children}
            </main>

        </Auxiliary>
    );
}

export default structure;