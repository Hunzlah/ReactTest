import React, {Component} from 'react';
import ReactIntense from 'react-intense';
import image from './Ali.JPG';
import { Helmet } from 'react-helmet';

let myelement = <ReactIntense src={image} />
const TITLE = 'React_Hunzlah'
class Hunzlah extends Component {
render() {
return (
<div>
<>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        ...
      </>
<h1>Hunzlah Bin Saghir Lone!</h1>
<h2> Muhammad Ali </h2>
<div> <img src={image}/> </div>
<h3>Muhammad Ali was a boxer, philanthropist and social activist who is universally regarded as one of the greatest athletes of the 20th century. Ali became an Olympic gold medalist in 1960 and the world heavyweight boxing champion in 1964. 

Following his suspension for refusing military service, Ali reclaimed the heavyweight title two more times during the 1970s, winning famed bouts against Joe Frazier and George Foreman along the way. Diagnosed with Parkinson's disease in 1984, Ali devoted much of his time to philanthropy, earning the Presidential Medal of Freedom in 2005.</h3>
</div>
); }
}
export default Hunzlah;
