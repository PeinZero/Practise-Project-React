import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import classes from './Structure.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const structure = (props) => {
    return(
        <Auxiliary>
            <Toolbar/>
            <main className = {classes.Content}> 
                {props.children}
            </main>

        </Auxiliary>
    );
}

export default structure;