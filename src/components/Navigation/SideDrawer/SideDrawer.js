import classes from './SideDrawer.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from  '../NavigationItems/NavigationItems'
import Auxiliary from '../../../hoc//Auxiliary/Auxiliary'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) =>{
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.show) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return(
        <Auxiliary>
            <Backdrop show = {props.show} clicked ={props.clicked}/>
            <div className = {attachedClasses.join(' ')}>
                <div className = {classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Auxiliary>
    );
}

export default sideDrawer;