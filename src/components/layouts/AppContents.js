import React from 'react'
import { BrowserRouter as Redirect, Switch, Route } from 'react-router-dom'
 
import Home from '../../views/Dashboard/Home';
import ViewAgent from '../../views/agents/ViewAgent';
import AddAgent from '../../views/agents/AddAgent';
import AddNewPlayer from '../../views/players/AddNewPlayer';
import PlayersList from '../../views/players/PlayersList';
import PointSettings from '../../views/points/PointSettings';
import TransactionReport from '../../views/points/TransactionReport';
import TransferPoint from '../../views/points/TransferPoint';
import TransferPointAgent from '../../views/points/TransferPointAgent';
import TranscationPlayer from '../../views/points/TranscationPlayer';
import TranscationStokez from '../../views/points/TranscationStokez';
import TranscationAgent from '../../views/points/TranscationAgent';
import TransferPointPlayer from '../../views/points/TransferPointPlayer';


import TransferPointStokez from '../../views/points/TransferPointStokez';

import GameHistory from '../../views/game/GameHistory';
import PlayerHistory from '../../views/players/PlayerHistrory';
import ChangePassword from '../../views/settings/ChangePassword';
import ChangeUserPassword from '../../views/settings/ChangeUserPassword';
import AddSuperStokez from '../../views/Stokez/AddSuperStokez';
import ViewSuperStokez from '../../views/Stokez/ViewSuperStokez';

import JeetoJokerGame from '../../views/gamebet/JeetoJokerGame';
import ShowCurrentBet from '../../views/gamebet/ShowCurrentBet';
import SpinWinGame from '../../views/gamebet/SpinWinGame';
import CardsGame from '../../views/gamebet/CardsGame';


export default function AppContents() {
  return (
    <section className="content">
    <div className="container-fluid">
        <Route path="/" exact component={Home} /> 
        
        <Route path="/pointStokez" exact component={TransferPointStokez} /> 
        <Route path="/viewpointStokez" exact component={TranscationStokez} /> 

        <Route path="/pointAgent" exact component={TransferPointAgent} />
        <Route path="/viewpointAgent" exact component={TranscationAgent} />

         
         <Route path="/pointPlayer" exact component={TransferPointPlayer} /> 
         <Route path="/viewpointPlayer" exact component={TranscationPlayer} /> 


        
        <Route path="/AddNewStokez" exact component={AddSuperStokez} /> 
        <Route path="/StokezList" exact component={ViewSuperStokez} /> 

        <Route path="/DistributorList" exact component={ViewAgent} /> 
        <Route path="/AddNewDistributor" exact component={AddAgent} /> 
        <Route path="/PlayersList" exact component={PlayersList} /> 
        <Route path="/AddnewPlayer" exact component={AddNewPlayer} /> 
        <Route path="/SendPointsToDistributor" exact component={PointSettings} /> 
        <Route path="/PoitsReportHistory" exact component={TransactionReport} /> 
        <Route path="/PlayersHistrory" exact component={PlayerHistory} /> 
        <Route path="/GamePlayHistory" exact component={GameHistory} /> 
        <Route path="/ShowCurrentBet" exact component={ShowCurrentBet} /> 
        <Route path="/JeetoJokerGame" exact component={JeetoJokerGame} /> 
        <Route path="/SpinWinGame" exact component={SpinWinGame} /> 
        <Route path="/16CardsGame" exact component={CardsGame} /> 

        <Route path="/ChangePassword" exact component={ChangePassword} /> 
        <Route path="/ResetUserPassword" exact component={ChangeUserPassword} /> 
        </div>
    </section>
  )
}
