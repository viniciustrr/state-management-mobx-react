import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import { StoreContext } from '../../stores/store.context';
import { Button, Dialog } from "@mui/material";


const HomeView: React.FC = () => {

    const {authStore} = useContext(StoreContext);
    const authenticated = authStore.isAuthenticated();

    if(authenticated){
        return(
            <Dialog open>
                <div className="container">
                <h3>Bem vindo, fulano</h3>
                <Button onClick={() => authStore.logout()}> 
                    Log out
                </Button>
                </div>
            </Dialog>
        )
    }else{
        return(<></>);
    }
    
};

const Home = observer(HomeView);
export {Home};